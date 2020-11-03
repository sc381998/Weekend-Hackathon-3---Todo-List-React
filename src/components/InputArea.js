import React from "react";

function InputArea(props) {
  const { handleChange, addItem, inputText } = props;
  return (
    <div className="form">
      <input id="task" onChange={handleChange} type="text" value={inputText} />
      <button id="btn" onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
