import React from 'react';
import './ToDoList.css'
import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList({ todos, onDeleteToDo }) {
    return (
        <div className='ToDoList'>
            {todos.map((todo, index) => (
                <ToDoItem key={index} text={todo} onDelete={() => onDeleteToDo(index)} />
            ))}
        </div>
    );
}

export default ToDoList;
