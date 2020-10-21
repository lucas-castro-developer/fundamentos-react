import React from "react";
import ReactDOM from "react-dom";

const el = document.getElementById("root");

const tag = <strong>Olá React!</strong>

ReactDOM.render(
  <div>
    { tag }
  </div>,
  el
);
