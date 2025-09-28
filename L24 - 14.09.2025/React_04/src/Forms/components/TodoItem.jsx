import React from 'react'

const TodoItem = ({todo ,onDeleteTodo, onCompletedTodo}) => {
  return (
    <div style={{display: "flex", gap: "20px"}}>
        <li style={todo.isCompleted ? { textDecoration: "line-through"} : { textDecoration: "none"} }>{todo.text}</li>
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        <button onClick={() => onCompletedTodo(todo.id)}>Complete</button>
    </div>
  )
}

export default TodoItem