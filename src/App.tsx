import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Walk the dog",
      string: "8 am",
      completed: true,
    },
    {
      id: 2,
      content: "Write some musi",
      string: "6 pm",
      completed: true,
    },
    {
      id: 3,
      content: "Go to the gym",
      string: "8 pm",
      completed: true,
    },
    {
      id: 4,
      content: "Finish side-project tasks",
      string: "9pm",
      completed: false,
    },
    {
      id: 5,
      content: "Edit the video",
      string: "11 pm",
      completed: false,
    },
  ]);

  function deleteTodo(id: number) {
    const todosCopy = todos.filter((todo) => todo.id !== id);
    setTodos(todosCopy);
  }

  return (
    <div className="App">
      <h1>Arbi's Todos</h1>
      <input type="text" placeholder="Write your todo here"></input>
      <button>Submit</button>

      <ul className="todoList">
        {todos.map((todo) => (
          <Todos
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
