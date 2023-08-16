import React from 'react'

export default function Notes(props) {

  function handle_delete(){
    props.delete(props.id)
  }
  return (
    <>
    <div className="notes_container">
      <div className="notes">
        <h3 className='note_title'>{props.title}</h3>
        <p className='note_content'>{props.content}</p>
        <button className='delete_btn' onClick={handle_delete}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
    </>
  )
}
