import Intro from "./pages/Intro";
import TicTacToe from "./pages/tic-tac-toe/TicTacToe";
import ReactConcepts from "./pages/react-concepts/ReactConcepts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/react-concepts" element={<ReactConcepts />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
