import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateNote from './Components/CreateNote'
import Notes from './Components/Notes'

export default function App() {

  const [storenote,setstorenote]=useState([])

  function passnote(note){
    setstorenote([...storenote, note])
  }

  function deletenote(id){
    setstorenote(storenote.filter((elem,indx)=>{
      return id!==indx
    }))
      
  }

  
  return (
<>
<Header/>
<CreateNote passnote={passnote}/>
{
  storenote.map((elements,index)=>{
    return [
      <Notes
      key={index}
      id={index}
      title={elements.title}
      content={elements.content}
      delete={deletenote}
      />
    ]
  })
}
<Footer/>
</>
  )
}
