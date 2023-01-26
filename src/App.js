import { Gameboard } from "./components/Gameboard";
import React from "react";
import { Score } from "./components/Score";

function App() {
  const [currentScore, setCurrentScore] = React.useState(0);

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    setCards(() => {
      const cards = [];
      for (let i = 1; i < 6; i++) {
        const card = {
          id: i,
          clicked: false,
        };
        cards.push(card);
      }
      return cards;
    });
  }, []);

  const markClicked = (e) => {
    if (!e.target.classList.contains("card")) return;
    cards.find((item) => item.id === +e.target.dataset.id).clicked
      ? setCurrentScore(0)
      : setCurrentScore((prevScore) => prevScore + 1);
    cards.map(
      (item) => item.id === +e.target.dataset.id && (item.clicked = true)
    );
    console.log(cards.find((item) => item.id === +e.target.dataset.id));

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
      <Gameboard cards={cards} markClicked={markClicked} />
      <Score currentScore={currentScore} />
    </>
  );
}

export default App;
