import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css'


class NavComponent extends React.Component {

render() {
  return(
    <div>
      <ul id='nav'>
        <li><NavLink to='/' activeClassName="Link">First Link</NavLink></li>
        <li><NavLink to='/' activeClassName="Link">Second Link</NavLink></li>
        <li><NavLink to='/' activeClassName="Link">Third Link</NavLink></li>
      </ul>
    </div>
  )
}
}

export default NavComponent;