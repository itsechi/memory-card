import { Card } from "./Card";

export const Gameboard = (props) => {
  const generateCards = props.cards.map((item) => (
    <Card id={item.id} key={item.id} />
  ));

  return (
    <main className="gameboard" onClick={props.markClicked}>
      <p className="gameboard__text">
        Click on a card to get points but don’t pick the same card you chose
        before!
      </p>
      <section className="gameboard__cards">{generateCards}</section>
    </main>
  );
};
