import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../img/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="logo">
            <img src={Logo} style={{ width: 90 }} />
          </li>
          <li>Explore The World!</li>
        </ul>
      </div>
    );
  }
}

export default Header;
