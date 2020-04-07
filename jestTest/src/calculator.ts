class Calculate {
  private result: number;

  constructor() {
    this.result = 0;
  }

  sum(a: number, b: number) {
    this.result = a+b;
  }

  multiple(a: number, b: number) {
    this.result = a*b;
  }

  getResult() {
    return this.result;
  }
}

export default Calculate;
