import React from "react";
import Card from './Card';
import contacts from '../contacts.js';
import Avatar from './Avatar';


function createCard(contact) {
  return <Card key={contact.id} id={contact.id} name={contact.name} tel={contact.phone} email={contact.email} imgURL={contact.imgURL} />
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL='https://avatars2.githubusercontent.com/u/60264722?s=460&u=4a05c7a35dbc74834c29647e84b39df018facdde&v=4' />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
