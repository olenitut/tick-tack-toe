import { useSelector } from "react-redux";
const Header = () => {
  const message = useSelector((state) => state.game.message);

  return (
    <header>
      <h1 className="game__header">Play a game of tick-tack-toe</h1>
      {message && <div className="game__message">{message}</div>}
      {!message && <div className="game__fill"></div>}
    </header>
  );
};

export default Header;
