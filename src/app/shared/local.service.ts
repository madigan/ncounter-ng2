import { JSONable } from './jsonable.interface';
import { IDable } from './idable.interface';

/**
 *  Example usage: class MonsterService extends LocalService<Monster>
 */
export class LocalService<T extends JSONable<T> & IDable> {
  private list:T[];

  constructor(readonly KEY:string, private type:{new():T}) {
    this.load();  // TODO: Does this need to be in some sort of init method?
  }

  public getList():T[] {
    return this.list.slice();
  }

  public add(T):number {
    if(T.ID == undefined) T.ID = this.list.length;
    this.list.push(T);
    this.store();
    return T.ID;
  }

  public update(T) {
    if(T.ID == undefined) this.add(T);
    else this.list[this.list.findIndex((obj)=>obj.ID == T.ID)] = T;
    this.store();
  }

  public remove(T) {
    this.list = this.list.filter((obj) => obj != T);
    this.store();
  }

  public get(id:number):T {
    let temp:T[] = this.list.filter((thing) => thing.ID == id);
    return temp.length > 0 ? temp[0] : null;
  }

  private load():void {
    let rawList:any[] = JSON.parse(localStorage.getItem(this.KEY) || "[]");
    this.list = [];
    rawList.map(
      (character) => this.list.push(new this.type().fromJSON(character))
    );
  }

  private store():void {
    localStorage.setItem(this.KEY, JSON.stringify(this.list));
  }
}
