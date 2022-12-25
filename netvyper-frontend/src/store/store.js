import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/authReducer";


const rootReducer = combineReducers({
    auth: reducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
) 

export default store;