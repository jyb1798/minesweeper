import React from "react";
import Cell from "../Cell/Cell";
import GameMenu from "../GameMenu/GameMenu";
import LevelMenu from "../LevelMenu/LevelMenu";

const Board = ({ table, activeLevel }) => {
  return (
    <div>
      <LevelMenu />
      <div className={`MineSweeper ${activeLevel}`}>
        <GameMenu />
        {table.map((cells, row) => (
          <table className="Table" key={`mine-row-${row}`}>
            <tbody>
              <tr>
                {cells.map((cell) => (
                  <Cell key={`mine-cell-${cell.id}`} {...cell} />
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Board;
