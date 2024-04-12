import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as D from "./data";

// const CE = React.createElement;

// const rootVirtualDOM = CE("ul", null, [
//   CE("li", null, [
//     CE("a", { href: "http://www.google.com", target: "_blank" }, [
//       CE("p", null, "go to google"),
//     ]),
//   ]),
// ]);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(rootVirtualDOM);

//const child = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>go to FaceBook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to Twitter</p>
//     </a>
//   </li>,
// ];

// const rootVirtualDOM = <ul>{child}</ul>;
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(rootVirtualDOM);

// const child = [0, 1, 2].map((n: number) => <h3>hello Word {n}</h3>);
// const rootVirtualDOM = <div>{child}</div>;

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(rootVirtualDOM);

const child = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
));

const rootVirtualDOM = <div>{child}</div>;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(rootVirtualDOM);
