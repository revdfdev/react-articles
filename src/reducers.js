

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: 0,
        text: action.payload,
        complete: false
      };

      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };
    default:
      return state;
  }
}
