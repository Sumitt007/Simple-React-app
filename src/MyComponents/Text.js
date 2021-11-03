import React, { useState } from "react";

const Text = (props) => {
  const [msg, setMsg] = useState("");

  const handleUpClick = () => {
    let newMsg = msg.toUpperCase();
    setMsg(newMsg);
    props.showAlert("converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newMsg = msg.toLowerCase();
    setMsg(newMsg);
    props.showAlert("converted to lowercase", "success");
  };

  const handleClearMsg = () => {
    setMsg("");
    props.showAlert("cleared Message", "success");
  };

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div class="mb-3">
          <h1>Enter the msg to analize below</h1>
          <textarea
            style={{
              background: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={msg}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={msg.length === 0}
          className="btn btn-primary mx-3"
          onClick={handleUpClick}
        >
          convert to upperCase
        </button>
        <button
          disabled={msg.length === 0}
          className="btn btn-primary mx-3"
          onClick={handleLoClick}
        >
          convert to lowerCase
        </button>
        <button
          disabled={msg.length === 0}
          className="btn btn-primary mx-3"
          onClick={handleClearMsg}
        >
          Clear msg
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>your text summary</h1>
        <p>
          {
            msg.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          word and {msg.length} characters
        </p>
        <p>
          {0.008 *
            msg.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{msg.length > 0 ? msg : "Nothing to preview"}</p>
      </div>
    </>
  );
};

export default Text;
