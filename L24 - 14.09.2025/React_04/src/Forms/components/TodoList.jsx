import React from 'react';
import TodoItem from './TodoItem';
// Custom Hook
import { useTodo } from '../context/TodoContext';

const TodoList = () => {
	const { todos, deleteTodo, updateIsCompleted } = useTodo();
	return (
		<div>
			{todos.length > 0 ? (
				<ul>
					{todos.map((todo) => {
						return <TodoItem key={todo.id} todo={todo} onDeleteTodo={deleteTodo} onCompletedTodo={updateIsCompleted} />;
					})}
				</ul>
			) : (
				<p>לא נוספו עדיין משימות</p>
			)}
		</div>
	);
};

export default TodoList;
