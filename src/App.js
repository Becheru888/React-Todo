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
    this.setState(prevState => ({
      newTodo: {
        ...prevState.newTodo,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const isEmpty = newTask => {
      if (!newTask.task) {
        console.log(newTask.task);
        return alert("You need a task name");
      }
      return newTask.task;
    };

    const newTask = {
      task: isEmpty(this.state.newTodo),
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => ({
      todo: [...prevState.todo, newTask]
    }));
    this.setState({
      newTodo: {
        task: ""
      }
    });
  };

  markComplete = id => {
    this.state.todo.map(task => {
      if (task.id === id) {
        return this.setState(prev => ({
          todo: [
            ...prev.todo,
            !task.completed ? (task.completed = true) : (task.completed = false)
          ]
        }));
      }
    return false});
  };

  clearComplete = e => {
    const newArr = this.state.todo.filter(elm => !elm.completed);
    let test = false
    this.state.todo.forEach(task => {
      if (task.completed) {
        test = true
      }
    });

    console.log(test);

    if (test) {
      this.setState(_ => ({
        todo: [...newArr]
      }));
    } else {
      alert("Please mark a completed task!");
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList payload={this.state.todo} complete={this.markComplete} />
        <TodoForm
          change={this.handleChange}
          submit={this.handleSubmit}
          formValue={this.state.newTodo.task}
          clear={this.clearComplete}
        />
      </div>
    );
  }
}

export default App;
