import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Hello {fname + ' ' + lname}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
