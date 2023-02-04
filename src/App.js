import React from "react";
import { Gameboard } from "./components/Gameboard";
import { Score } from "./components/Score";
import { Victory } from "./components/Victory";
import { nanoid } from "nanoid";

function App() {
  const [currentScore, setCurrentScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [cards, setCards] = React.useState([]);
  const [victory, setVictory] = React.useState(false);
  const [gameId, setGameId] = React.useState(nanoid());
  React.useEffect(() => {
    generateCards(4);
  }, []);

  const restartGame = () => {
    setCurrentScore(0);
    generateCards(4);
    setVictory(false);
  };

  const generateCards = (num) => {
    setCards(() => {
      const numbers = Array(20)
        .fill()
        .map((_, index) => index + 1);
      numbers.sort(() => Math.random() - 0.5);
      const cards = [];
      for (let i = 1; i < num; i++) {
        const card = {
          id: numbers[i],
          clicked: false,
        };
        cards.push(card);
      }
      return [...cards];
    });
    setGameId(nanoid());
  };

  const levelUp = () => {
    if (currentScore === 2) generateCards(7);
    if (currentScore === 8) generateCards(10);
    if (currentScore === 15) generateCards(13);
    if (currentScore === 27) setVictory(true);
  };

  const markClicked = (e) => {
    if (!e.target.classList.contains("card")) return;
    const cardId = +e.target.dataset.id;

    if (!cards.find((card) => card.id === cardId).clicked) {
      setCurrentScore((prevScore) => {
        const score = prevScore + 1;
        if (score > bestScore) setBestScore(score);
        return score;
      });
      setCards(
        cards.map((card) => card.id === cardId && (card.clicked = true))
      );

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return [...array];
      }
      setCards(shuffleArray(cards));
      levelUp();
    } else restartGame();
  };

  return (
    <>
      {victory ? (
        <Victory restartGame={restartGame} />
      ) : (
        <>
          <Score currentScore={currentScore} bestScore={bestScore} />
          <Gameboard key={gameId} cards={cards} markClicked={markClicked} />
        </>
      )}
    </>
  );
}

export default App;
