import { useState } from "react";
import "./App.css";
import Formatter from "./components/Formatter";
import Scratchpad from "./components/Scratchpad";
import XOR from "./components/XOR";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>CapCTF</h1>
      </header>
      <main>
        <Scratchpad setInput={setInput} />
        <Formatter input={input} setInput={setInput} />
        <XOR />
      </main>
    </div>
  );
}

export default App;
