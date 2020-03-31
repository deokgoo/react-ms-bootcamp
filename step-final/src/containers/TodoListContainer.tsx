import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleCompleted } from '../redux/actions/todoListAction';

const mapStateToProps = (state: any) => {
  const { TodoListStore } = state;
  return { todoLists: TodoListStore }
};

const mapDispatchToProps = ({
  toggleCompleted
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);