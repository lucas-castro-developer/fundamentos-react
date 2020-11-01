import React from "react";
import produtos from "../data/produtos";

export default (props) => {
  const tableStyle = {
    borderCollapse: "collapse",
    border: "1px solid #1A1A1A",
  };
  const produtosItemLista = produtos.map((produto) => {
    return (
      <tr style={tableStyle}>
        <td style={tableStyle}>{produto.idProduto}</td>
        <td style={tableStyle}>{produto.nomeProduto}</td>
        <td style={tableStyle}>{produto.precoProduto}</td>
      </tr>
    );
  });
  return (
    <table style={tableStyle}>
      <tr style={tableStyle}>
        <th style={tableStyle}>Id do produto</th>
        <th style={tableStyle}>Nome do produto</th>
        <th style={tableStyle}>Preço do produto</th>
      </tr>
      {produtosItemLista}
    </table>
  );
};
