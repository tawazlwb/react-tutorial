import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>Hello world!</h4>;
}

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById("root")
);
