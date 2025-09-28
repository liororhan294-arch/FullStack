import React, { useState } from 'react'

const TodoForm = ({onAddTodo}) => {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('submit')
        onAddTodo(todo)
        setTodo('')
        console.log(todo)
    }

    const handleChange = (e) => {
        // e - event - האירוע
        // target - האלמנט שמגיב לאירוע הזה
        // value - הערך של האלמנט שמגיב לאירוע הזה
        // console.log(e.target.value)
        setTodo(e.target.value)
    }

  return (
    <div>
        <h1>TodoForm</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a new todo' onChange={handleChange} value={todo} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm