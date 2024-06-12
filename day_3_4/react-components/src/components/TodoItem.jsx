import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("component mount", this.props.todo.text);
    // fetch data, access browser apis
    // not needed in this use case
  }

  componentWillUnmount() {
    console.log("component unmount", this.props.todo.text);
    // do some cleanup before unmount
    // not needed in this use case
  }

  render() {
    const todoItem = this.props.todo;
    return (
      <div className={todoItem.completed ? "todo completed" : "todo"}>
        <div className="todo-text">{todoItem.text}</div>
        {!todoItem.completed ? (
          <button onClick={() => this.props.markAsCompleted(todoItem.id)}>
            Mark as Completed
          </button>
        ) : (
          <i>Completed</i>
        )}
      </div>
    );
  }
}

export default TodoItem;
