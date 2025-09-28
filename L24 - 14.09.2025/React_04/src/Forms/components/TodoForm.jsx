import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoForm = () => {
	const [todo, setTodo] = useState({
		id: '',
		text: '',
		isCompleted: false,
	});
	const { addTodo } = useTodo();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('submit')

		// option 1 - יצירת ID
		// const d = new Date()
		// const id = d.toLocaleString()
		// option 2 - יצירת ID
		const id = Date.now();
		// console.log(id)

		// setTodo({
		// 	...todo,
		// 	id: id,
		// });

		const todoToSent = { ...todo };
		todoToSent.id = id;
		addTodo(todoToSent);

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
		<div>
			<h1>TodoForm</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Add a new todo' onChange={handleChange} value={todo.text} />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};

export default TodoForm;
