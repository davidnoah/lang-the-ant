import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: this.props.active};
  }

  render() {
    let className;
    if (this.state.active) {
      className = "tile:active";
    } else {
      className = "tile";
    }
    return (
      <div className={className} data-pos={this.props.pos}></div>
    );
  }
}

module.exports = Tile;
