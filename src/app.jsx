import "./App.css";
import React from "react";

import Familia from "./components/basicos/Familia";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#01 - Primeiro exercício" color="#2ab7ca">
        <Primeiro></Primeiro>
      </Card>
      <Card titulo="#02 - Com parâmetro" color="#f4b6c2">
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
      <Card titulo="#03 - Fragmento" color="#03396c">
        <Fragmento />
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#851e3e">
        <Aleatorio min={5} max={10} />
      </Card>
      <Card titulo="#05 - Componente com Filho" color="#00C8F8">
        <Familia sobrenome="Santos" />
      </Card>
    </div>
  </div>
);
