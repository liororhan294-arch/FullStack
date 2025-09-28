import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';

const App = () => {
	const [todos, setTodos] = useState(() => {
        return localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    });

	const addTodo = (todo) => {
		// spread - מפצל את המערך לאיברים בודדים
		setTodos([...todos, todo]);
	};

    useEffect(() => {
        console.log("טעינה ראשונה")
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

	return (
		<div>
			<TodoForm onAddTodo={addTodo} />
			{todos.length > 0 ? (
				<ul>
					{todos.map((todo, index) => {
						return <li key={index}>{todo}</li>;
					})}
				</ul>
			) : (
				<p>לא נוספו עדיין משימות</p>
			)}
		</div>
	);
};

export default App;
