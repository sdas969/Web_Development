import React from "react";
import emojipedia from '../emojipedia.js';
import Card from './Card';

function createCard(carditem) {
  return <Card key={carditem.id} emoji={carditem.emoji} title={carditem.name} content={carditem.meaning} />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
