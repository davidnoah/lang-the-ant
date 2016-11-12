import React from "react";
import Tile from "./tile";

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  placeAnt() {

  }

  renderRows() {
    let rows = [];
    for (var i = 0; i < 100; i++) {
      rows.push(<div className='row' key={"row " + i}>
        {this.renderTiles(i)}
      </div>);
    }
    return rows;
  }

  renderTiles(row) {
    let tiles = [];
    for (var i = 0; i < 100; i++) {
      tiles.push(<Tile active={this.props.board.grid[row][i]} key={"tile " + (i + row)}/>);
    }
    return tiles;
  }

  render() {
    return (
      <div className='grid' onClick={this.placeAnt}>
        {this.renderRows()}
      </div>
    );
  }
}

module.exports = Grid;
