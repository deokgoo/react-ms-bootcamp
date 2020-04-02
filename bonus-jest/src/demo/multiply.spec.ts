import { multiply } from "./multiply";

describe('multiply ut', () => {
	it('result of multiply test', () => {
		expect(multiply(2, 5)).toEqual(10);
	});
	it('digit test', () => {
		expect(multiply(3, 5.5)).toEqual(16.5);
	})
});