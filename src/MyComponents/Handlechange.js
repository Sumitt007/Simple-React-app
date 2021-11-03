import React, { useState } from "react";

export const Handlechange = () => {
  const [FullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {FullName.fname} {FullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              name="fName"
              onChange={inputEvent}
              value={FullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              name="lName"
              onChange={inputEvent}
              value={FullName.lname}
            />
            <br />
            <button>submit me</button>
          </div>
        </form>
      </div>
    </>
  );
};
