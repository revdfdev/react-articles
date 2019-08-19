import { createContext } from "react";

const initialState = {
  todos: [
    { id: 1, text: "Make Time machine", complete: false },
    { id: 2, text: "Find infinity stones", complete: false },
    { id: 3, text: "Defeat Thanos", complete: true }
  ]
};

const TodoContext = createContext(initialState);

export default TodoContext;
