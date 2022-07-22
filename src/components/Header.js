import React from "react";
import { Component } from "react";
import "../style.scss";
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
              <a href={"/home"}>
                Home
              </a>
            </li>
            <li>
              <a>Explore</a> {/*we need to make this a drop down menu*/}
            </li>
            <li>
              <a href={"/travel"}>
                Travel
              </a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>More</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;
