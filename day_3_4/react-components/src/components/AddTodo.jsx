import { useRef, useState } from "react";

export const AddTodo = ({ addTodo }) => {
  // Create todoText state using useState hook
  const [todoText, setTodoText] = useState("");

  // Create a ref object using useRef hook
  const inputRef = useRef(null);

  // Function to focus the input using the ref
  const focusInput = () => {
    // Directly access the DOM element and call focus method
    inputRef.current.focus();
  };

  //handle submit button click
  function handleClick(event) {
    event.preventDefault();
    focusInput(); // just for demo
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
          ref={inputRef}
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
