class Board {
  constructor(props) {
    this.grid = [];
    this.createGrid();
  }

  createGrid() {
    for (var i = 0; i < 100; i++) {
      this.grid.push([]);
      for (var j = 0; j < 100; j++) {
        this.grid[i].push(false);
      }
    }
  }
}

module.exports = Board;
