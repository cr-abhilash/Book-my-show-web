import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore,applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer";
import reducer1 from "./reducer/add-tutorial.component.reducer";
import reducer2 from "./reducer/tutorial-list.component.reduce";
import reducer4 from "./reducer/tutorial-component.reducer";


import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
  r1:reducer,
    r2:reducer1,
      r3:reducer2,
      r4:reducer4
  })


const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter></Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
