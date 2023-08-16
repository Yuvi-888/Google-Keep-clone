import React, { useState } from "react";

export default function CreateNote(props) {

  const [expand,setexpand]=useState(false)
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handle_createnote(e){
    setnote({...note, [e.target.name]:e.target.value})
  }

  function add_btn(){
    props.passnote(note)
    setnote({
      title:'',
      content:''
    })
  }

  function handle_expand(){
    setexpand(true)
  }

  function handle_shrink(){
    setexpand(false)
  }
  
  return (
    <>
      <div className="createnote_container" onDoubleClick={handle_shrink}>
       
        <form>
        {expand ?
          <input
            className="title"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={handle_createnote}
          />: null}
          <textarea
            className="content"
            cols="60"
            rows="8"
            placeholder="Enter something..."
            name="content"
            value={note.content}
            onChange={handle_createnote}
            onClick={handle_expand}
          />
        </form>
        {expand ?
        <button className="add_btn" onClick={add_btn}>
          <i className="fa-solid fa-plus"></i>
        </button>:null}
      </div>
    </>
  );
}
