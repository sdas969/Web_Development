import React, { useState } from "react";

function CreateArea(props) {

  let [title, updateTitle] = useState('');
  let [content, updateContent] = useState('');
  function handleTitle(event) {
    title = event.target.value;
    updateTitle(title);
  }
  function handleContent(event) {
    content = event.target.value;
    updateContent(content);
  }
  function onClickHandle(event) {
    props.addItem(title, content);
    updateTitle('');
    updateContent('');
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input onChange={handleTitle} name="title" placeholder="Title" value={title} />
        <textarea onChange={handleContent} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={onClickHandle}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
