import React from 'react';
import './ToDoItem.css'

function ToDoItem({ text, onDelete }) {
    return (
        <div className='ToDoItem'>
            <span>{text}</span>
            <button onClick={onDelete} >削除</button>
        </div>
    );
}

export default ToDoItem;
