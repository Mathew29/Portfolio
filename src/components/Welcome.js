import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container">
      <h1 className="header">Hello, I'm</h1>
      <h1 className="header">Mathew Akre</h1>
      <Link to='/resume' className='button'>Resume</Link>
    </div>
  )
}

export default Welcome;