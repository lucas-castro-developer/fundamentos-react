import "./App.css"
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#01 - Primeiro exercício">
        <Primeiro></Primeiro>
      </Card>
      <Card titulo="#02 - Com parâmetro">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Maria Santos"
          nota={9.9}
        />
      </Card>
      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={5} max={10} />
      </Card>
    </div>
  </div>
);
