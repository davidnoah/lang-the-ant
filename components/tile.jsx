import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.style = {backgroundColor: "black"};
  }

  render() {
    if (this.props.active) {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "black";
    }
    return (
      <div className='tile' style={this.style}></div>
    );
  }
}

module.exports = Tile;
