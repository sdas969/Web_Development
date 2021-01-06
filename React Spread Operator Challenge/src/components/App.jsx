import React, { useState } from "react";
import ToDoItem from './ToDoItem';
function App() {

  let [listItems, updateListItems] = useState([]);
  let [temp, updateText] = useState('');
  function handleChange(event) {
    temp = event.target.value;
    updateText(temp);
  }
  function handleClick() {
    if (temp)
      listItems.push(temp);
    updateListItems([...listItems]);
    temp = '';
    updateText(temp);
  }
  function itemClick(id) {
    listItems = listItems.filter((name, index) => index !== id);
    updateListItems([...listItems]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={temp} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((element, index) => <ToDoItem key={index} id={index} itemClick={itemClick} itemName={element} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
