import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/assets/scss/main.scss";
import "./assets/assets/scss/color_skins.scss";
import "../node_modules/font-awesome/scss/font-awesome.scss";

// Import Bootstrap and Jquery
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';



const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
