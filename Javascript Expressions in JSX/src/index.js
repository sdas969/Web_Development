//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "Smarajit Das";
const year = new Date().getFullYear();
const customStyle = { color: "red" };
customStyle.color = "blue";

ReactDOM.render(
  <div>
    <p
      style={customStyle}
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      Created by {name}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
