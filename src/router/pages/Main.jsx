import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
// import qm from "../../assets/icons/free-icon-question-3106703.png";
// import qm2 from "../../assets/icons/free-icon-question-mark-5730459.png";

// import keb from "../../assets/icons/keb.png";

import Axios from "axios";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

export const asyncUpFetchCardCop = createAsyncThunk(
  "cardCorp/cardCorpReducer",
  async ({ corporationTarget }) => {
    try {
      const response = await Axios.post(`/api/cardCorporation`, {
        corporationTarget,
      });
      return response.data;
    } catch (e) {
      console.log("asyncUpFetchXlsx ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

const Main = () => {
  const [imageClassMap, setImageClassMap] = useState({});
  const [initialRender, setInitialRender] = useState(true);
  const [randomC, setRandC] = useState([]);
  const [callIndex, setCallIndex] = useState([]);

  const [corporationCList, setCorporationCList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // firebase 마이그레이션 randomCard ========================================================
  async function callIndexFun() {
    try {
      const response = await Axios.post(`/`);
      console.log("callIndexFun !!! =====> ", response.data);
      setCallIndex(response.data);
    } catch (error) {
      // 에러 처리
      console.error("API Error:", error.message);
      throw error;
    }
  }

  async function randomCard() {
    try {
      const response = await Axios.post(`/api/randomCard`);
      setRandC(response.data);
    } catch (error) {
      // 에러 처리
      console.error("API Error:", error.message);
      throw error;
    }
  }
  async function cardCorpList() {
    try {
      const response = await Axios.post(`/api/cardCorporationList`);
      setCorporationCList(response.data);
    } catch (error) {
      // 에러 처리
      console.error("API Error:", error.message);
      throw error;
    }
  }

  useEffect(() => {
    console.log("callIndexFun !!!!");
    callIndexFun();
    cardCorpList();
  }, []);

  // ----------------------------------------------------------------------------------------

  const handleNodeClick = async (clickedId) => {
    try {
      await navigateToSearchCardCorp(clickedId);
    } catch (error) {
      console.error("handleNodeClick Error:", error);
    }
  };

  const navigateToSearchCardCorp = async (corporationTarget) => {
    try {
      const action = asyncUpFetchCardCop({
        corporationTarget,
      });

      const response = await dispatch(action);
      navigate("/search", {
        state: {
          list: response.payload,
          type: "credit",
          cardCorp: true,
          corporationTarget,
        },
      });
    } catch (error) {
      console.error("navigateToSearchCardCorp Error:", error);
    }
  };

  useEffect(() => {
    if (initialRender) {
      randomCard();
      setInitialRender(false);
    }
  }, [initialRender]);

  useEffect(() => {
    if (!initialRender) {
      randomC.forEach((item) => {
        const imgElement = new Image();
        imgElement.src = item.cardImg;
        imgElement.onload = () => {
          if (imgElement.width > imgElement.height) {
            setImageClassMap((prevMap) => ({
              ...prevMap,
              [item.cardImg]: "rotateBox",
            }));
          } else {
            setImageClassMap((prevMap) => ({
              ...prevMap,
              [item.cardImg]: "cardImg",
            }));
          }
        };
      });
    }
    // }, [initialRender]);
  }, [randomC, initialRender]);

  const slideInterval = 200;
  const slideWidth = 320;
  const containerWidth = randomC.length * slideWidth;
  const [backTitle, setBackTitle] = useState(false);
  const [aniDone, setAniDone] = useState(false);
  useEffect(() => {
    const slideCount = randomC.length + 16;
    let slideTimer;
    if (currentIndex > 22) setBackTitle(true);
    slideTimer = setInterval(() => {
      if (currentIndex === slideCount - 1) {
        setAniDone(true);
        clearInterval(slideTimer);
      } else {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
      }
    }, slideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [currentIndex, randomC]);

  return (
    <div className="main-container">
      {!aniDone ? (
        <div className="mainVis">
          <div
            className="scrollableContainer"
            style={{
              width: `${containerWidth}px`,
              transform: `translateX(-${currentIndex * slideWidth}px)`,
              transition: "transform 0.5s ease-in-out, opacity 1s ease-in-out", // opacity에도 transition 추가
              display: backTitle ? "none" : "flex",
            }}
          >
            {randomC.map((item, index) => (
              <div className="rightCardBox" key={index}>
                <div className="textCont">
                  <p className="cardCop">{item.cardCoKor}</p>
                  <p className="title">
                    {item.cardName.split("&nbsp;").join(" ")}
                  </p>
                  <p className="benefit">
                    주요혜택 : {item.benefitKor.split("&nbsp;").join(" ")}
                  </p>
                  <p className="annualFee">
                    연회비 : {item.nationalType.split("&nbsp;").join(" ")}
                  </p>
                </div>
                <div className="imgBox">
                  <img
                    className={imageClassMap[item.cardImg]}
                    src={item.cardImg}
                    alt={item.cardType}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={backTitle ? "a backTitle" : "b backTitle"}>
            MAKE OWN YOUR CARD
          </div>
        </div>
      ) : (
        <>
          <div className="aniDoneMainVis">
            <div className="visualSection">
              <div className="leftS">
                <p className="leftTitle">
                  <br /> 필요한 카드를 확인하는 가장 빠른 방법
                </p>
                <p className="leftSubTitle">
                  내게 맞는 카드, 비교하기 힘드시죠?
                  <br />
                  쉽고 정확하게 비교합니다.
                </p>
              </div>
              <div className="rightS">
                <div className="css-panjmq e5qlt9k3">
                  <div className="tossteam-video-1ipix51">
                    <video
                      className="tossteam-video-1p9vbdz"
                      poster="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&amp;dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&amp;lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&amp;lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="https://static.toss.im/3d/bankcard_hero_FFFFFF.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
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
      {/* <div className="cardCopContainer">
        <h1
          className=""
          style={{
            lineHeight: "1.1875",
            letterSpacing: 0,
            fontSize: "30px",
            fontWeight: 600,
            fontStyle: "normal",
            color: "#000",
            fontFamily: "NotoSans KR, sans-serif",
          }}
        >
          카드사별 카드 보기
        </h1>
        <div className="cardContainer2">
          {corporationCList.map((item) => {
            return (
              <div
                key={item.bankNo}
                className="cardCopBtn"
                id={item.bankNo}
                onClick={() => handleNodeClick(item.bankNo)}
              >
                <img
                  className="cardCorpImg"
                  src={item.cardCoImg}
                  alt={item.name}
                />
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Main;
