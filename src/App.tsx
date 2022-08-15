import { useEffect, useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((resp) => resp.json())
      .then((todosFromServer) => setTodos(todosFromServer));
  }, []);

  return (
    <div className="App">
      <h1>Arbi's Todos</h1>
      <input type="text" placeholder="Write your todo here"></input>
      <button>Submit</button>

      <ul className="todoList">
        {todos.map((todo) => (
          <Todos todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

export default App;
