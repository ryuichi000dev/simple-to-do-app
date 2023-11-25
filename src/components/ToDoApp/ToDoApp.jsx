import React, { useState } from 'react';
import './ToDoApp.css';
import ToDoList from '../ToDoList/ToDoList';

function ToDoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddToDo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddToDo();
        }
    };

    const handleDeleteToDo = (index) => {
        const newTodos = todos.filter((_, idx) => idx !== index);
        setTodos(newTodos);
    };

    return (
        <div className='ToDoApp'>
            <h1>ToDoアプリ</h1>
            <input 
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} 
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleAddToDo}>追加</button>
            <ToDoList todos={todos} onDeleteToDo={handleDeleteToDo} />
        </div>
    );
}

export default ToDoApp;
