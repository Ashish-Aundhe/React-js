// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./Alert";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enable or not
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
      setMode("dark"); //we cant use setMode='dark' bcz its state varibale
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Sccess");
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      {/*<Navrbar title="TextUtils" aboutText="About TextUtils" /> */}

      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} aboutText="About us" />
      <Alert alert={alert} />
      <div className="container my-3">

                 {/* <Switch> is used in old version, it replsced by Routes */}
        <Routes>
          <Route exact path="/about" element={<About />}> </Route>

          <Route
           exact path="/"
            element={
              <TextForms
                showAlert={showAlert}
                heading="Enter the text to anylyst below"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
