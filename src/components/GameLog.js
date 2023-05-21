import { useSelector, useDispatch } from "react-redux";
import { reverseToStep } from "../store/slices/gameSlice";

const GameLog = () => {
  const gameLogs = useSelector((state) => state.game.steps);
  const currentPlayer = useSelector((state) => state.game.player);
  const isPlaying = useSelector((state) => state.game.isPlaying);

  const dispatch = useDispatch();
  const reverseToClicked = (id) => {
    dispatch(reverseToStep(id));
  };
  return (
    <div className="game__logs">
      {isPlaying && (
        <h2 className="game__current-player">Current player {currentPlayer}</h2>
      )}
      {gameLogs.map((log) => {
        if (!log.player) {
          return null;
        }
        return (
          <p
            onClick={() => reverseToClicked(log.id)}
            key={log.id}
            className="game__log"
          >{`Player ${log.player} made a move on square ${log.move}`}</p>
        );
      })}
    </div>
  );
};

export default GameLog;
