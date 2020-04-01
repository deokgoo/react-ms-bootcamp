import React from 'react';
import {filterItem, filterType, filterTypeObject} from '../../redux/types/filterType';

interface FilterButtonProps {
  children: filterItem,
  filterItem: filterItem,
  _onClick: (x: filterType) => void
}
const FilterButton = (props: FilterButtonProps) => {
  let { children, filterItem } = props;
  let { _onClick } = props;

  const _setFilter = () => {
    _onClick({ filter: filterTypeObject[children] })
  };

  return (
    <button className={children===filterItem?"selected":""} onClick={_setFilter}>
      { children }
    </button>
  )
};

export default FilterButton