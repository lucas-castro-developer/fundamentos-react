import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Lucas" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Luzia" {...props} />
      <FamiliaMembro nome="Simone" sobrenome="Marques" />
      <FamiliaMembro nome="Thiago" sobrenome="Marques" />
    </div>
  );
};
