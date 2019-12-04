import React from "react";

class Todo extends React.Component {



  
  render() {
    const isDone = this.props.todoElm.completed
    return (
      <div>
        <h3 key={this.props.todoElm.id} style={isDone? {textDecoration: 'line-through'} : {textDecoration:'none'} } onClick={e => this.props.isDone(this.props.todoElm.id)}>
          {this.props.todoElm.task}
        </h3>
      </div>
    );
  }
}

export default Todo;
