//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import reactDOM from "react-dom";

const fname = "Smarajit";
const lname = "Das";
const college = "MNIT";
const img1='https://cms.qz.com/wp-content/uploads/2019/04/marvel-avengers-endgame-e1556039297104.jpg?quality=75&strip=all&w=1600&h=900&crop=1';
const img2='https://cnet4.cbsistatic.com/img/j7SdHs9Ac8coHkwTOcJG1DYcQI4=/940x0/2019/04/19/f20d0d6a-1781-49a4-90ab-e285109b65b2/avengers-endgame-imax-poster-crop.png';
const img3='https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg';
reactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <div>
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
    </div>
  </div>,
  document.getElementById("root")
);
