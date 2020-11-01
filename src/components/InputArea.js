import React from "react";

function InputArea(props) {
  const { handleChange, addItem, inputText } = props;
  return (
    <div className="form">
      <input
        id="task"
        className={props.buttonType === "Edit" && "editTask"}
        onChange={handleChange}
        type="text"
        value={inputText}
      />
      <button
        id="btn"
        className={props.buttonType === "Edit" && "saveTask"}
        onClick={() => addItem(props.buttonType)}
      >
        <span>{props.buttonType}</span>
      </button>
    </div>
  );
}

export default InputArea;
