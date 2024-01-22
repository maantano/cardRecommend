import React, { useEffect, useState } from "react";
import "./Search2.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const asyncUpFetchCardCop = createAsyncThunk(
  "cardCorp/cardCorpReducer",
  async ({ corporationTarget }) => {
    try {
      const response = await Axios.post("/api/cardCorporation", {
        corporationTarget,
      });
      return response.data;
    } catch (e) {
      console.log("asyncUpFetchXlsx ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

const Search2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToDetail = (obj) => {
    navigate(`/detail/${obj.id}`, {
      state: { list: obj },
    });
  };

  async function targetCard(targetId) {
    try {
      const response = await Axios.post("/api/targetCard", {
        targetId,
      });
      navigateToDetail(response.data[0]);
    } catch (err) {
      console.error("API Error:", err.message);
      throw err;
    }
  }

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

  return (
    <>
      <div className="ad">
        <div
          className="display-container  full-height relative-position display-container"
          style={{ outline: " red solid 0px" }}
        >
          <div className="full-height">
            <div className="q-carousel q-panel-parent full-height text-center">
              <div className="q-carousel__slides-container">
                <div role="tabpanel" className="q-panel scroll">
                  <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                    <a
                      href="/card/detail/2441"
                      className="full-width full-height"
                    >
                      <div className="full-width"></div>
                    </a>
                    <div style={{ height: "0px" }}>
                      <img
                        alt=""
                        src="https://teralog.techhub.co.kr/imp?la_gc=CP4B3643229850&amp;la_src=ib&amp;la_cnfg=1599"
                        width="0"
                        height="0"
                        style={{
                          maxAidth: "0px",
                          maxHeight: "0px",
                          display: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rgt_lst event">
        <div
          className="display-container event-title  full-height relative-position display-container"
          style={{ outline: "red solid 0px" }}
        >
          <div style={{ height: "70px" }}>
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <a
                        href="/search/card"
                        className="full-width full-height router-link-active"
                        target="_self"
                      >
                        <div>
                          <div className="title">
                            <p>
                              이번달은? 최대 <strong>121.5만원</strong> 캐시백
                            </p>
                          </div>
                        </div>
                      </a>
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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

        <div className="pro_wrap">
          <div
            onClick={() => targetCard("kbCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2441/card_img/28283/2441card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">KB국민카드</p>
                          <p className="benefit">
                            <strong>19.5만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("smCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/51/card_img/27707/51card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">삼성카드</p>
                          <p className="benefit">
                            <strong>18만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("ltCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2330/card_img/24131/2330card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">롯데카드</p>
                          <p className="benefit">
                            <strong>15만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("shCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2295/card_img/22902/2295card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">신한카드</p>
                          <p className="benefit">
                            <strong>15만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div tyle={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("nhCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2513/card_img/28755/2513card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">NH농협카드</p>
                          <p className="benefit">
                            <strong>12만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            className="display-container btn_more  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
      </div>
    </>
  );
};

export default Search2;
