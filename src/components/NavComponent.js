import React from 'react';
import { Link } from 'react-router-dom';
import './NavComponent.css'


class NavComponent extends React.Component {

  burgerToggle() {
    let linksE1 = document.querySelector('.narrowLinks');
    if (linksE1.style.display === 'block') {
      linksE1.style.display = 'none';
    } else {
      linksE1.style.display = 'block';
    }
  }
render() {
  return(
    <nav>
        <div className="navWide">
          <div className="wideDiv">
            <Link to='/' >Link 1</Link>
            <Link to="/">Link 2</Link>
            <Link to="/">Link 3</Link>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
            <div className="narrowLinks">
              <Link to="/" onClick={this.burgerToggle}>Link 1</Link>
              <Link to="/" onClick={this.burgerToggle}>Link 2</Link>
              <Link to="/" onClick={this.burgerToggle}>Link 3</Link>
            </div>
        </div>
      </nav>
  )
}
}

export default NavComponent;
