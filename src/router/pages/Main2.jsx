import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main2 = () => {
  const [currentText, setCurrentText] = useState("");
  const targetText = "Make your own card";
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showWebVisual, setShowWebVisual] = useState(false);
  const [webVisualOffset, setWebVisualOffset] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [webVisualOpacity, setWebVisualOpacity] = useState(0);
  const [webVisualAnimated, setWebVisualAnimated] = useState(false);
  const [showRgtTitle, setShowRgtTitle] = useState(false);
  const [showWebVisualAnimated, setShowWebVisualAnimated] = useState(false);

  const handleScroll = () => {
    const scrollRatio =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);
    setScrollPosition(scrollRatio);

    if (isMouseOver) {
      const newOffset = scrollRatio * 50;
      setWebVisualOffset(newOffset);
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  const handleRgtTitleAnimationEnd = () => {
    setShowWebVisualAnimated(true);
  };
  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      setCurrentText((prevText) =>
        prevText.length === targetText.length
          ? targetText
          : prevText + targetText[charIndex++]
      );

      if (charIndex === targetText.length) {
        clearInterval(interval);
        setShowRgtTitle(true);
      }
    }, 80);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowWebVisual(true);
  }, []);

  useEffect(() => {
    if (showWebVisual) {
      setWebVisualAnimated(true);
      const animationInterval = setInterval(() => {
        setWebVisualOpacity((prevOpacity) =>
          prevOpacity + 0.08 > 1 ? 1 : prevOpacity + 0.08
        );
      }, 40);

      return () => clearInterval(animationInterval);
    }
  }, [showWebVisual]);

  useEffect(() => {
    if (showRgtTitle && webVisualOpacity === 1) {
      setTimeout(() => {
        setShowWebVisualAnimated(true);
      }, 100);
    }
  }, [showRgtTitle, webVisualOpacity]);

  const calculateWebTextOpacity = () => {
    const maxOpacity = 1;
    const minOpacity = 0.4;

    let opacity = maxOpacity - scrollPosition * 1.5;
    if (opacity < minOpacity) {
      opacity = minOpacity;
    }

    if (webVisualOffset <= 25) {
      return opacity * (webVisualAnimated ? webVisualOpacity : 0);
    } else {
      return (
        opacity *
        (1 - (webVisualOffset - 25) / 25) *
        (webVisualAnimated ? webVisualOpacity : 0)
      );
    }
  };
  const webVisualStyle = {
    transform: `translateY(calc(-${webVisualOffset}vh))`,
    opacity: showWebVisualAnimated ? webVisualOpacity : 0, // showWebVisualAnimated 상태 값에 따라 조정
    transition: "transform 0.3s ease-in-out, opacity 0.5s ease-in-out",
    pointerEvents: showWebVisualAnimated ? "auto" : "none",
  };
  const getKoreanTime = () => {
    const utcNow = new Date();
    const koreanTime = new Date(
      utcNow.getUTCFullYear(),
      utcNow.getUTCMonth(),
      utcNow.getUTCDate(),
      utcNow.getUTCHours() + 9,
      utcNow.getUTCMinutes(),
      utcNow.getUTCSeconds()
    );
    return koreanTime;
  };
  const getKoreanDayOfWeek = () => {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
    const dayIndex = getKoreanTime().getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <div className="main-container">
      <section>
        <div className="webText">
          <div className="row">
            <div className="home__hero__logo column xlarge-9 is-visible lftTitle">
              <div style={{ display: "flex" }}>
                <p style={{ fontSize: "150px" }}>{currentText}</p>
              </div>
            </div>
            <div
              className="rgtTitle"
              data-animation-delay="300"
              onAnimationEnd={handleRgtTitleAnimationEnd}
              style={{
                opacity: showRgtTitle ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
              }}
            >
              <div style={{ marginLeft: 30 }}>
                <div
                  data-animation="fade-in-up"
                  data-animation-delay="300"
                  className="is-visible"
                >
                  <span className="time" data-timezone="Asia/Seoul">
                    <span className="time__hour">
                      {getKoreanTime().getHours().toString().padStart(2, "0")}
                    </span>
                    <span className="blink">:</span>
                    <span className="time__minute">
                      {getKoreanTime().getMinutes().toString().padStart(2, "0")}
                    </span>{" "}
                    (KST)
                  </span>
                  <span className="day-of-week"> {getKoreanDayOfWeek()}</span>
                </div>
                <h2
                  data-animation="fade-in-up"
                  data-animation-delay="400"
                  data-animation-delay-mobile="200"
                  className="is-visible"
                  style={{ marginTop: 60 }}
                >
                  금융, 그 이상의
                  <br />
                  역사를 만들고 싶습니다.
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="webVisual"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={webVisualStyle}
        >
          1234
        </div>
      </section>
      <section className="home__about">
        <div className="row">
          <div
            className="column small-12 xlarge-3 large-up is-visible"
            data-animation="fade-in"
          >
            <span className="myName">Project by : Min Kyung Eon</span>
          </div>
          <div
            className="column small-12 large-10 xlarge-3 is-visible div1"
            data-animation="fade-in"
            data-animation-delay="100"
          >
            <p className="titleSub"> 3분이면 카드 비교 끝!</p>
            <br />
            <h4
              className="h2 is-visible titleH4"
              data-animation="fade-in-up"
              data-animation-delay="100"
            >
              버려지는 돈?
            </h4>
            <br />
            <p className="titleP">
              포인트, 할인, 캐쉬백, 마일리지, 놓치지 말고 다 가져가세요
            </p>
          </div>
          <div
            className="column small-6 large-5 xlarge-3 is-visible div2"
            data-animation="fade-in"
            data-animation-delay="300"
          >
            <p className="titleSub"> 소비 패턴 분석</p>
            <br />
            <h4
              className="h2 is-visible titleH4"
              data-animation="fade-in-up"
              data-animation-delay="300"
            >
              소비 패턴을 분학하고 필요한 카드를
            </h4>
            <br />
            <p className="titleP">
              직업, 직군, 성별, 상관 없이 '오직' 소비 패턴으로 필요한 카드를
              발급받으세요.
            </p>
            <Link to="/xlsx2">
              <div>
                <div className="underline-animation">Pattern analysis</div>
              </div>
            </Link>
          </div>
          <div
            className="column small-6 large-5 xlarge-3 is-visible div3"
            data-animation="fade-in"
            data-animation-delay="400"
          >
            <p className="titleSub">버려지는 돈?</p>
            <br />
            <h4
              className="h2 is-visible titleH4"
              data-animation="fade-in-up"
              data-animation-delay="400"
            >
              CARD
            </h4>
            <br />
            <p className="titleP">
              필요한 카드를 확인하는 가장 <br />
              빠른 방법
            </p>
            <Link to="/about">
              <div>
                <div className="underline-animation">Search card</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main2;
