export default class Stack<T> {
  private _store: T[];

  constructor() {
    this._store = [];
  }
  
  push(el: T) { 
    this._store.push(el); 
  }

  pop(): T{ 
    return this._store.pop(); 
  }
}
