import React from "react";

const LevelMenu = ({ gameLevels, changeLevel, activeLevel }) => (
  <div className="MineSweeper__level">
    {gameLevels.map((gameLevel) => {
      const checked = gameLevel.id === activeLevel;
      return (
        <label key={gameLevel.id} htmlFor="name">
          <input
            type="radio"
            name="level"
            onChange={() => changeLevel(gameLevel.id)}
            checked={checked}
          />
          {gameLevel.name}
        </label>
      );
    })}
  </div>
);

export default LevelMenu;
