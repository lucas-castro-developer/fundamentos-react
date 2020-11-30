import "./App.css";
import React from "react";

import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import MegaSena from "./components/megaSena/MegaSena";

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
        <Familia sobrenome="Santos">
          <FamiliaMembro nome="Lucas" />
          <FamiliaMembro nome="Luzia" />
          <FamiliaMembro nome="Simone" />
          <FamiliaMembro nome="Thiago" />
        </Familia>
      </Card>
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#734046">
        <ListaProdutos></ListaProdutos>
      </Card>
      <Card titulo="#08 - Renderização condicional" color="#f39233">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Lucas Castro" }}></UsuarioInfo>
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#11 - Componente controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} passoInicial={100}></Contador>
      </Card>
      <Card titulo="#13 - Mega-Sena" color="#B9006E">
        <MegaSena></MegaSena>
      </Card>
    </div>
  </div>
);
