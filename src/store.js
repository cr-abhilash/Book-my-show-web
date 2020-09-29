import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./reducer/reducer";
import addNewEvent from "./reducer/addEventReducer";
import eventListReducer from "./reducer/eventListReducer";
import eventInfoReducer from "./reducer/eventInfoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  r1: reducer,
  addNewEvent: addNewEvent,
  eventListReducer: eventListReducer,
  eventInfoReducer: eventInfoReducer,
});

const store=createStore(rootReducer,applyMiddleware(thunk))
export default store;