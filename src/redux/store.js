import { combineReducers, createStore } from "redux";
import { showReducer } from "./reducer/showReucer";
import { listReucer } from "./reducer/listReducer";


const reducer = combineReducers({
    LIST : listReucer,
    DATA : showReducer
})

export const store = createStore(reducer)