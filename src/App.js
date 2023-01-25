import { Gameboard } from "./components/Gameboard";
import React from "react";
import { Score } from "./components/Score";

function App() {
  const [currentScore, setCurrentScore] = React.useState(0);

  return (
    <>
      <Gameboard />
      <Score currentScore={currentScore} />
    </>
  );
}

export default App;
