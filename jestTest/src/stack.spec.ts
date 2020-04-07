import { Stack } from './stack';

describe('Stack', () => {
  let target: Stack<number> | null = null;

  beforeEach(() => {
    target = new Stack<number>();
  })

  it('should push item to the top of the stack', () => {
    const mockFunc = jest.spyOn();
    mockFunc(5);
    mockFunc(6);
    mockFunc(7);

    expect(mockFunc.mock.results[1].value).toBe(11);
  });

  it('should pop the item from the top of stack', () => {
    let testCase = [7, 8, 0, 1, 5, 7];

    testCase.forEach(x => target.push(x));
    
    testCase.reverse().forEach(x => expect(target.pop()).toBe(x))
    // 3. pop a few items off the stack
    // 4. write assertions via the expect() API
  });
});
