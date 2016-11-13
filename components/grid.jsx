import React from "react";
import Tile from "./tile";
import Board from "../langstonsAnt";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Board()};
    this.updateGame = this.updateGame.bind(this);
    this.placeAnt = this.placeAnt.bind(this);
  }

  placeAnt(e) {
    let target = e.target.dataset.pos.split(",");
    let currentTile = this.state.board.grid[target[0]][target[1]];
    currentTile = currentTile ? false : true;
    this.updateGame();
  }

  updateGame() {
    this.setState({ board: this.state.board });
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
      tiles.push(<Tile active={this.state.board.grid[row][i]} key={[row, i]} pos={[row, i]}/>);
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
