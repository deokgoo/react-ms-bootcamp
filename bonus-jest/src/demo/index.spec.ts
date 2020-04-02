import * as target from './index';
import * as multiModule from './multiply';

let count: number;

beforeEach(() => {
	count = 0;
});

it('increment ut', () => {
	target.increment();
	target.increment();

	expect(target.getCount()).toBe(2);
});

it('decrement ut', () => {
	target.increment();
	target.increment();
	target.decrement();

	expect(target.getCount()).toBe(1);
});

it('square ut', () => {
	let spyMulti = jest.spyOn(multiModule, 'multiply');
	spyMulti.mockImplementationOnce((a: number, b: number) => a*b);

	expect(target.square(5)).toBe(25);
});
