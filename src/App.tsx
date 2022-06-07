import { useEffect, useState } from "react";

import CodeEditor from "./components/CodeEditor/CodeEditor";
import Preview from "./components/Preview/Preview";
import bundle from "./bundler";
import Resizable from "./components/Resizable/Resizable";

function App() {
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
        </Resizable>

        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
}

export default App;
