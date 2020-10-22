import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento"

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    <ComParametro titulo="Situação do Aluno" aluno="Maria Santos" nota={9.9} />
    <Fragmento />
  </div>,
  document.getElementById("root")
);
