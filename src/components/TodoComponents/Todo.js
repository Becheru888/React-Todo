import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.todoElm.task}
        </h3>
      </div>
    );
  }
}

export default Todo;
