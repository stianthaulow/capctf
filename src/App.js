import { useEffect, useRef, useState } from "react";
import copy from "copy-to-clipboard";

import "./App.css";

function App() {
  const workspaceRef = useRef();

  const [output, setOutput] = useState("capctf{}");

  const handleChange = (e) => {
    const value = e.target.value
      .replace(/ /g, "_")
      .replace(/[^A-Za-z0-9_]/g, "")
      .toLowerCase();
    setOutput(`capctf{${value}}`);
    copy(value);
  };

  useEffect(() => {
    workspaceRef.current.focus();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>CapCTF</h1>
      </header>
      <main>
        <textarea
          className="workspace"
          ref={workspaceRef}
          onChange={handleChange}
        ></textarea>
        <div className="output">{output}</div>
      </main>
    </div>
  );
}

export default App;
