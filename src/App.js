import { Provider } from "react-redux";

import Board from "./components/Board";
import GameLog from "./components/GameLog";
import Header from "./components/Header";
import Controls from "./components/Controls";
import store from "./store/store";

import "./styles/main.css";

function App() {
  return (
    <Provider store={store}>
      <div className="game">
        <Header />
        <main className="game__main">
          <div>
            <Board />
            <Controls />
          </div>
          <GameLog />
        </main>
      </div>
    </Provider>
  );
}

export default App;

// current player box
// normal styles
