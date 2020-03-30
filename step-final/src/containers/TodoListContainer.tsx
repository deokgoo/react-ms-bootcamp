import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state: any) => {
  const { TodoListStore } = state;
  return { todoLists: TodoListStore }
};

export default connect(mapStateToProps)(TodoList);