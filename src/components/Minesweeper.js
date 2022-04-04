import React from "react";
import Board from "./Board";
import "./style.css";

const Minesweeper = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"> Minesweeper</h1>
      </header>
      <Board />
    </div>
  );
};

export default Minesweeper;
