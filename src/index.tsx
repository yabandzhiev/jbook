import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

import TextEditor from "./components/TextEditor/TextEditor";

import "bulmaswatch/superhero/bulmaswatch.min.css";
import CellList from "./components/CellList/CellList";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}

      {/* <TextEditor /> */}
      <CellList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
