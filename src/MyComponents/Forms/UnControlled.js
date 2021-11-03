import React, { useState, useRef } from "react";

// ref hooks
export const UnControlled = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm1 = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("please fill the data") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm1}>
        <label htmlFor="luckyName">enter your lucky name</label>
        <br />
        <input type="text" id="luckyName" ref={luckyName} />
        <br />
        <button>submit</button>
      </form>
      <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
    </div>
  );
};
