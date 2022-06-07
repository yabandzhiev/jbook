import { useState } from "react";

import CodeEditor from "./components/CodeEditor/CodeEditor";
import Preview from "./components/Preview/Preview";
import bundle from "./bundler";
import Resizable from "./components/Resizable/Resizable";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
        </Resizable>

        <Preview code={code} />
      </div>
    </Resizable>
  );
}

export default App;
