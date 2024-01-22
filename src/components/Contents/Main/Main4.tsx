import React from "react";
import S from "./Main4.module.css";
import useScrollFadeIn from "../../hooks/useScrollFadIn";
import Main4Mobile from "./Main4Mobile";
import Main4Text from "./Main4Text";
const Main4 = () => {
  return (
    <div className={S.firstDiv}>
      <div className={S.contentDiv}>
        <h1 className={S.upsideText1}>버려지는 돈?</h1>
        <h2 className={S.upsideText2}>
          포인트, 할인, 캐쉬백, 마일리지,
          <br />
          놓치지 말고 다 가져가세요
        </h2>
      </div>

      <div className={S.totalDiv}>
        <Main4Mobile />
        <div>
          <Main4Text />
        </div>
      </div>
    </div>
  );
};

export default Main4;
