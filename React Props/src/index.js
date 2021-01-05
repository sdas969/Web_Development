import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div><h2>{props.name}</h2>
      <img
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts </h1>

    <Card name='Beyonce' tel='297274274' email='kncc@gmail.com' />

    <Card name='Jack' tel='2972742741' email='kncc1@gmail.com' />

    <Card name='Hello' tel='2972742742' email='kncc2@gmail.com' />
  </div>,
  document.getElementById("root")
);
