class StackQueue<T> {
  private in: Stack<T>;
  private out: Stack<T>;

  constructor() {
    this.in = [];
    this.out = [];
  }

  public enqueue(item: T): void {
    this.in.push(item);
  }

  public dequeue(): T{
    this._moveToOutStackIfEmpty();
    return this.out.pop();
  }

  private _moveToOutStackIfEmpty(): void {
    if (this.out.length > 0){
      return;
    }

    while(this.in.length > 0){
      this.out.push(this.in.pop());
    }
  }
}
