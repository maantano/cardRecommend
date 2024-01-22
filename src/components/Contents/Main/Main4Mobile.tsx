import React from "react";
import S from "./Main4.module.css";
const Main4Mobile = () => {
  return (
    <div className={S.lf_firstDiv}>
      <img
        src={require(`../../../assets/icons/Shadow1.png`)}
        width="500"
        height="700"
        alt="1324"
        className="Style.liSvg"
      />
      <img
        src="https://static.toss.im/assets/homepage/newtossim/section1_2_01.png"
        alt=""
        className={S.mbDiv}
        style={{ left: "9%", top: "39%" }}
      />
      <div className={S.secondDiv}>
        <div className={S.cardImgDiv}>
          <img
            style={{ width: "100%" }}
            className={S.cardImg}
            src="https://cdn.banksalad.com/cards/sk_83.png"
            alt="CLUB SK(클럽 SK)카드 카드 앞면"
          />
        </div>
        <div className={S.textDiv}>
          <h2>
            <div className={S.firstH2}>
              <span className={S.fistSpan}>하나카드</span>
              <br />
              CLUB SK 카드
            </div>
          </h2>

          <div className={S.secondText}>
            <div>
              <span className={S.secondSpan}>
                <div>
                  최대 16만원 <br />
                  캐시백 증정
                </div>
              </span>
            </div>
          </div>
          <div className={S.thirdText}>연회비 "7,000"원</div>
        </div>
        <strong className={S.fourtDiv}>
          <button className={S.fourthBtn} aria-disabled="false" type="button">
            이벤트 보기
          </button>
          <span className={S.fourthText}>
            이벤트 종료까지
            <br />
            3일 7시간 34분
          </span>
        </strong>
      </div>
      {/* --------------------- */}
      <img
        src="https://static.toss.im/assets/homepage/newtossim/section1_2_01.png"
        alt=""
        className={S.mbDiv}
        style={{ left: "9%", top: "56%" }}
      />
      <div className={S.secondDiv2}>
        <div className={S.cardImgDiv}>
          <img
            style={{ width: "100%" }}
            className={S.cardImg}
            src="https://cdn.banksalad.com/cards/3578.png"
            alt="신한카드 Deep Dream"
          />
        </div>
        <div className={S.textDiv}>
          <h2>
            <div className={S.firstH2}>
              <span className={S.fistSpan}>신한카드</span>
              <br />
              신한카드 Deep Dream
            </div>
          </h2>

          <div className={S.secondText}>
            <div>
              <span className={S.secondSpan}>
                <div>
                  최대 14만원 <br />
                  캐시백 증정
                </div>
              </span>
            </div>
          </div>
          <div className={S.thirdText}>연회비 "10,000"원</div>
        </div>
        <strong className={S.fourtDiv}>
          <button className={S.fourthBtn} aria-disabled="false" type="button">
            이벤트 보기
          </button>
          <span className={S.fourthText}>
            이벤트 종료까지
            <br />
            13일 6시간 5분
          </span>
        </strong>
      </div>
      <div className={S.arrow2}>
        <img
          alt=""
          src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png"
          className={S.arrImg2}
        />
      </div>
    </div>
  );
};

export default Main4Mobile;
