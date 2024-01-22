import React from "react";
import Search1 from "../../components/Search/Search1";
import Search2 from "../../components/Search/Search2";

// import { useQuery } from "react-query";

const Search = () => {
  return (
    <>
      <section className="contentArea">
        <div className="cont1Div">
          <section style={{ paddingTop: 40 }}>
            <div className="inner">
              <article
                style={{
                  float: "left",
                  width: 840,
                  backgroundClip: "#F6F5F6",
                }}
                className="leftArea"
              >
                <Search1 />
              </article>
              <article
                style={{
                  paddingTop: 0,
                  float: "right",
                  height: "100%",
                  width: 340,
                  display: "inline-block",
                  marginLeft: 30,
                }}
                className="right_area"
              >
                <Search2 />
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
                            {/* <span>이미지 들어감!!!!</span> */}
                            {/* <img
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

export default Search;
