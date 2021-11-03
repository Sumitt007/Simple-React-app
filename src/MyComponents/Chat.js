import React, { useEffect, useState } from "react";

export const Chat = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      // document.title = `myfirstreact(${count})`;
    } else {
      document.title = `myfirstreact`;
    }
  });
  console.log("hii");
  return (
    <div>
      <h1 className="chatheading">{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  );
};
