import React, { useEffect, useState } from "react";
import DetailCard from "../../components/Detail/DetailCard";
import { animated, useTransition } from "react-spring";
import { useLocation } from "react-router-dom";

// import { useQuery } from "react-query";

const Deatil = () => {
  // const params = useParams();
  const location = useLocation();
  // const productId = params.id;
  const detailCard = location.state.list;
  // console.log(location.state.list);

  const [showBanner, setShowBanner] = useState(false);

  const transitions = useTransition(showBanner, {
    from: { height: "0px", opacity: 0 },
    enter: { height: "90px", opacity: 1 },
    leave: { height: "0px", opacity: 0 },
    config: { duration: 150 }, // 애니메이션 지속 시간
  });

  // 이벤트 핸들러 함수
  const handleScroll = () => {
    const threshold = 400; // 배너가 나타날 스크롤 위치
    const isScrolledPastThreshold = window.scrollY >= threshold;
    setShowBanner(isScrolledPastThreshold);
  };
  // 스크롤 이벤트를 감지하여 핸들러 함수 호출
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {transitions((styles, item) =>
        item ? (
          <animated.div
            data-v-727a6f7e=""
            className="fixmenu_wrap card_info"
            style={{ ...styles }}
          >
            <div data-v-727a6f7e="" className="inner">
              <div data-v-727a6f7e="" className="card">
                <span data-v-727a6f7e="" className="img">
                  {/* <img
                    data-v-727a6f7e=""
                    src="https://api.card-gorilla.com:8080/storage/card/350/card_img/20594/350card.png"
                  /> */}
                </span>
                <span data-v-727a6f7e="" className="txt">
                  {/* 직장인보너스체크카드 */}
                  {location.state.list.cardName.split("&nbsp;").join(" ")}
                </span>
              </div>
              <div data-v-727a6f7e="" className="btn_app_box">
                <a
                  data-v-727a6f7e=""
                  // href="/card/detail/500"
                  href={location.state.list.urlLink}
                  className="btn_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  카드 신청
                </a>
              </div>
            </div>
          </animated.div>
        ) : null
      )}
      <section className="contentArea">
        <div className="cont1Div">
          <section style={{ paddingTop: 40 }}>
            <div
              style={{
                position: "relative",
                minWidth: "1270px",
                margin: "0 auto",
                padding: "0 25px",
              }}
            >
              <article
                style={{
                  float: "left",
                  // width: "auto",
                  // maxWidth: "1120",
                  backgroundClip: "#F6F5F6",
                  width: "100%",
                }}
              >
                <DetailCard detailCard={detailCard} />
              </article>
            </div>
          </section>
        </div>
        <div
          data-v-7444ac99=""
          data-v-8f15a340=""
          className="ad_bottom flex_center"
        >
          <div
            data-v-0a0e3ee1=""
            data-v-7444ac99=""
            className="display-container ad  full-height relative-position display-container"
            style={{
              outline: "red solid 0px",
              minHeight: "300px",
              width: "900px",
            }}
          >
            <div data-v-0a0e3ee1="" className="full-height">
              <div
                data-v-0a0e3ee1=""
                className="q-carousel q-panel-parent full-height text-center"
              >
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div
                      data-v-0a0e3ee1=""
                      className="q-carousel__slide relative-position no-padding text-center full-height flex_center"
                    >
                      <a
                        data-v-0a0e3ee1=""
                        href="/card/detail/500"
                        // href="/card/detail/51"
                        className="full-width full-height"
                        target="_self"
                      >
                        <div data-v-0a0e3ee1="" className="full-width">
                          <div
                            data-v-0a0e3ee1=""
                            style={{ backgroundColor: "red" }}
                          >
                            {/* <span>이미지 들어감!!!!</span>
                            <img
                              data-v-0a0e3ee1=""
                              src="https://api.card-gorilla.com:8080/storage/display/3558/pc_img/29604/P_Banner_900x300_%EB%B0%94%ED%85%80%EB%B0%B0%EB%84%88.png"
                              style={{ width: "auto", height: "300px" }}
                              alt=""
                            /> */}
                          </div>
                        </div>
                      </a>
                      <div data-v-0a0e3ee1="" style={{ height: "0px" }}>
                        <img
                          data-v-0a0e3ee1=""
                          src="https://teralog.techhub.co.kr/imp?la_gc=CP4B3643229850&amp;la_src=ib&amp;la_cnfg=2280"
                          width="0"
                          height="0"
                          style={{
                            maxWidth: "0px",
                            maxHeight: "0px",
                            display: "none",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deatil;
