import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  //handle submit button click
  function handleClick(event) {
    event.preventDefault();
    addTodo(todoText);
  }

  // get input element's value on change
  const handleChange = (event) => {
    const inputText = event.target.value;
    setTodoText(inputText);
  };

  return (
    <div className="todo-form">
      <h2>Add Todo</h2>
      <form>
        <input
          placeholder="Add Todo Item"
          type="text"
          value={todoText}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClick}>
          Submit Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
