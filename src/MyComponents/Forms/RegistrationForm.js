import React, { useState } from "react";

export const RegistrationForm = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegister({ ...userRegister, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newRecords = { ...userRegister, id: new Date().getTime().toString() };
    setRecords([...records, newRecords]);

    setUserRegister({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Fullname</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={userRegister.username}
            onChange={HandleInput}
            name="username"
            id=""
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={userRegister.email}
            onChange={HandleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <br />
          <input
            type="phone"
            autoComplete="off"
            value={userRegister.phone}
            onChange={HandleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <input
            type="password"
            autoComplete="off"
            value={userRegister.password}
            onChange={HandleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        {records.map((curElement) => {
          return (
            <div key={curElement.id}>
              <p>{curElement.username}</p>
              <p> {curElement.email}</p>
              <p>{curElement.phone}</p>
              <p>{curElement.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
