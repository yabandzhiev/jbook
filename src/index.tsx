import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TextEditor from "./components/TextEditor/TextEditor";

import "bulmaswatch/superhero/bulmaswatch.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TextEditor />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
