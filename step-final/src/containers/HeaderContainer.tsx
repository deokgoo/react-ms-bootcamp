import { connect } from 'react-redux';
import { filterType } from '../redux/types/filterType';
import Header from '../components/Header';
import { setFilter } from '../redux/actions/filterAction';
import { addTodo } from '../redux/actions/todoListAction';

const mapStateToProps = (state: {FilterStore: filterType}) => {
  const { filter } = state.FilterStore;

  return { filter }
};

const mapDispatchToProps = ({ setFilter, addTodo });

export default connect(mapStateToProps, mapDispatchToProps)(Header);