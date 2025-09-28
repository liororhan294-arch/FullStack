import React, { useState } from 'react';
import styles from "./TodoForm.module.css"
import {useDispatch} from 'react-redux';
import { addTodo } from '../../../store/slices/todoSlice';

const TodoForm = () => {
	const dispatch = useDispatch()
	const [todo, setTodo] = useState({
		id: '',
		text: '',
		isCompleted: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = Date.now();

		const todoToSent = { ...todo };
		todoToSent.id = id;

		dispatch(addTodo(todoToSent))

		setTodo({
			id: '',
			text: '',
			isCompleted: false,
		});
	};

	const handleChange = (e) => {
		// e - event - האירוע
		// target - האלמנט שמגיב לאירוע הזה
		// value - הערך של האלמנט שמגיב לאירוע הזה
		// console.log(e.target.value)
		setTodo({
			...todo,
			text: e.target.value,
		});
	};

	return (
		<div className={styles.container}>
			<h1>TodoForm</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label className={styles.visuallyHidden} htmlFor='todo-input'>Add a new todo</label>
				<input
					id='todo-input'
					type='text'
					placeholder='Add a new todo'
					onChange={handleChange}
					value={todo.text}
					className={styles.input}
					aria-label='Add a new todo'
				/>
				<button className={styles.button} type='submit'>Add</button>
			</form>
		</div>
	);
};

export default TodoForm;
