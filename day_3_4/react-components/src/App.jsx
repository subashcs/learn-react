import { useState } from "react";
import AddTodoForm from "./components/AddTodo";
import ListofTodos from "./components/ListOfTodos";
import MainLayout from "./layout/MainLayout";

const initialTodos = [
  {
    id: 12332,
    text: "TODO-1",
    completed: true,
  },
  {
    id: 23123,
    text: "TODO-2",
    completed: false,
  },
];

/**
 * We are developing a Todo web application in React.
 * This is the base application which holds all the
 * application components.
 */

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    /**
     * TASK:1
     * Add new todo item object to the todos array.
     * Notice the format of the item in todos ie. each item in todos is
     * an object containing text and completed key.
     * Note: We cannot directly modify the "todos" variable use the setTodos callback
     * Note: React will only apply updates sent through setTodos
     */
    const id = parseInt(Math.random() * 100000); // use this id
    const completed = false; // initially completed will be false;
    const newTodo = { text, id, completed };
    console.log("Adding new todo", newTodo);
    // Now update the todos List state to insert this newTodo
    // Your code goes here

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo]; // appends new todo and return new array
    });
  };

  const markAsCompleted = (id) => {
    /**
     * TASK: 1
     * Mark the particular todo with the given id as completed
     * You need to find the todo with the given id and update the todos state
     *
     */
    const todoToUpdate = todos.find((item) => item.id === id);
    console.log("Updating todo", todoToUpdate.text);
    // Your code goes here
  };

  // NOTE: notice how the MainLayout component can take jsx as input using children prop ie. props.children
  return (
    <MainLayout>
      <ListofTodos todos={todos} markAsCompleted={markAsCompleted} />
      <AddTodoForm addTodo={addTodo} />
    </MainLayout>
  );
}

export default App;
