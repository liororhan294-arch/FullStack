import React from 'react';
import styles from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateIsCompleted } from '../../../store/slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
	const textStyles = todo.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

	const onDeleteTodo = () => {
		dispatch(deleteTodo(todo.id));
	};

	const onUpdateIsCompleted = () => {
		dispatch(updateIsCompleted(todo.id));
	};

	return (
		<li className={styles.item}>
			<span className={styles.text} style={textStyles}>
				{todo.text}
			</span>
			<div className={styles.actions}>
				<button className={styles.deleteButton} onClick={onDeleteTodo}>
					Delete
				</button>
				<button className={styles.completeButton} onClick={onUpdateIsCompleted}>
					{todo.isCompleted ? 'Completed' : 'Complete'}
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
