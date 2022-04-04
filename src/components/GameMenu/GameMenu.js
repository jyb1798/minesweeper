import React from "react";

class GameMenu extends React.Component {
  constructor() {
    super();
    this.tick = this.tick.bind(this);
    this.state = { timer: null, counter: 0, resetTimer: true };
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    this.clearInterval(timer);
  }

  tick() {
    const { gameStatus } = this.props;
    const { resetTimer } = this.state;
    let { counter } = this.state;
    if (gameStatus === "notPlaying") {
      this.setState({ counter: 0, resetTimer: true });
    }

    if (gameStatus === "playing") {
      counter = resetTimer ? 0 : counter + 1;
      this.setState({ counter, resetTimer: false });
    } else {
      this.setState({ resetTimer: true });
    }
  }

  render() {
    const { gameStatus, resetGame, flagCount } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <span className="MineSweeper__flagNum">{`${flagCount}`}</span>
        <span className="MineSweeper__face">
          <span
            className={`button ${gameStatus}`}
            role="button"
            onClick={() => resetGame()}
          />
        </span>
        <span className="MineSweeper__time">{counter} </span>
      </div>
    );
  }
}

export default GameMenu;
