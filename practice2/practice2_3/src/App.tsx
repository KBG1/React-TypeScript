import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <ul>
        <ClassComponent />
        <ClassComponent />
      </ul>
    );
  }
}
