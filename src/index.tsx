import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

import CellList from "./components/CellList/CellList";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CellList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
