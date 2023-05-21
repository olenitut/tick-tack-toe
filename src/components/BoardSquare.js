import { useDispatch, useSelector } from "react-redux";
import { addNewStep } from "../store/slices/gameSlice";

const BoardSquare = ({ fill, id }) => {
  const isPlaying = useSelector((state) => state.game.isPlaying);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!isPlaying) {
      return;
    }
    dispatch(addNewStep(id));
  };

  return (
    <div onClick={clickHandler} className="game__square">
      {fill}
    </div>
  );
};

export default BoardSquare;
