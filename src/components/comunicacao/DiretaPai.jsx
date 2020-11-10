import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Pedro" numero={20} bool={true} />
      <DiretaFilho idade="João" numero={17} bool={false} />
    </div>
  );
};
