export interface JSONable<T> {
  fromJSON(json:any):T;
}
