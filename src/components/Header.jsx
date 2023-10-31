import React from 'react'

function Header() {

  return (
    <>

      <header>
          <div className="head--bar">
            <img src="favicon.ico" ></img>
            <h1>Athlete Talk</h1> 
          </div>
          
          <h3><a href="#">Login/Register</a></h3>
      </header>
      
      <nav className="navbar--options">
        <ul>
          <a href="#">To-Do List</a>
          <a href="#">Plans</a> 
          <a href="#">Chat</a>
          <a href="#">Videos</a>
          <a href="#">About Us</a>
        </ul>
      </nav>
      
    </>
  )
}

export default Header
