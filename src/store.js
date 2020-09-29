import { createStore,applyMiddleware,combineReducers } from "redux";
import reducer from "./reducer/reducer";
import addNewEvent from "./reducer/addEventReducer";
import eventListReducer from "./reducer/eventListReducer";
import eventInfoReducer from "./reducer/eventInfoReducer";