import React from "react";
import "./MV.css";
const MainVisual = () => {
  return (
    <>
      <div className="mv">
        <div className="mvText">
          <div className="mvDivSpan">
            <span className="mvSpan">
              금융, 그 이상의 <br /> 역사를 만들고 있습니다
            </span>
          </div>
        </div>
        <div className="arrow">
          <img
            alt=""
            src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png"
            className="arrImg"
          />
        </div>
      </div>
    </>
  );
};

export default MainVisual;
