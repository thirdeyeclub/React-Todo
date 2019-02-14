import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
                  };
                    }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
                                                          };

  render() {
    return (
      <form onSubmit={e => this.props.newTask(e, this.state.item)}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
                                        />
        <button className='btn' onClick='{this.props.handleChanges}'>create task</button>
        <button className='btn'>clear</button>
      </form>
            );
            }
                                                                                           }
export default TodoForm;