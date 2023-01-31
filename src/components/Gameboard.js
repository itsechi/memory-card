import { Card } from "./Card";
import React from "react";

export const Gameboard = (props) => {
  const generateCards = props.cards.map((item) => (
    <Card id={item.id} key={item.id} />
  ));

  return (
    <main className="gameboard" onClick={props.markClicked}>
      <p className="tutorial">
        Click on a card to get points but don’t pick the same card you chose
        before!
      </p>

      <section className="cards">{generateCards}</section>
    </main>
  );
};
