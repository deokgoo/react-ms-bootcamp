import { Stack } from './stack';

describe('Stack', () => {
	type stackType = number;
	let target: Stack<stackType>;
	beforeEach(() => {
		target = new Stack<stackType>();
	});

	afterEach(() => {
		target = null;
	});

  it('should push item to the top of the stack', () => {

    let target: Stack<stackType> = new Stack();

    [1, 2, 3].forEach(x => {
			target.push(x);
			expect(target.peek()).toBe(x);
		});
  });

  it('should pop the item from the top of stack', () => {
    // TODO: implement test here:
		const testCase = [1, 2, 3];

    testCase.forEach(x => target.push(x));

    testCase.reverse().forEach(x => {
			expect(target.pop()).toEqual(x);
		})
  });
});
