import React from "react";

function App() {
  let initialTime = new Date().toLocaleTimeString();
  const [time, update] = React.useState(initialTime);
  function getTime() {
    let updateTime = new Date().toLocaleTimeString();
    update(updateTime);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
