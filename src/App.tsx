import { useState } from "react";
import "./App.css";

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

  return (
    <div className="App">
      <h1>Arbi's Todos</h1>
      <input type="text" placeholder="Write your todo here"></input>
      <button>Submit</button>
      <div className="todoList">
        {todos.map((todo) => (
          <li>
            <h3>{todo.content}</h3>
            <h2>{todo.string}</h2>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
