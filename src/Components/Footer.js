import React from 'react'

export default function Footer() {

  const date=new Date().getFullYear()
  return (
    <>
    <div className="footer_container">
      <p>Copyright ©️ {date}</p>
    </div>
    </>
  )
}
