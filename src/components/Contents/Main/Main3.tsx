import React from "react";
import "./Main1.css";
import Main3Table from "./Main3Table";
const Main3 = () => {
  return (
    <div className="firstDiv">
      <div className="secondDiv">
        <div className="lf-firstDiv">
          <Main3Table />
        </div>

        <div className="rg-mb">
          <img
            src="https://static.toss.im/assets/homepage/newtossim/section1_1_home_02.png"
            alt=""
            className="rgMbContent"
          />
          <img
            src={require(`../../../assets/icons/Shadow1.png`)}
            width="500"
            height="700"
            alt="1324"
            className="Style.liSvg"
          />
        </div>
      </div>
    </div>
  );
};

export default Main3;
