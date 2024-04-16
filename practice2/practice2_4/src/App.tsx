import React from "react";
import logo from "./logo.svg";
import "./App.css";
import P from "./P";

function App() {
  const texts = ["hello", "world"].map((text, index) => (
    <P key={index} children={text}/>
  ));
  return <div children={texts}></div>;
}

export default App;
