import React, { useState } from "react";

function App() {

  let [fname, updateFName] = useState('');
  let [lname, updateLName] = useState('');

  function handlefChange(event) {
    fname = event.target.value;
  }
  function handlelChange(event) {
    lname = event.target.value;
  }
  function handleClick(event) {
    updateFName(fname);
    updateLName(lname);
    event.preventDefault();
  }



  return (
    <div className="container">
      <h1>Hello {fname + ' ' + lname}</h1>
      <form>
        <input onChange={handlefChange} name="fName" placeholder="First Name" />
        <input onChange={handlelChange} name="lName" placeholder="Last Name" />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
