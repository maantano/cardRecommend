import React, { useCallback, useEffect, useState } from "react";

import "./Cont1.css";
import Section1, { asyncUpFetch } from "./Section1";
import Section2, { asyncBankUpFetch } from "./Section2";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { useNavigate } from "react-router-dom";

export const asyncUpFetchAllChk = createAsyncThunk(
  "AllCheck/asyncUpFetchAllChk",
  async (payload) => {
    try {
      const response = await fetchData(payload);
      return response.data;
    } catch (e) {
      console.log("getCategoryCount2 ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

async function fetchData(item) {
  return item;
}

const Cont1 = () => {
  const [curTab, setCurTab] = useState(0);
  const [expand, setExpand] = useState(false);
  const [cont1Res, setCont1Res] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const filterList = useSelector((state) => state.filterReducer.list); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.
  const bankList = useSelector((state) => state.eventReducerReducer.list); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.
  const cardType = useSelector((state) => state.filterReducer.cardType); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.
  const eventType = useSelector((state) => state.eventReducerReducer.eventType); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.
  const navigate = useNavigate();

  const getcardAll = async () => {
    try {
      await Axios.get("/api/cardAll").then((response) => {
        setCont1Res(response.data);
      });
    } catch (e) {
      console.log("ERROR 데이터를 받아올 수 없습니다.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const countTarget = useCallback((data) => {
    return data.length;
  }, []);

  useEffect(() => {
    let targetCount = "";
    if (curTab === 0) {
      targetCount = countTarget(filterList);
    } else {
      targetCount = countTarget(bankList);
    }
    let currentCount = totalCount;
    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += 1;
      } else if (currentCount > targetCount) {
        currentCount -= 1;
      } else {
        clearInterval(interval);
      }
      setTotalCount(currentCount);
    }, 10);

    return () => clearInterval(interval);
  }, [filterList, bankList, countTarget, curTab, totalCount]);

  const navigateToSearchWithList =
    cardType || eventType
      ? () => {
          const listToPass = curTab === 0 ? filterList : bankList;
          const type = curTab === 0 ? cardType : eventType;
          navigate("/search", {
            state: { list: listToPass, type },
          });
        }
      : null;

  const dispatch = useDispatch();
  const [allChkStatus, setAllChkStatus] = useState(false);
  const reFilter = () => {
    setAllChkStatus(!allChkStatus);
    dispatch(asyncUpFetch({ refresh: true, cur: false }));
    dispatch(asyncBankUpFetch({ refresh: true, cur: false }));
  };

  useEffect(() => {
    dispatch(asyncUpFetch({ cardType: [], refresh: "false1", cur: true }));
    dispatch(
      asyncBankUpFetch({ eventType: [], refresh: "false2", cur: false })
    );
  }, []);
  return (
    <section className="contentArea">
      <div className="cont1Div">
        <section style={{ paddingTop: 40 }}>
          <div className="inner">
            <article
              style={{ float: "left", width: 840, backgroundClip: "#F6F5F6" }}
            >
              <article className="searchSetting">
                <div className="step">
                  <div className="part tab">
                    <a
                      className={curTab === 0 ? "card on" : "card"}
                      onClick={() => {
                        setCurTab(0);
                        setExpand(false);
                        reFilter();
                      }}
                    >
                      <i></i>ONLY FOR YOU
                    </a>
                    <a
                      className={curTab === 1 ? "event on" : "event"}
                      onClick={() => {
                        setCurTab(1);
                        reFilter();
                      }}
                    >
                      <i></i>EVENT CARD
                    </a>
                  </div>

                  {curTab === 0 ? (
                    <>
                      <Section1
                        allChkStatus={allChkStatus}
                        getcardAll={getcardAll}
                        setAllChkStatus={setAllChkStatus}
                        setExpand={setExpand}
                      />
                    </>
                  ) : (
                    <Section2
                      allChkStatus={allChkStatus}
                      cont1Res={cont1Res}
                      setAllChkStatus={setAllChkStatus}
                    />
                  )}
                </div>
              </article>
            </article>
            <article
              className={
                curTab === 0
                  ? "right_area sch_benefit rightTab1"
                  : "right_area sch_benefit rightTab2"
              }
              style={
                curTab === 0 && expand
                  ? { minHeight: 1875 }
                  : curTab === 1
                  ? { minHeight: 595 }
                  : { minHeight: 1362 }
              }
              //
            >
              <div className="sticky_con">
                <div>
                  <div className="search_results">
                    <h3 className="hide">검색 결과 및 검색하기</h3>
                    <div className="res">
                      <input className="hidden" />
                      <div className="count">
                        <p>
                          <i className="num">{totalCount}</i>
                          개
                          <br />
                          카드 상품을 찾았습니다.
                        </p>
                      </div>
                      <div className="card_view">
                        {cardType.length > 0 || eventType.length > 0 ? (
                          <div
                            className="bt on"
                            onClick={navigateToSearchWithList}
                          >
                            <i>검색된 카드 보기</i>
                          </div>
                        ) : (
                          <div className="bt">
                            <i>검색된 카드 보기</i>

                            <p
                              data-v-5c0601dc=""
                              data-v-734f3b6c=""
                              className="ex"
                            >
                              <i data-v-5c0601dc="" data-v-734f3b6c="">
                                필수 사항
                              </i>{" "}
                              선택 후 검색이 가능합니다.
                            </p>
                          </div>
                        )}
                      </div>
                      <a className="reset" onClick={reFilter}>
                        <i>검색 초기화 하기</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
                        <div data-v-0a0e3ee1="">
                          <img
                            data-v-0a0e3ee1=""
                            src="https://api.card-gorilla.com:8080/storage/display/4265/pc_img/29608/zgm.%EA%B3%A0%ED%96%A5%EC%9C%BC%EB%A1%9C_bottom_pc_900x300.jpg"
                            style={{ width: "auto", height: "300px" }}
                            alt=""
                          />
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
  );
};
export default Cont1;
