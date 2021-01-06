// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import practice from './practice.js';

const [honda, tesla] = practice;
const [hondaTopSpeed, teslaTopSpeed] = [honda.speedStats.topSpeed, tesla.speedStats.topSpeed];
const [hondaTopColour, teslaTopColour] = [honda.coloursByPopularity, tesla.coloursByPopularity]


ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
