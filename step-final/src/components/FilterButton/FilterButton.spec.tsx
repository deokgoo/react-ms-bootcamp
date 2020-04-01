import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import FilterButton from './index';
import { act } from "react-dom/test-utils";
import {filterItem, filterType} from "../../redux/types/filterType";

let container:HTMLElement|null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if(container===null) return;
  unmountComponentAtNode(container);
  container?.remove();
  container = null;
});

it("visible children", () => {
  const testChildren:filterItem = 'ALL';
  const filterItem:filterItem = 'ALL';
  const renderElement = (
    <FilterButton filterItem={filterItem} _onClick={(x: filterType)=>{}}>
      {testChildren}
    </FilterButton>
  );

  act(() => { render(renderElement, container); });

  expect(document.querySelector('button')?.textContent).toBe(testChildren);
});

it("button Click", () => {
  const testChildren:filterItem = "ACTIVE";
  const filterItem:filterItem = 'ALL';
  const _onClickMock = jest.fn();

  const renderElement = (
    <FilterButton filterItem={filterItem} _onClick={_onClickMock}>
      {testChildren}
    </FilterButton>
  );

  act(() => {
    render(renderElement, container);
    let btn = document.querySelector('button');
    btn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(_onClickMock).toHaveBeenCalledTimes(1);
  expect(_onClickMock).toHaveBeenCalledWith({filter: testChildren});
});

it("filtered Btn", () => {
  const testChildren:filterItem = "ALL";
  const filterItem:filterItem = 'ALL';
  const _onClickMock = jest.fn();

  const renderElement = (
    <FilterButton filterItem={filterItem} _onClick={(x: filterType)=>{}}>
      {testChildren}
    </FilterButton>
  );

  act(() => {
    render(renderElement, container);
  });

  let btn = document.querySelector('button');

  expect(btn?.classList).toContain('selected');

});