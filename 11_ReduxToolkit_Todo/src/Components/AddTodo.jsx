import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  editTodo as editTodoAction,
} from "../Features/todo/todoSlice";

function AddTodo({ editingTodo, setEditingTodo }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (!input) return;

    if (editingTodo) {
      dispatch(editTodoAction({ id: editingTodo.id, text: input }));
      setEditingTodo(null);

      // Reset edit mode
    } else {
      // Dispatch add action
      dispatch(addTodo(input));
    }

    setInput(""); // Clear form
  };

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  return (
    <form
      onSubmit={() => {
        addTodoHandler(event);
      }}
      className="space-x-3 mt-12 flex items-center justify-center"
    >
      <input
        type="text"
        className="bg-gray-800 w-1/3 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? "Update" : "AddTodo"}
      </button>
    </form>
  );
}

export default AddTodo;
