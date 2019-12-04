// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

let id = 0

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.payload.map(todo => (
          <Todo todoElm={todo} key={id++} isDone={this.props.complete} />
        ))}
      </div>
    );
  }
}

export default TodoList;
