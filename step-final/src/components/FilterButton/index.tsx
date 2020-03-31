import React from 'react';

const FilterButton = (props: any) => {
  let { children, filterItem } = props;

  return (
    <button className={children===filterItem?"selected":""}>
      { children }
    </button>
  )
};

export default FilterButton