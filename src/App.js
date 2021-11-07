import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./MyComponents/Alert";
import About from "./MyComponents/About";
import Header from "./MyComponents/Header";
import Text from "./MyComponents/Text";

// import { Footer } from "./MyComponents/Footer";
// import { SearchBox } from "./MyComponents/SearchBox";
// import { Chat } from "./MyComponents/Chat";
// import { Handlechange } from "./MyComponents/Handlechange";
// import { UseStateArray } from "./MyComponents/UseStateArray";
// import { ShortCirEva } from "./MyComponents/ShortCirEva";
// import { BasicForm } from "./MyComponents/Forms/BasicForm";
// import { RegistrationForm } from "./MyComponents/Forms/RegistrationForm";
// import { UnControlled } from "./MyComponents/Forms/UnControlled";

function App() {
  // let data = [
  //   {
  //     Name: "GABER",
  //   },
  //   {
  //     Name: "Sonu",
  //   },
  //   {
  //     Name: "Rahul",
  //   },
  //   {
  //     Name: "Saman",
  //   },
  //   {
  //     Name: "Rohan",
  //   },
  // ];
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
    }
  };

  return (
    <Router>
      <>
        <Header title="My Text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route>
            <Text path="/" mode={mode} showAlert={showAlert} />
          </Route>

          {/* <UseStateArray />
      <SearchBox cards={data} /> */}
          {/* <Cards /> */}
          {/* <Chat />
      <Handlechange />
      <ShortCirEva />
      <BasicForm />
      <RegistrationForm />
      <UnControlled />
      <Footer /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
