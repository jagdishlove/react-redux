const TodoReducer = (state = { todos: [] }, action) => {
    console.log("this is actipn", action)
    switch (action.type) {
        case "ADD_TODO":
            return { todos: action.payload }

        case "REMOVE_TODO":
            return { todos: action.payload }

        default:
            return state;
    }
}

export default TodoReducer;