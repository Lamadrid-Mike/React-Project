import React from "react";
import { Component } from "react";
import { BEACHES } from "../shared/beaches";
import "../style.scss";

/*USED TO BE Information.js, roger that*/

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
    const listItem = this.state.beaches.map((item) => (
      <div
        key={item.id}
        className="card"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        >
        <h3 style={{ color: "white" }}>{item.name}</h3>
        <img className="image" src={item.image} />
      </div>
    ));
    return <div className="container" id="travelpage">{listItem}</div>;
  }
}

export default Travel;
