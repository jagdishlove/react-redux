export const AddTodoAction = (todo) => (dispatch, getState) => {

    const { Todo: { todos } } = getState();

    const hasTodo = todos.find(i => i.todo === todo);

    if (!hasTodo && todo !== ' ') {
        dispatch({
            type: "ADD_TODO",
            payload: [{ id: todo.id, todo: todo.todo }, ...todos],
        })
    }
}
export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const { Todo: todos } = getState();

    console.log("getstate", todos)
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.todos.filter(i => i.id !== todo.id),
    })
}