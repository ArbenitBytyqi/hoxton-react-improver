export function Todos({ todo, todos, setTodos, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed-todo" : "uncompleted-todo"}>
      <span
        onClick={() => {
          const todosCopy = structuredClone(todos);

          const match = todosCopy.find((target) => target.id === todo.id);

          match.completed = !match.completed;

          setTodos(todosCopy);
        }}
      >
        <h3>{todo.content}</h3>
        <h2>{todo.string}</h2>
      </span>
      <button
        className="deleteButton"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
