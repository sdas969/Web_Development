import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  let [items, updateItems] = useState([]);

  function deleteItem(title, id) {
    items = items.filter((item, index) => (item.title !== title));
    updateItems([...items]);
  }
  function addItem(title, content) {
    items.push({ title: title, content: content });
    updateItems([...items]);
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {
        items.map((item, index) => <Note key={index} deleteItem={deleteItem} title={item.title} content={item.content} />)
      }
      <Footer />
    </div>
  );
}

export default App;
