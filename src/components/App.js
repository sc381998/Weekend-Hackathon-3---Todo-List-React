import "./../styles/App.css";
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [buttonType, setButtonType] = useState("Add");
  const [itemId, setItemId] = useState();
  function handleEdit(text, id) {
    setItemId(id);
    setInputText(text);
    setButtonType("Edit");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(buttonType = "Add") {
    if (inputText) {
      if (buttonType !== "Add") deleteItem(itemId);

      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
    setInputText("");
    setButtonType("Add");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
                onEdit={handleEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
