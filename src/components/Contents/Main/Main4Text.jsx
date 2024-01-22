import React from "react";
import useScrollFadeIn from "../../hooks/useScrollFadIn";
import S from "./Main4.module.css";
const Main4Text = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4),
  };
  return (
    <div className={S.rgDiv} {...animatedItem[0]}>
      <div className={S.rgTitle}>소비 패턴 분석</div>
      <div className={S.rgTextContent}>소비 패턴을 분학하고 필요한 카드를</div>
      <div className={S.rgTextContent2}>
        직업, 직군, 성별, 상관 없이 '오직' 소비 패턴으로 필요한 카드를
        발급받으세요.
      </div>
    </div>
  );
};

export default Main4Text;
