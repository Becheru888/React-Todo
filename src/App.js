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
      },     
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
    const newTask = {
      task: this.state.newTodo.task,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => ({
      todo: [...prevState.todo, newTask]
    }));
    this.setState(({
      newTodo:{
        task:''
      }
    }))
  };

  markComplete = (id) => {
    this.state.todo.map(task => {
      if(task.id === id){
        this.setState({
          todo: [
            ...this.state.todo,
            !task.completed ? task.completed = true : task.completed = false
          ]
        })
      }
      return true
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList payload={this.state.todo} complete={this.markComplete} />
        <TodoForm change={this.handleChange} submit={this.handleSubmit} formValue={this.state.newTodo.task}/>
      </div>
    );
  }
}

export default App;
