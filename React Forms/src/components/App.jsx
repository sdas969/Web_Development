import React, { useState } from "react";

function App() {

  let [heading, updateHeading] = useState('');
  let isSubmitted = false;
  function handleChange(event) {
    heading = event.target.value;
  }
  function handleClick() {
    updateHeading(heading);
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
