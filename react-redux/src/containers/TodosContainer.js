import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';


function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback(text => addTodo(text), [addTodo]);
  const onToggle = useCallback(id => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
}

// 무조건 객체로 반환해야 한다.
const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = {
  addTodo,
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);