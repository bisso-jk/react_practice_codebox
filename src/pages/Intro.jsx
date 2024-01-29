import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <Link to="/react-concepts">React Concepts</Link>
      <br />
      <Link to="/tic-tac-toe">Tic Tac Toe</Link>
    </div>
  );
};

export default Intro;
