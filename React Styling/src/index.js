//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
const styling = { color: "black" };
var heading = "";

if (time >= 0 && time < 12) {
  heading = "Good Morning";
  styling.color = "red";
} else if (time >= 12 && time < 18) {
  heading = "Good Afternoon";
  styling.color = "green";
} else {
  heading = "Good evening";
  styling.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className='heading' style={styling}>{heading}</h1>
  </div>,
  document.getElementById("root")
);
