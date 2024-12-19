import React from "react";
import "./index.css";
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  store.dispatch({type: 'FAKE'})
}, 1000);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);