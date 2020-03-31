import React from 'react';
import { filterTypeObject } from '../../redux/types/filterType';

const FilterButton = (props: any) => {
  let { children, filterItem } = props;
  let { _onClick } = props;
  return (
    <button className={children===filterItem?"selected":""} onClick={()=>{_onClick({ filter: filterTypeObject[children] })}}>
      { children }
    </button>
  )
};

export default FilterButton