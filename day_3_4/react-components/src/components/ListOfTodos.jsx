import TodoItem from "./TodoItem";

function ListOfTodos(props) {
  const { todos, markAsCompleted } = props;
  return (
    <div className="list-of-todos">
      <h2>List of Todos</h2>

      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id} // key is used to make this list item unique
            todo={item} // the todo item
            markAsCompleted={markAsCompleted} // handle completed action
          />
        );
      })}
    </div>
  );
}

export default ListOfTodos;
