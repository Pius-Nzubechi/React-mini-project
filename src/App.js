import React, { Component } from "react";
import TodoData from "./TodoData";
import TodoList from "./components/TodoList";
import Conditional from './components/conditional'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: TodoData,
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodo = prevState.todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: updatedTodo,
      };
    });
  };

  render() {
    const Todofunc = this.state.todo.map((item) => (
      <TodoList key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <React.Fragment>
        
        <div className="todo-list">{Todofunc}</div>
        <Conditional />
      </React.Fragment>
    );
  }
}

export default App;
