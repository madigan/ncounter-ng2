import { Subject } from "rxjs/Subject";

import { IDable } from "./idable.interface";
import { JSONable } from "./jsonable.interface";
import { LocalService } from "./local.service";

// TODO: Refactor to use dependency injection instead of inheritance.
export class ObservableList<T extends JSONable<T> & IDable> extends LocalService<T> {
  listChange:Subject<void> = new Subject<void>();

  constructor(KEY:string, type:{new():T}) {
    super(KEY, type);
  }

  public add(T):number {
    let id:number = super.add(T);
    this.listChange.next();
    return id;
  }

  public update(T):void {
    super.update(T);
    this.listChange.next();
  }

  // TODO: Only emit events if something was actually removed.
  public remove(T) {
    super.remove(T);
    this.listChange.next();
  }
}
