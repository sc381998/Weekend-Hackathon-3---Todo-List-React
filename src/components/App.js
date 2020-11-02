import "./../styles/App.css";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [buttonType, setButtonType] = useState("Add");
  const [itemId, setItemId] = useState();
  const [display, setDisplay] = React.useState([]);

  // function handleEdit(text, id) {
  //   setItemId(id);
  //   setInputText(text);
  //   setButtonType("Edit");
  // }

  function hasWhiteSpace(s) {
    return s.indexOf(" ") >= 0;
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText && !hasWhiteSpace(inputText)) {
      // if (buttonType !== "Add") deleteItem(itemId);

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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    let arr = [...display];
    arr.splice(id, 1);
    setDisplay(arr);
  }
  const [editableText, setEditableText] = React.useState("");
  function handleEdit(id) {
    let arr = [...display];
    arr[id] = true;
    setDisplay(arr);
    //console.log(display);
    setEditableText(items[id]);
  }

  function onEditText(event) {
    // editableText = event.target.value;
    setEditableText(event.target.value);
  }

  function onEditSave(id) {
    let arr = [...display];
    arr[id] = false;
    setDisplay(arr);

    let textArr = [...items];
    textArr[id] = editableText;

    setItems(textArr);
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
          addItem={addItem}
          inputText={inputText}
          buttonType={buttonType}
        />
        <div>
          <ul className="pl-25">
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onDelete={deleteItem}
                onEdit={handleEdit}
                onShow={display[index]}
                onEditText={onEditText}
                onEditSave={onEditSave}
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
