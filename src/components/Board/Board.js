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

        <table className="Table">
          <tbody>
            {table &&
              table.map((cells, row) => (
                <tr key={`mine-row-${row}`}>
                  {cells.map((cell) => (
                    <Cell key={`mine-cell-${cell.id}`} {...cell} />
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Board;
