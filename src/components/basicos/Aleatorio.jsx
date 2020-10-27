import React from "react";

export default function Aleatorio(props) {
  const {min, max} = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <>
      <h1>Número aleatório</h1>
      <p>
        Valor mínimo: <strong>{min}</strong>
      </p>
      <p>
        Valor máximo: <strong>{max}</strong>
      </p>
      <p>
        Valor aleatório: <strong>{aleatorio}</strong>
      </p>
    </>
  );
}
