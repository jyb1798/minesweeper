import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import minesweeperReducer from "./reducers/MinesweeperReducer";
import Minesweeper from "./components/Minesweeper/Minesweeper";
import { RESET_BOARD } from "./actions/boardActions";

const initAction = {
  type: RESET_BOARD,
  level: "BEGINNER",
};

const App = () => {
  const store = createStore(
    minesweeperReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.dispatch(initAction);
  return (
    <Provider store={store}>
      <Minesweeper />
    </Provider>
  );
};

export default App;
