export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: payload.id,
      text: payload.text,
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}
