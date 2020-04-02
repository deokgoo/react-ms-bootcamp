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
    act(() => {
      ReactDOM.render(<TestMe  name={"testName"}/>, container);
    });

    // 1. mount a <TestMe> Component here
    // 2. use enzyme wrapper's find() method to retrieve the #innerMe element
    // 3. simulate a hover with "mouseover" event via the simulate() API
    // 4. make assertions with expect on the text() of the #innerMe element
  });
});
