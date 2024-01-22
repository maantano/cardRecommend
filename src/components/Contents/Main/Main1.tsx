import React from "react";
import "./Main1.css";
import { Link } from "react-router-dom";

const Main1 = () => {
  return (
    <div className="total">
      <div className="firstDiv">
        <div className="secondDiv">
          <div className="lf-firstDiv">
            <h1 className="lf-firstH1">카드.</h1>
            <br />
            <div className="lf-secondDiv">
              필요한 카드를 확인하는 가장 빠른 방법
            </div>
          </div>

          <div className="rg-upside-firstDiv">
            <div className="rg_firtDiv">
              <h3 className="rg_firstText">
                내게 맞는 카드상품, 비교하기 힘드시죠?
                <br />
                <strong>쉽고 정확하게 비교합니다.</strong>
              </h3>
            </div>
            <div className="rg_btnDiv">
              <Link to="/about">
                <div className="btn">카드 검색</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
