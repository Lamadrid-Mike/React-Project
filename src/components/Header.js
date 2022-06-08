import React from "react";
import { Component } from "react";
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
            <img src={Logo} style={{ width: 100 }} />
          </li>
          <li className="title">Explore The World!</li>
        </ul>
      </div>
    );
  }
}

export default Header;
