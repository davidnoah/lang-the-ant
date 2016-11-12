import React from "react";
import Tile from "./tile";

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRows() {
    let rows = [];
    for (var i = 0; i < 100; i++) {
      rows.push(<div className='row' key={"row " + i}>
        this.renderTiles(i);
      </div>);
    }
    return (
      <div className='row-container'>
        {rows}
      </div>
    );
  }

  renderTiles(row) {
    let tiles = [];
    for (var i = 0; i < 100; i++) {
      tiles.push(<Tile key={"tile " + (i + row)}/>);
    }
    return tiles;
  }

  render() {
    return (
      <div className='grid-container'>
        {this.renderRows()}
      </div>
    );
  }
}

module.exports = Grid;
