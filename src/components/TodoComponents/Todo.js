import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo"
        >
        <p>{props.todo.name}</p>
        </div>
                                );
                                };
export default Todo; 