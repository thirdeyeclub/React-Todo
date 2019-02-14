import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputText: "",
      addTask: ""
                                  };}

addTask = (e, todo) => {
    e.preventDefault();
    const newTask = {
      item: '',
      id: Date.now(),
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Task List</h1>
        <TodoForm
         addTask={this.newTask}
                  />
        <TodoList
          todo={this.state.todo}        
                  />
      </div>
              );
              }
                                                                }

export default App;
