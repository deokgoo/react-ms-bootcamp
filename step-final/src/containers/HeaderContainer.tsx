import { connect } from 'react-redux';
import { filterType } from '../redux/types/filterType';
import Header from '../components/Header';

const mapStateToProps = (state: {FilterStore: filterType}) => {
  const { filter } = state.FilterStore;

  return { filter }
};

export default connect(mapStateToProps)(Header);