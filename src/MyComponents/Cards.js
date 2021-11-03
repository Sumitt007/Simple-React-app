import React from "react";
import { CardItems } from "./CardItems";

export const Cards = (props) => {
  return (
    <div className="container">
      <h2>CARDS LIST</h2>
      {props.cards.map((card, index) => {
        return <CardItems card={card} index={index} />;
      })}
    </div>
  );
};
