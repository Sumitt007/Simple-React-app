import React, { useState } from "react";

export const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { email: email, password: password };
      setAllEntry([...allEntry, newEntry]);

      setEmail("");
      setpassword("");
    } else {
      alert("you fill the box");
    }
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};
