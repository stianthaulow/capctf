import { useState } from "react";

const BASE = {
  binary: 2,
  decimal: 10,
};

const FormatRadio = ({ label, base, state: [currentBase, setBase] }) => (
  <>
    <label htmlFor={`selectFormat-${base}`}>{label}</label>
    <input
      name="xor-format"
      type="radio"
      id={`selectFormat-${base}`}
      checked={currentBase === base}
      onChange={() => setBase(base)}
    />
  </>
);

function XOR() {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const baseState = useState(BASE.binary);
  const [base] = baseState;
  const format = (str) => (base < 35 ? parseInt(str, base) : str);
  const output = () => {
    if (!input) {
      return "";
    }
    const result = format(input) ^ format(key);
    return result.toString(base).padStart(input.length, "0");
  };
  return (
    <div className="xor">
      <div>
        <h2>xor</h2>
        {Object.keys(BASE).map((label) => (
          <FormatRadio label={label} base={BASE[label]} state={baseState} />
        ))}
      </div>

      <input
        placeholder="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <input
        placeholder="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <span className="xor-output">{output()}</span>
    </div>
  );
}

export default XOR;
