import React, { useState } from 'react';

function ToDoItem(props) {
    let [isClicked, update] = useState(false);
    function handleClick() {
        isClicked = !isClicked;
        update(isClicked);
    }
    return <li style={{ textDecoration: isClicked ? 'line-through' : 'none' }} onClick={() => props.itemClick(props.id)}>{props.itemName}</li>
}

export default ToDoItem;