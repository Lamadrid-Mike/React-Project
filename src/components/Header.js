import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="logo">Logo</li>
          <li>
            <input className="input"></input>
          </li>
          <li className="nav-item">Home</li>
          <li className="nav-item">Explore</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Profile</li>
        </ul>
      </div>
    );
  }
}

export default Header;
