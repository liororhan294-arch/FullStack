import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import { useSelector } from 'react-redux';

const TodoList = () => {
 const todos = useSelector(globalState => globalState.todos.todos)
  if (todos.length === 0) {
    return <p className={styles.empty}>לא נוספו עדיין משימות</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;


