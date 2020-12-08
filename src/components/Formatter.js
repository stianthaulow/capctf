import { useEffect, useRef, useState, useCallback } from "react";
import copy from "copy-to-clipboard";

function Formatter({ input, setInput }) {
  const formatterRef = useRef();
  const [history, setHistory] = useState([]);
  const wrapFlag = (str) => `capctf{${str}}`;
  const stripInvalidChars = (str) =>
    str
      ?.replace(/ /g, "_")
      ?.replace(/[^A-Za-z0-9_]/g, "")
      .toLowerCase();

  const output = useCallback(() => wrapFlag(stripInvalidChars(input)), [input]);

  const handleChange = (e) => setInput(e.target.value);
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        setInput("");
        break;
      case "Enter":
        if (!!input) {
          const flag = output();
          if (!history.includes(flag)) {
            copy(flag);
            setHistory([...history, flag]);
          }
        }
        break;
      default:
    }
  };

  useEffect(() => {
    formatterRef.current.focus();
  }, [input]);

  return (
    <>
      <div className="output">{output()}</div>
      <input
        value={input}
        className="formatter"
        ref={formatterRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="flag..."
      />
      <div className="history">
        {history.map((flag, i) => (
          <div key={i}>
            <button
              className="history-button"
              onClick={() =>
                setHistory(history.filter((_, index) => index !== i))
              }
            >
              {flag}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Formatter;
