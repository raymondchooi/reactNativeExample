const initialState = {
  todos: [], // E.g. {id: 'x', text: 'todo', completed: false}
  displayType: 'all', // Expected values: 'all', 'completed', 'active'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state,
        todos: [...state.todos,
        { id: action.payload.id, text: action.payload.text, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map( todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
  }
  return state;
}
