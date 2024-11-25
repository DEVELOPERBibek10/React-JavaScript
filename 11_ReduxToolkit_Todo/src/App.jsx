import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import { useState } from "react";

function App() {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <>
      <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <Todos editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
    </>
  );
}

export default App;
