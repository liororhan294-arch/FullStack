import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name: 'todos',
    initialState: {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    },
    reducers: {
        // פונקציה להוספת משימה
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        // פונקציה למחיקת משימה
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        // פונקציה לעדכון סטטוס של משימה
        updateIsCompleted: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    }
})

export const {addTodo, deleteTodo, updateIsCompleted} = todoslice.actions;
export default todoslice.reducer;