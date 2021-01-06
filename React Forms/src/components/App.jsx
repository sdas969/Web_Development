import React, { useState } from "react";

function App() {

  const [heading, updateHeading] = useState('Hello');
  function handleChange(event) {
    updateHeading(event.target.value);
  }

  return (
    <div className="container">
      <h1>{heading} </h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
