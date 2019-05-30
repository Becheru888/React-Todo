import React from 'react';
import './components/TodoComponents/Todo.css';
// import Completed from './components/TodoComponents/Todo.js'


const todoList = [
  {
    taskName: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    taskName: 'Wash Car',
    id: 1528817084358,
    completed: false
  },
  {
    taskName: 'Walck the Dog',
    id: 1528817054358,
    completed: false
  },
  {
    taskName: 'Sleep at 20:00',
    id: 1528817184358,
    completed: false
  },
];






// function TheList(props) {
//   return <div>
//     <h1>Todo List:</h1>
//     {todoList.map(task => 
//       (<div key={task.id} value={task.completed}>{task.taskName}</div>)) 
//     }
//   </div>
// }




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

markAsCompleted = (id) => {
  this.setState(currentState => ({
    todoList : currentState.theFullList.map(task => {
      if(task.id === id){
        task.completed = true
      };
      return task
    })
  }))


 
}


clearCompleted = () => {
  let newList = this.state.theFullList.filter(task => !task.completed);
  this.setState({ theFullList: newList });
}


// markAsEnemy = id => {
//   // using setState:
//   // add a "friendly" of false to the friend object with the given id
//   this.setState(currentState => ({
//     friends: currentState.friends.map(friend => {
//       if (friend.id === id) {
//         friend.friendly = false;
//       }
//       return friend;
//     }),
//   }));
// }


  render() {
    return <div className='theform'>
       {this.state.theFullList.map(task => 
      (<div className='task' onClick={() =>this.markAsCompleted(task.id)} key={task.id} value={task.completed}>{task.taskName}</div>)) 
    }
    <input value={this.state.taskName} 
          onChange={this.changeHandler}
          type='text'/>

    <button className='AddButton' onClick={this.addNewTask}>Add Todo</button>
    <button className='ClearButton' onClick={this.clearCompleted}>Clear Completed</button>       
    </div>
  }

}


export default App;
