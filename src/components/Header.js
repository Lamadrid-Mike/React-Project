import React from "react";
import { Component } from "react";
import "./Header.scss";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="nav">
          <a>
            <img className="logo" src={Logo} style={{ width: 100 }} />
          </a>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a></a>Blog
            </li>
            <li>
              <a></a>More
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;
