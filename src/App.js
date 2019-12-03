import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          task: "Walk the bear",
          id: 0,
          completed: false
        }
      ],
      newTodo: {
        task: ""
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newTodo: {
        ...prevState.newTodo,
      [name]: value
      }
    }));
  };


  handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.newTodo.task,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => ({
      todo: [...prevState.todo, newTask]
    }));
   console.log(this.state)
  };


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList payload={this.state.todo} />
        <TodoForm change={this.handleChange} submit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
