import React from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css'

function Welcome() {
  return (
    <div className="container">
      <h1 className="header">Hello, I'm</h1>
      <h1 className="header">Mathew Akre</h1>
      <NavLink to='/resume' activeClassName='button'>Resume</NavLink>
    </div>
  )
}

export default Welcome;