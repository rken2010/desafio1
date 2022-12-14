import { createStore, combineReducers } from "redux";

import TaskReducer from "./reducers/Task.reducer"

const RootReducer = combineReducers({ Task: TaskReducer })

export default createStore( RootReducer )