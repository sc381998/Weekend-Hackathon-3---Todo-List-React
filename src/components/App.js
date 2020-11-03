import "./../styles/App.css";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [display, setDisplay] = React.useState([]);
  const [editableText, setEditableText] = React.useState("");

  function isBlank(str) {
    str = str.trim();
    return !str || 0 === str.length || !Boolean(str);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    if (!isBlank(inputText)) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
    let arr = [...display];
    arr.push(false);
    setDisplay(arr);
    setInputText("");
    // setButtonType("Add");
  }

  function handleDelete(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    let arr = [...display];
    arr.splice(id, 1);
    setDisplay(arr);
  }

  function handleEdit(id) {
    let arr = [...display];
    arr[id] = true;
    setDisplay(arr);
    //console.log(display);
    setEditableText(items[id]);
  }

  function handleEditChange(event) {
    // editableText = event.target.value;
    setEditableText(event.target.value);
    console.log(editableText);
  }

  function handleSave(id) {
    if (!isBlank(editableText)) {
      let arr = [...display];
      arr[id] = false;
      setDisplay(arr);
      let textArr = [...items];
      textArr[id] = editableText;
      setItems(textArr);
      setEditableText("");
    }
  }

  function handleCancel(id) {
    let arr = [...display];
    arr[id] = false;
    setDisplay(arr);
  }
  return (
    <div id="main">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea
          handleChange={handleChange}
          addItem={handleAdd}
          inputText={inputText}
        />
        <div>
          <ul className="pl-25">
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onEditChange={handleEditChange}
                onShow={display[index]}
                onSave={handleSave}
                checkSaveButton={editableText}
                onCancel={handleCancel}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
