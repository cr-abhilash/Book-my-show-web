import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

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
