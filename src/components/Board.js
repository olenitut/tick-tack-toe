import { useSelector } from "react-redux";
import BoardSquare from "./BoardSquare";

const Board = () => {
  const board = useSelector((state) => state.game.board);
  return (
    <div className="game__board">
      {board.map((el, i) => (
        <BoardSquare fill={el} key={i} id={i} />
      ))}
    </div>
  );
};

export default Board;
