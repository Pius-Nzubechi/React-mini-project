import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p>
          {this.props.item.text}
        </p>
      </div>
    );
  }
}
export default TodoList;
