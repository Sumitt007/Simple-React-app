import React, { useState } from "react";

export const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "sumit",
      Age: 24,
    },
    {
      id: 1,
      myName: "vinod",
      Age: 25,
    },
    {
      id: 2,
      myName: "sonu",
      Age: 26,
    },
  ];

  const [myArray, setMyArray] = useState(bioData);
  //   console.log(bioData);
  const clearArray = () => {
    setMyArray([]);
  };

  const removeItem = (id) => {
    const myNewArray = myArray.filter((curElement) => {
      return curElement.id !== id;
    });
    setMyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((curElement) => {
        return (
          <h1 className="h1Style" key={curElement.id}>
            Name:{curElement.myName} & Age:{curElement.Age}
            <button onClick={() => removeItem(curElement.id)}>remove</button>
          </h1>
        );
      })}
      ;<button onClick={clearArray}>clear</button>
    </>
  );
};
