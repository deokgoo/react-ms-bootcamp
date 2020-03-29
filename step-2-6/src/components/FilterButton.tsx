import React from 'react';
import { setFilter } from '../reducers/visibleFilter/action';
import { FilterTypeEnum } from '../reducers/visibleFilter/type';
import { connect } from 'react-redux';

const FilterButton = (props: {filterType: FilterTypeEnum, enumIndex: number, setFilter: any}) => {
  const { filterType, enumIndex } = props;
  const { setFilter } = props;
  
  return (
    <button className={filterType === enumIndex ? 'selected' : ''} onClick={() => setFilter(enumIndex)}>{FilterTypeEnum[enumIndex]}</button>
  )
};

const mapStateToProps = (state: any) => {
  const { filterType } = state.visibleFilterStore;

  return { filterType }
};

const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton);