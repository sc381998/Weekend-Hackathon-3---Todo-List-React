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
      <div
        className="list"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {props.text.substring(0, 30)}
        </li>
        <div>
          <div style={{ display: "flex", lineHeight: "2.3" }}>
            <span
              className="pointer edit"
              onClick={() =>
                props.onEdit(props.text.substring(0, 30), props.id)
              }
              role="img"
              aria-label="done"
            >
              <i className="fa fa-pencil editIcon" aria-hidden="true"></i>
            </span>
            <span
              className="pointer"
              onClick={handleClick}
              role="img"
              aria-label="done"
            >
              <i className="fa fa-thumb-tack pinIcon" aria-hidden="true"></i>
              {/* ✅ */}
              {/* ❌ */}
            </span>
            <span
              className="pointer delete"
              onClick={() => props.onChecked(props.id)}
              role="img"
              aria-label="delete"
            >
              <i className="fa fa-trash deleteIcon" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
