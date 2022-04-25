import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ul className="nav">
          <li className="nav-item"></li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
        </ul>
      </>
    );
  }
}
