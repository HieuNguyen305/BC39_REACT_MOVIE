import { combineReducers, createStore } from "redux";
import { movieReducer } from "./chair";
const rootReducer = combineReducers({
  //key: value
  movieReducer,
});

export default rootReducer;
