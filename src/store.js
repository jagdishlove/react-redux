import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducer";

const reducer = combineReducers({
    //this contains all the reducers
    Todo: TodoReducer,
});

const inititalState ={};

const middleware=[thunk];

const store =createStore(reducer,inititalState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;