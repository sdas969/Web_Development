import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

let temp = ['hello', 'hello1', 'hello2'];
let temp1 = ['nice', 'nice1', 'nice2', ...temp];
console.log(temp1);

const fullName = {
    fname: 'Smarajit',
    lname: 'Das'
}

const user = {
    ...fullName,
    id: 1,
}
console.log(user.fname);