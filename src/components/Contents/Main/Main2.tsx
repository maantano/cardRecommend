import React from "react";
import Style from "./Second.module.css";

const Main2 = () => {
  return (
    <>
      <div className={Style.firtDiv}>
        <h3 className={Style.firstText}>
          내게 맞는 카드상품, 비교하기 힘드시죠?
          <strong>쉽고 정확하게 비교합니다.</strong>
        </h3>
      </div>
      <div className={Style.btnDiv}>
        <button className={Style.cssBtn}>카드 검색</button>
      </div>
    </>
  );
};

export default Main2;
