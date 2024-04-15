import React, { Component } from "react";
import "./App.css";
import ClassComponent from "./ClassComponent";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to google"/>
        <ClassComponent href="http://www.google.com" text="go to google"/>
      </ul>
    );
  }
}
