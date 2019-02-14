// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.css";

const TodoList= props => {
  return (
    <div className="task-list">
      {props.todo.map(todo => (
        <Todo 
        key={todo.id} 
        item={todo} 
        />
                                ))}
    </div>
          );
                                          };
export default TodoList;
