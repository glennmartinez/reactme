
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (

      <div className="row">
        <div className="navbar-fixed">
          <nav className="naver">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">Confluence Me</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html"> <i className="material-icons ">person_pin</i></a>
                </li>
                <li><a href="badges.html">Profile</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
