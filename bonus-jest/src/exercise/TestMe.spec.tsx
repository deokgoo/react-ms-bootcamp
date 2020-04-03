import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { TestMe } from './TestMe';

describe('TestMe Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('should render correctly when hovered', () => {
    const testName = 'testName';

    act(() => {
      ReactDOM.render(<TestMe  name={testName}/>, container);
    });
    let targetElement = container.querySelector('#innerMe');

    expect(targetElement.textContent).toEqual(`Hello ${testName}, Hover Over Me`);
    targetElement.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    expect(targetElement.textContent).toEqual('Enabled');
  });
});
