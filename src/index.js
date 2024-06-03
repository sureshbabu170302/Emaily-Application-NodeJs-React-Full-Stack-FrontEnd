import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
