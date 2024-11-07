import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../Features/todo/todoSlice";

const Store = configureStore({
  reducer: todoReducer,
});

export default Store;
