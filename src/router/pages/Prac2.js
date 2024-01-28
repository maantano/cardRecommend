import React from "react";
import Prac from "./Prac";

const Prac2 = () => {
  const onClickHandle = () => {
    alert("hahahah");
  };
  return (
    <div>
      <Prac onClick={onClickHandle} className="view" id="plz" />
    </div>
  );
};

export default Prac2;
