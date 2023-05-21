import { useDispatch } from "react-redux";
import { restart } from "../store/slices/gameSlice";

const Controls = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(restart());
  };
  return (
    <button className="game__restart" onClick={handleClick}>
      {" "}
      Restart{" "}
    </button>
  );
};

export default Controls;
