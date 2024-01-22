import React, { useEffect, useState } from "react";

const Summary2 = ({ top3Codes }) => {
  const [isANodeVisible, setIsANodeVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsANodeVisible((prevIsVisible) => !prevIsVisible);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span
        className="typography typography--h3 typography--semibold color--grey800 css-1azakc"
        style={{
          color: "rgb(78, 89, 104)",
          margin: "100px 0",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        나의 소비 패턴은?
      </span>
      <div style={{ flex: "0 0 auto", height: "50px" }}></div>
      <div className="css-1lwf0h3">
        <div className="css-1vs9i7r">
          <div className="p-stepper p-stepper--column">
            {top3Codes.length > 0 ? (
              top3Codes.map((item, idx) => (
                <div className="p-step p-step--active" key={idx}>
                  <div className="p-step__indicator">
                    <div
                      className="p-step__number-indicator"
                      style={{
                        borderColor: "rgb(49, 130, 246)",
                        background: "rgb(49, 130, 246)",
                      }}
                    >
                      <span
                        className="typography typography--h6 typography--bold color--grey700"
                        style={{ color: "rgb(255, 255, 255)" }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                    <div
                      className="p-step__indicator__line p-step__number-indicator__line"
                      style={{ borderColor: "rgba(0, 29, 58, 0.18)" }}
                    ></div>
                  </div>
                  <div className="p-step__content">
                    <span className="typography typography--h7 typography--semibold color--grey700 p-step__title">
                      {item[0]}
                    </span>
                    {isANodeVisible ? (
                      <span className=" node a typography typography--p typography--regular color--grey700 p-step__description">
                        {idx + 1} 순위 소비 금액은?
                      </span>
                    ) : (
                      <span className=" node b typography typography--p typography--regular color--grey700 p-step__description">
                        {item[1].toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <>
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div className="p-step p-step--active" key={idx}>
                    <div className="p-step__indicator">
                      <div
                        className="p-step__number-indicator"
                        style={{
                          borderColor: "rgb(49, 130, 246)",
                          background: "rgb(49, 130, 246)",
                        }}
                      >
                        <span
                          className="typography typography--h6 typography--bold color--grey700"
                          style={{ color: "rgb(255, 255, 255)" }}
                        >
                          {idx + 1}
                        </span>
                      </div>
                      <div
                        className="p-step__indicator__line p-step__number-indicator__line"
                        style={{ borderColor: "rgba(0, 29, 58, 0.18)" }}
                      ></div>
                    </div>
                    <div className="p-step__content">
                      <span className="typography typography--h7 typography--semibold color--grey700 p-step__title">
                        {/* 전용 예약페이지에서 숙소를 찾아요 */}
                        {idx + 1}순위 소비 항목은?
                      </span>
                      <span className="typography typography--p typography--regular color--grey700 p-step__description">
                        {idx + 1} 순위 소비 금액은?
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="css-m22ruf"></div>
        <div className="css-1vs9i7r">
          <div className="css-1klp09s">
            <img
              src="https://static.toss.im/png-icons/timeline/hotelsdotcom-fill.png"
              alt=""
              className="css-gcwfoh e1yhnpht0"
            />
            <div className="css-m59ogo">
              <span
                className="tds-pc badge badge--small radius--m"
                style={{
                  backgroundColor: "rgba(49, 130, 246, 0.16)",
                  color: "rgb(27, 100, 218)",
                }}
              >
                10% 할인
              </span>
              <span
                className="typography typography--h5 typography--bold color--grey700"
                style={{ color: "var(--adaptiveGrey700)" }}
              >
                호텔스닷컴
              </span>
            </div>
            <button
              className="p-button p-button--primary p-button--inline p-button--fill p-button--default padding--base css-1akbwhn"
              type="button"
              aria-disabled="false"
            >
              예약하기
            </button>
          </div>
          <div style={{ flex: "0 0 auto", height: "40px" }}></div>
          <div className="css-1klp09s">
            <img
              src="https://static.toss.im/png-icons/securities/icn-sec-fill-EXPE.png"
              alt=""
              className="css-gcwfoh e1yhnpht0"
            />
            <div className="css-m59ogo">
              <span
                className="tds-pc badge badge--small radius--m"
                style={{
                  backgroundColor: "rgba(49, 130, 246, 0.16)",
                  color: "rgb(27, 100, 218)",
                }}
              >
                9% 할인
              </span>
              <span
                className="typography typography--h5 typography--bold color--grey700"
                style={{ color: "var(--adaptiveGrey700)" }}
              >
                익스피디아
              </span>
            </div>
            <button
              className="p-button p-button--primary p-button--inline p-button--fill p-button--default padding--base css-1akbwhn"
              type="button"
              aria-disabled="false"
            >
              예약하기
            </button>
          </div>
          <div style={{ flex: "0 0 auto", height: "70px" }}></div>
          <div className="css-1klp09s">
            <span
              className="tds-pc badge badge--large radius--m"
              style={{
                backgroundColor: "rgba(78, 89, 104, 0.16)",
                color: "rgb(78, 89, 104)",
              }}
            >
              예약 할 수 있는 기간
            </span>
            <span
              className="typography typography--h7 typography--semibold color--grey700 css-879ic9"
              style={{ color: "var(--adaptiveGrey700)" }}
            >
              2023년 12월 31일까지
            </span>
          </div>
          <div style={{ flex: "0 0 auto", height: "20px" }}></div>
          <div className="css-1klp09s">
            <span
              className="tds-pc badge badge--large radius--m"
              style={{
                backgroundColor: "rgba(78, 89, 104, 0.16)",
                color: "rgb(78, 89, 104)",
              }}
            >
              숙박 할 수 있는 기간
            </span>
            <span
              className="typography typography--h7 typography--semibold color--grey700 css-879ic9"
              style={{ color: "var(--adaptiveGrey700)" }}
            >
              2024년 3월 31일까지
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary2;
