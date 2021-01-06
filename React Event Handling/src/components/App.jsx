import React, { useState } from "react";

function App() {

  const [heading, setHeading] = useState('Hello');
  const [currColor, updateColor] = useState('white');
  function handleClick() {
    setHeading('Submitted');
  }
  function onMouseOver() {
    updateColor('black');
  }
  function onMouseOut() {
    updateColor('white');
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: currColor }} onClick={handleClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Submit</button>
    </div>
  );
}

export default App;
