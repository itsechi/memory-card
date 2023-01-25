import { Card } from "./Card";

export const Gameboard = () => {
  const cards = [];
  for (let i = 1; i < 6; i++) {
    const card = {
      id: i,
      clicked: false,
    };
    cards.push(card);
  }

  const markClicked = (e) => {
    if (!e.target.classList.contains("card")) return;
    cards.map(
      (item) => item.id === +e.target.dataset.id && (item.clicked = true)
    );
  };

  const generateCards = cards.map((item) => (
    <Card id={item.id} key={item.id} />
  ));

  return <div onClick={markClicked}>{generateCards}</div>;
};
