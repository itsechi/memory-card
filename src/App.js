import { Gameboard } from "./components/Gameboard";
import React from "react";
import { Score } from "./components/Score";
// import { cards } from "./cards";

function App() {
  const [currentScore, setCurrentScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    setCards(() => {
      const numbers = Array(20)
        .fill()
        .map((_, index) => index + 1);
      numbers.sort(() => Math.random() - 0.5);
      const cards = [];
      for (let i = 1; i < 6; i++) {
        const card = {
          id: numbers[i],
          clicked: false,
        };
        cards.push(card);
      }
      return cards;
    });
  }, []);

  const restartGame = () => {
    setCurrentScore(0);
    cards.forEach((card) => (card.clicked = false));
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
      cards.map((card) => card.id === cardId && (card.clicked = true));
    } else restartGame();

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
  };

  return (
    <>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Gameboard cards={cards} markClicked={markClicked} />
    </>
  );
}

export default App;
