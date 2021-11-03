import React from "react";

export const CardItems = ({ card, index }) => {
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem;", display: "inline-block;" }}
      >
        <img
          src={"https://joeschmoe.io/api/v1/random" + index}
          className="card-img-top"
          alt="cardItems"
        />
        <div className="card-body">
          <h5 className="card-title">{card.Name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
