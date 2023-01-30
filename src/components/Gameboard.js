import { Card } from "./Card";
import React from "react";

export const Gameboard = (props) => {


  const generateCards = props.cards.map((item) => (
    <Card id={item.id} key={item.id} />
  ));

  return <div onClick={props.markClicked}>{generateCards}</div>;
};
