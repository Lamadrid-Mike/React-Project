import React from "react";
import { Component } from "react";
import { BEACHES } from "../shared/beaches";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beaches: BEACHES,
    };
  }
  render() {
    return <div></div>;
  }
}
