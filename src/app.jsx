import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Primeiro></Primeiro>
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    <ComParametro titulo="Situação do Aluno" aluno="Maria Santos" nota={9.9} />
    <Fragmento />
  </div>
);