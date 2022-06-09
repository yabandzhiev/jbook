import React from "react";
import ReactDOM from "react-dom";
import CodeCell from "./components/CodeCell/CodeCell";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

import TextEditor from "./components/TextEditor/TextEditor";

import CellList from "./components/CellList/CellList";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CodeCell /> */}

      {/* <TextEditor /> */}
      <CellList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
