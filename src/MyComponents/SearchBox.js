import React, { useState } from "react";
import { Cards } from "./Cards";

export const SearchBox = (props) => {
  const [cards, setCards] = useState();

  const changeInput = (e) => {
    const input = e.target.value;
    const item = props.cards.filter((card, input) => {
      card.Name.toLowerCase().includes(input.toLowerCase());
      console.log(input);
      setCards(item);
    });

    console.log(input, props.cards);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="search"
          value={cards}
          onChange={changeInput}
        />
        <Cards cards={props.cards} />
      </div>
    </>
  );
};
