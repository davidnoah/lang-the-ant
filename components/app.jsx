import React from "react";
import Grid from "./grid";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.board = new Board();
  }

  render() {
    return (
      <Grid board={this.board}/>
    );
  }
}

module.exports = App;
