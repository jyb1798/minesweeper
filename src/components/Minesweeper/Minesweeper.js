import React from "react";
import Board from "../Board/Board";
import "./style.css";

const Minesweeper = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title"> React/Redux - Minesweeper</h1>
    </header>
    <Board />
  </div>
);

export default Minesweeper;
