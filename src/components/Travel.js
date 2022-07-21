import React from "react";
import { Component } from "react";
import { BEACHES } from "../shared/beaches";
import "../style.scss";

/*USED TO BE Information.js*/

class Travel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beaches: BEACHES,
      isHovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState((state) => ({
      isHovered: !state.isHovered,
    }));
  }

  render() {
      const hovered = this.state.isHovered ? <div>Hello There!</div> : "";
      const listItem = this.state.beaches.map((item) => (
        <div
          key={item.id}
          className="card"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <h3 style={{ color: "white" }}>{item.name}</h3>
          <img className="image" src={item.image} />
          {hovered}
        </div>
      ));
      return <div className="container">{listItem}</div>;
  }
}

export default Travel;
