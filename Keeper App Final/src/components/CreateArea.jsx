import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  let [isClicked, updateClicked] = useState(false);
  let [expand, updateRow] = useState(1);
  function onClick() {
    isClicked = true;
    expand = 3;
    updateClicked(isClicked);
    updateRow(expand);
  }

  return (
    <div>

      <form className="create-note">
        <Zoom in={isClicked}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </Zoom>
        <textarea
          name="content"
          onClick={onClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expand}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote} size="small" color="dark" aria-label="add" >
            <AddIcon />
          </Fab>
        </Zoom >
      </form>
    </div>
  );
}

export default CreateArea;
