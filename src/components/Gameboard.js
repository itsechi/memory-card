import { Card } from "./Card";
import React, { useEffect } from "react";

export const Gameboard = () => {
  const [cards, setCards] = React.useState([]);
  useEffect(() => {
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
    cards.map(
      (item) => item.id === +e.target.dataset.id && (item.clicked = true)
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
  };

  const generateCards = cards.map((item) => (
    <Card id={item.id} key={item.id} />
  ));

  return <div onClick={markClicked}>{generateCards}</div>;
};
