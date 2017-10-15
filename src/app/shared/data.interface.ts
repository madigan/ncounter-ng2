export interface Data<T> {
  fromJSON(json:any):T;
  ID:number|undefined;
}
