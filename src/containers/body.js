import React, { Component } from 'react';
import Header from '../containers/header';
import styles from '../styles/styles.css';
import Card from '../containers/card';

export default class Body extends Component {
  render() {
    return (

      <div className="row">
        <div className="col s2 sidebar">
        <ul className="">
          <li className="list">
            <span>
            <a href="#!" className="list-text" > Notes <i className="material-icons list-icon">today</i></a>
            </span>
          </li>
          <li className="list">
          <span>
            <a href="#!" className="list-text" > List <i className="material-icons list-icon">reorder</i></a>
          </span>
          </li>
          <li className="list">
          <span>
          <a href="#!" className="list-text" > Reminders <i className="material-icons list-icon">alarm_on</i></a>
          </span>
            </li>
          <li className="list">
          <span>
          <a href="#!" className="list-text" > Schedule <i className="material-icons list-icon">schedule</i></a>
          </span>
            </li>

        </ul>
        </div>

        <div className="cols s10">

        <div className="pacman"></div>
        <div className="dot"></div>
            <div className="center">
              <a className="btn-floating btn-large waves-effect waves-light blue"><i className ="material-icons">add</i></a>

            </div>

             <Card />
         </div>
      </div>
    );
  }
}
