import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <li
          classname="list"
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {props.text.substring(0, 30)}
        </li>
        <div>
          <div style={{ display: "flex", lineHeight: "2.3" }}>
            <span
              className="pointer"
              onClick={() =>
                props.onEdit(props.text.substring(0, 30), props.id)
              }
              role="img"
              aria-label="done"
            >
              🖊
            </span>
            <span
              className="pointer"
              onClick={handleClick}
              role="img"
              aria-label="done"
            >
              ✅
            </span>
            <span
              className="pointer"
              onClick={() => props.onChecked(props.id)}
              role="img"
              aria-label="delete"
            >
              ❌
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
