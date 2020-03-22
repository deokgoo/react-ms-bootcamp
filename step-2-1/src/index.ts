import FibConst, { fib } from './fibonacci';
import Stack from './stack';

// TODO: import Stack from ...

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----
console.log(fib(FibConst));

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
type TrafficLight = 'Red' | 'Green' | 'Yellow';

// TODO: define Car interface
interface Car {
  wheels: number,
  color: string,
  make: string,
  model: string
}

// TODO: create Car instance
const myCar: Car = {
  wheels: 2,
  color: 'red',
  make: 'bmw',
  model: 'new',
}

console.log('My car:', JSON.stringify(myCar));
// ---- Generics ----
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('Number on top of the stack:', myStack.pop());

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
const megaObj = {
  ...obj1,
  ...obj2,
}

// TODO: use destructuring syntax to extract { first, second, catcher }
const { first, second, catcher } = megaObj;
console.log('first: ', first);
console.log('second: ', second);
console.log('catcher: ', catcher);

// ---- Async / Await ----
function makePromise(): Promise<number> {
  return Promise.resolve(5);
}

const yourAge = async (age: number): Promise<string> => {
  return `age: ${age}`;
}

// TODO: create a new async function
async function run() {
  try{
    let res1 = await makePromise();
    const res2 = await yourAge(26);
    console.log(res1);
    console.log(res2);
  }catch(e) {
    console.log(e);
  }
}

run();

// Make this file a module so its code doesn't go in the global scope
export { };
