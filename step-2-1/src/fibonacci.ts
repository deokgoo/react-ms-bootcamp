
const FibConst = 3;

export const fib = (n: number) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

export default FibConst
