function Scratchpad({ setInput }) {
  const handleKeyDown = (e) => {
    if (e.key === "ø" && e.ctrlKey) {
      setInput(document.getSelection().toString());
    }
  };
  return <textarea className="scratchpad" onKeyDown={handleKeyDown}></textarea>;
}

export default Scratchpad;
