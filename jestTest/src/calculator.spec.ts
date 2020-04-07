import Calculate from './calculator';

describe('calculate test', () => {
  let target = null;

  beforeEach(() => { target = new Calculate();});

  it('sum UT', () => {
    target.sum(1, 2);

    expect(target.getResult()).toBe(3);
  })

  it('multiple UT', () => {
    target.multiple(1, 2);

    expect(target.getResult()).toBe(2);
  })
})

