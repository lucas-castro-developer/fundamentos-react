import "./ListaProdutos.css";
import React from "react";
import produtos from "../data/produtos";

export default (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <table className="tabelaProdutos">
      <thead>
        <tr>
          <th>Id do produto</th>
          <th>Nome do produto</th>
          <th>Preço do produto</th>
        </tr>
      </thead>
      <tbody>{getLinhas()}</tbody>
    </table>
  );
};
