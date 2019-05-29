import React from 'react';



const todoList = [
  {
    taskName: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    taskName: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];





function TheList(props) {
  return <div>

    <h1>Todo List:</h1>
    {todoList.map(task => 
      (<div key={task.id} value={task.completed}>{task.taskName}</div>)) 
    }
  </div>
}





class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state = {
      theFullList: todoList,
      taskName: '',
    };

  }

changeHandler = (event) => {
  this.setState ({
    taskName:event.target.value,
  })
}


addNewTask = () => {
  const newTask = {
    id: Date.now(),
    taskName: this.state.taskName,
    completed:false,
  }

  this.setState({
    theFullList: this.state.theFullList.concat(newTask),
    taskName: '',
  });
};





  render() {
    return <div>
      <TheList/>
    <input value={this.state.taskName} 
          onChange={this.changeHandler}
          type='text'/>

    <button onClick={this.addNewTask}>Add Todo</button>
    <button onClick={this.clearTask}>Clear Completed</button>       
    </div>
  }


}

export default App;
