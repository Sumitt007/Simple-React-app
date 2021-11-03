import React, { useState } from "react";

const About = (props) => {
  const myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "#042743",
  };

  // const [myStyle, setmyStyle] = useState({
  //   backgroundColor: "black",
  //   color: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable light mode");

  // const toggleClick = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setBtnText("Enable dark mode");
  //   } else {
  //     setmyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setBtnText("Enable light mode");
  //   }
  // };

  //   let myStyle = {
  //     backgroundColor: "black",
  //     color: "white",
  //   };

  return (
    <div className="container my-5">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About us
      </h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analize your text quickly and
              efficiently.Be it word count ,charactor count
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free charactor counter tool that provides instant
              charactor count and word count statestics for a given text.
              textutils reports the number of words and characters. Thus it is
              suitable for writing text with word /character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any browsers such as crome
              ,firefox, Internet Explorer,safari.It suits to count charactor in
              facebook, blog, books,excel document,pdf document etc
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" class="btn btn-primary my-3" onClick={toggleClick}>
        {btnText}
      </button> */}
    </div>
  );
};

export default About;
