import React, { useEffect, useState } from "react";
import "./Summary3.css";
import "./Summary.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import { createAsyncThunk } from "@reduxjs/toolkit";
import store from "../../redux/store";
import useSlideCarousel from "./UseSlideCarousel";

interface Props {
  targetRows: [string, RowData[]][];
  top3Codes: (string | number)[][];
  uploadedFile: File | null;
  handleDrop: (acceptedFiles: FileList | null) => Promise<void>;
}

interface RowData {
  이용일시: number;
  가맹점명: string;
  이용금액: number;
  업태코드: string;
}
interface Top3BenefitResult {
  [key: number]: { id: string; name: string }[]; // 배열 안에 id와 name을 가진 객체
}
interface AsyncUpFetchXlsxProps {
  checkedList: string[];
  cardType: string;
}
interface DividedData {
  annualFee: number;
  benefit: string;
  benefitC1: string;
  benefitC2: string;
  benefitC3: string;
  benefitKor: string;
  benefitT1: string;
  benefitT2: string;
  benefitT3: string;
  cardCo: string;
  cardCoKor: string;
  cardImg: string;
  cardName: string;
  cardType: string;
  eventTitle: string;
  eventType: string;
  eventYN: string;
  globalMerchant: string;
  id: string;
  issueType: string;
  nationalType: string;
  prevRecord: number;
  previousPer: string;
  urlLink: string;
}
type DividedResult = {
  [benefitId: number]: DividedData[];
};

export const asyncUpFetchXlsx = createAsyncThunk(
  "xlsxTop3/asyncUpFetchXlsx",
  async ({ checkedList, cardType }: AsyncUpFetchXlsxProps) => {
    try {
      const response = await Axios.post("/api/summary3", {
        checkedList,
        cardType,
      });
      return response.data;
    } catch (e) {
      console.log("asyncUpFetchXlsx ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);
type AppDispatch = typeof store.dispatch;

const Summary3: React.FC<Props> = ({
  targetRows,
  top3Codes,
  uploadedFile,
  handleDrop,
}) => {
  const [isActive, setIsActive] = useState(false);

  const [summaryBenefitResult, setSummaryBenefitResult] = useState({});
  const [top3BenefitResult, setTop3BenefitResult] = useState<Top3BenefitResult>(
    {}
  );
  const [top3BenefitId, setTop3BenefitId] = useState<string[]>([]);
  const [dividedDataObj, setDividedDataObj] = useState<DividedResult>({});
  const [dividedDataObj2, setDividedDataObj2] = useState<any>({});

  const filterList = useSelector((state: any) => state.xlsxTop3Reducer.list); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const navigateToSearchWithList = async (checkedList: string[]) => {
    try {
      const action = asyncUpFetchXlsx({
        checkedList,
        cardType: "credit",
      });

      const response = await dispatch(action);
      navigate("/search", {
        state: { list: response.payload, top3BenefitResult },
      });
    } catch (error) {
      console.error("navigateToSearchWithList Error:", error);
    }
  };

  async function summaryBenefit() {
    try {
      const response = await Axios.post("/api/summaryBenefit", {
        top3Codes,
      });
      setSummaryBenefitResult(response.data);
      return response.data;
    } catch (error: any) {
      // 에러 처리
      console.error("API Error:", error.message);
      throw error;
    }
  }

  async function top3Benefit() {
    try {
      const response = await Axios.post("/api/top3Benefit", {
        top3Benefit: summaryBenefitResult,
      });
      setTop3BenefitResult(response.data);
    } catch (err: any) {
      console.error("API Error:", err.message);
      throw err;
    }
  }

  useEffect(() => {
    summaryBenefit();
  }, [top3Codes]);

  useEffect(() => {}, [filterList]);

  useEffect(() => {
    if (Object.keys(summaryBenefitResult).length > 0) {
      top3Benefit();
    }
  }, [summaryBenefitResult]);

  useEffect(() => {
    const idArray = Object.values(top3BenefitResult).map(
      (array) => array[0].id
    );

    setTop3BenefitId(idArray);
  }, [top3BenefitResult]);

  useEffect(() => {
    top3Card();
  }, [top3BenefitId]);

  const navigateToDetail = (obj: any) => {
    navigate(`/detail/${obj.id}`, {
      state: { list: obj },
    });
  };

  async function top3Card() {
    try {
      const response = await Axios.post("/api/top3Card2", {
        top3BenefitId,
      });
      const newDividedDataObj: Record<number, DividedData[]> = {};
      const keys = Object.keys(response.data);
      keys.forEach((key, idx) => {
        newDividedDataObj[idx] = response.data[key];
      });

      setDividedDataObj(newDividedDataObj);
      setDividedDataObj2(newDividedDataObj);
      setIsActive(true);
    } catch (err: any) {
      console.error("API Error:", err.message);
      throw err;
    }
  }

  useEffect(() => {
    const imgElements = document.querySelectorAll(".cardBox img");

    imgElements.forEach((imgElement) => {
      const element = imgElement as HTMLImageElement;
      if (element.height < element.width) {
        element.classList.add("cardRotate");
      } else {
        element.classList.remove("cardRotate");
        element.classList.add("cardImg");
      }
    });
  }, [dividedDataObj2]);

  const targetText = "Upload to your ";
  const [currentText, setCurrentText] = useState("");
  const [currentText2, setCurrentText2] = useState("");
  const [currentTextDone, setCurrentTextDone] = useState(false);
  const targetText2 = "life";
  const targetText3 = "file";

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
        let charIndex2 = 0;
        const interval2 = setInterval(() => {
          setCurrentText2((prevText) =>
            prevText.length === targetText2.length
              ? targetText2
              : prevText + targetText2[charIndex2++]
          );
          if (
            charIndex2 + charIndex ===
            targetText.length + targetText2.length
          ) {
            clearInterval(interval2);
            let charIndex3 = targetText2.length;
            const interval3 = setInterval(() => {
              setCurrentText2((prevText) =>
                prevText.length === 0
                  ? targetText
                  : prevText.slice(0, charIndex3--)
              );
              if (currentText2.length === charIndex3) {
                clearInterval(interval3);
                let charIndex4 = 0;
                const interval4 = setInterval(() => {
                  setCurrentText2((prevText) =>
                    prevText.length === targetText3.length
                      ? targetText3
                      : prevText + targetText3[charIndex4++]
                  );
                  if (
                    charIndex4 + charIndex ===
                    targetText.length + targetText3.length
                  ) {
                    clearInterval(interval4);
                    setCurrentTextDone(true);
                  }
                }, 250);
              }
            }, 250);
          }
        }, 80);
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="unLoadDiv">
      {!dividedDataObj2[0] ? (
        <section style={{ maxHeight: "800px" }}>
          <div>
            <div>
              <p
                style={{
                  fontSize: "150px",
                }}
              >
                <span>{currentText}</span>
                <span>{currentText2}</span>
                <span className="cursor"></span>
              </p>
              <div className="xlsxBox">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <label
                    className={currentTextDone ? "done" : "yet"}
                    htmlFor="ex_file"
                  >
                    당신의 소비파일을 업로드하세요.
                  </label>

                  <input
                    id="ex_file"
                    type="file"
                    accept=".xlsx, .xls, .csv"
                    onChange={(e) => {
                      const csvXlsx = e.target.files;
                      handleDrop(csvXlsx);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className={`uploadDone ${isActive ? "active" : ""}`}>
          <section className="css-1lt5n6v epr1p7v4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{ color: "rgba(255, 255, 255, 1)" }}
                className="typography typography--h1 typography--bold color--grey800 css-198v63s epr1p7v3"
              >
                나의 소비 패턴,
                <br />
                가장 많이 사용한 분야는?
              </h2>
            </div>
            <div className="css-1afhdxq epr1p7v2">
              <div
                className="css-w5meeo ezoj9bn5"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition:
                    "transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s",
                }}
                tabIndex={0}
              >
                <div className="ezoj9bn4 css-x5naun">
                  <div className="css-14udc3u">
                    <span
                      style={{ color: "#6b7684" }}
                      className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx ezoj9bn2"
                    >
                      가장 많이 소비한 분야
                    </span>
                    <span
                      style={{ color: "#191f28" }}
                      className="typography typography--h1 typography--bold color--grey800 css-1bqusb8 ezoj9bn1"
                    >
                      {top3Codes.length > 0 ? top3Codes[0][0] : null}
                    </span>
                  </div>
                  <div className="ezoj9bn3 css-lut0jk">
                    <div className="css-14udc3u">
                      <span
                        style={{ color: "#6b7684", width: 200 }}
                        className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx ezoj9bn2"
                      >
                        이 분야 소비 총 액
                      </span>
                      <span
                        style={{ color: "#191f28" }}
                        className="typography typography--h1 typography--bold color--grey800 css-1bqusb8 ezoj9bn1"
                      >
                        {top3Codes.length > 0
                          ? top3Codes[0][1].toLocaleString() + "원"
                          : null}
                      </span>
                    </div>
                    <div className="css-14udc3u">
                      <span
                        style={{ color: "#25292e" }}
                        className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx ezoj9bn2"
                      >
                        주요 소비 카드 혜택
                      </span>
                      <span
                        style={{ color: "#191f28" }}
                        className="typography typography--h1 typography--bold color--grey800 css-1bqusb8 ezoj9bn1"
                      >
                        {top3BenefitResult[1]?.[0]?.name}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="css-pf5ku8 ezoj9bn0"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    alt=""
                    draggable="false"
                    src="https://static.toss.im/3d/number-1-apng.png"
                  />
                  <button
                    className="p-button p-button--default p-button--inline p-button--weak p-button--default padding--base"
                    type="button"
                    aria-disabled="false"
                    onClick={() =>
                      navigateToSearchWithList([
                        top3BenefitResult[1]?.[0]?.name,
                      ])
                    }
                  >
                    {top3Codes.length > 0 ? top3Codes[0][0] : null} 혜택 카드
                    보기
                  </button>
                </div>
              </div>
              <div className="epr1p7v1 css-1qfdmnf">
                <div
                  className="css-3mmxg9 e11rv6e36"
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition:
                      "transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s",
                  }}
                  tabIndex={0}
                >
                  <div className="css-14udc3u">
                    <span
                      style={{ color: "rgba(253, 253, 255, 0.75)" }}
                      className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx ezoj9bn2"
                    >
                      두번째 소비 분야
                    </span>
                    <span
                      style={{ color: "rgba(255, 255, 255, 1)" }}
                      className="typography typography--h3 typography--bold color--grey800 css-1btoyi3 e11rv6e35"
                    >
                      {top3Codes.length > 0 ? top3Codes[1][0] : null}
                    </span>
                  </div>
                  <div
                    className="e11rv6e32 css-6bcktx"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div className="e11rv6e31 css-bty1ty">
                      <div className="css-fw3uk4">
                        <span
                          style={{ color: "rgba(253, 253, 255, 0.75)" }}
                          className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx e11rv6e34"
                        >
                          이 분야 소비 총 액
                        </span>
                        <span
                          style={{ color: "rgba(255, 255, 255, 1)" }}
                          className="typography typography--h3 typography--bold color--grey800 css-1btoyi3 e11rv6e33"
                        >
                          {top3Codes.length > 0
                            ? top3Codes[1][1].toLocaleString() + "원"
                            : null}
                        </span>
                      </div>
                      <div className="css-fw3uk4">
                        <span
                          style={{ color: "rgba(253, 253, 255, 0.75)" }}
                          className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx e11rv6e34"
                        >
                          주요 소비 카드 카테고리
                        </span>
                        <span
                          style={{
                            color: "rgba(255, 255, 255, 1)",
                            width: 200,
                          }}
                          className="typography typography--h3 typography--bold color--grey800 css-1btoyi3 e11rv6e33"
                        >
                          {top3BenefitResult && top3BenefitResult[2]
                            ? top3BenefitResult[2]?.[0]?.name
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div
                      className="css-30eexy e11rv6e30 secondBtn"
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        alt=""
                        draggable="false"
                        // style={{ width: 300 }}
                        src="https://static.toss.im/3d/number-2-apng.png"
                      />
                      <button
                        className="p-button p-button--default p-button--inline p-button--weak p-button--default padding--base buttonHover"
                        type="button"
                        aria-disabled="false"
                        onClick={() =>
                          navigateToSearchWithList([
                            top3BenefitResult[2]?.[0]?.name,
                          ])
                        }
                      >
                        {top3Codes.length > 0 ? top3Codes[1][0] : null} 혜택
                        카드 보기
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="css-17mdg8v ez88fst6 "
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition:
                      "transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s",
                  }}
                  tabIndex={0}
                >
                  <div className="css-14udc3u">
                    <span
                      style={{ color: "rgba(253, 253, 255, 0.75)" }}
                      className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx ezoj9bn2"
                    >
                      세번째 소비 분야
                    </span>
                    <span
                      style={{ color: "rgba(255, 255, 255, 1)" }}
                      className="typography typography--h3 typography--bold color--grey800 css-1btoyi3 e11rv6e35"
                    >
                      {top3Codes.length > 0 ? top3Codes[2][0] : null}
                    </span>
                  </div>
                  <div
                    className="e11rv6e32 css-6bcktx"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div className="e11rv6e31 css-bty1ty">
                      <div className="css-fw3uk4">
                        <span
                          style={{ color: "rgba(253, 253, 255, 0.75)" }}
                          className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx e11rv6e34"
                        >
                          이 분야 소비 총 액
                        </span>
                        <span
                          style={{ color: "rgba(255, 255, 255, 1)" }}
                          className="typography typography--h3 typography--bold color--grey800 css-1btoyi3 e11rv6e33"
                        >
                          {top3Codes.length > 0
                            ? top3Codes[2][1].toLocaleString() + "원"
                            : null}
                        </span>
                      </div>
                      <div className="css-fw3uk4">
                        <span
                          style={{ color: "rgba(253, 253, 255, 0.75)" }}
                          className="typography typography--h6 typography--semibold color--grey700 css-vuyjgx e11rv6e34"
                        >
                          주요 소비 카드 혜택
                        </span>
                        <span
                          style={{
                            color: "rgba(255, 255, 255, 1)",
                            width: 200,
                          }}
                          className="typography typography--h3 typography--bold color--grey800 css-1btoyi3 e11rv6e33"
                        >
                          {/* DB에서 뽑아와야 햅,카테고리 보여주고 1,2,3 마다 버튼
                    만들어서 카드 추천으로 넘겨주도록 */}
                          {top3BenefitResult && top3BenefitResult[2]
                            ? // ? top3BenefitResult[3].join(", ")
                              top3BenefitResult[3]?.[0]?.name
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div
                      className="css-30eexy e11rv6e30 thirdBtn"
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        alt=""
                        draggable="false"
                        // style={{ width: 300 }}
                        src="https://static.toss.im/3d/number-3-apng.png"
                      />
                      <button
                        className="p-button p-button--default p-button--inline p-button--weak p-button--default padding--base buttonHover"
                        type="button"
                        aria-disabled="false"
                        onClick={() =>
                          navigateToSearchWithList([
                            top3BenefitResult[3]?.[0]?.name,
                          ])
                        }
                      >
                        {top3Codes.length > 0 ? top3Codes[2][0] : null} 혜택
                        카드 보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Summary4 targetRows={targetRows} /> */}
            </div>
          </section>
          <section
            className="custom-section"
            style={{ width: "100%", backgroundColor: "#000" }}
          >
            <section className="inner-container">
              {dividedDataObj2[0] ? (
                <div className="card-box rankOne cardHover">
                  <div
                    className="cardCol"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="tagDiv" style={{ marginBottom: 20 }}>
                      <p
                        className="tag"
                        style={{
                          backgroundColor: "#393939",
                          color: "#ede5ff}",
                        }}
                      >
                        첫번째 카드 추천
                      </p>
                    </div>
                    <div className="cardBox">
                      <img
                        alt=""
                        src={dividedDataObj2[0]?.cardImg}
                        // className="cardImg"
                      />
                      <div className="cardRankTitle">
                        <p>첫번째 추천 카드</p>
                      </div>
                      <p className="cardRankName">
                        {dividedDataObj2[0]?.cardName.split("&nbsp;").join(" ")}
                      </p>
                    </div>

                    <button
                      className="p-button p-button--default p-button--inline p-button--weak p-button--default padding--base"
                      type="button"
                      aria-disabled="false"
                      onClick={() => navigateToDetail(dividedDataObj2[0])}
                    >
                      카드 보기
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card-box rankOne cardHover">
                  <div
                    className="cardCol"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="tagDiv" style={{ marginBottom: 20 }}>
                      <p
                        className="tag"
                        style={{
                          backgroundColor: "#393939",
                          color: "#ede5ff}",
                        }}
                      >
                        첫번째 카드 추천
                      </p>
                    </div>
                    <div className="cardBox">
                      <div className="cardRankTitle">
                        <p>첫번째 추천 카드</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {dividedDataObj2[1] ? (
                <div className="card-box rankTwo cardHover">
                  <div
                    className="cardCol"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="tagDiv" style={{ marginBottom: 20 }}>
                      <p
                        className="tag"
                        style={{
                          backgroundColor: "#393939",
                          color: "#ede5ff}",
                        }}
                      >
                        두번째 카드 추천
                      </p>
                    </div>
                    <div className="cardBox">
                      <img
                        alt=""
                        src={dividedDataObj2[1]?.cardImg}
                        className="cardImg"
                      />
                      <div className="cardRankTitle">
                        <p>두번째 추천 카드</p>
                      </div>

                      <p className="cardRankName">
                        {dividedDataObj2[1]?.cardName.split("&nbsp;").join(" ")}
                      </p>
                    </div>

                    <button
                      className="p-button p-button--default p-button--inline p-button--weak p-button--default padding--base"
                      type="button"
                      aria-disabled="false"
                      onClick={() => navigateToDetail(dividedDataObj2[1])}
                    >
                      카드 보기
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card-box rankOne cardHover">
                  <div
                    className="cardCol"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="tagDiv" style={{ marginBottom: 20 }}>
                      <p
                        className="tag"
                        style={{
                          backgroundColor: "#393939",
                          color: "#ede5ff}",
                        }}
                      >
                        두번째 추천 카드
                      </p>
                    </div>
                    <div className="cardBox">
                      <div className="cardRankTitle">
                        <p>두번째 추천 카드</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {dividedDataObj2[2] ? (
                <div className="card-box rankThree cardHover">
                  <div
                    className="cardCol"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="tagDiv" style={{ marginBottom: 20 }}>
                      <p
                        className="tag"
                        style={{
                          backgroundColor: "#393939",
                          color: "#ede5ff}",
                        }}
                      >
                        세번째 카드 추천
                      </p>
                    </div>
                    <div className="cardBox">
                      <img
                        alt=""
                        src={dividedDataObj2[2]?.cardImg}
                        // className="cardImg"
                      />
                      <div className="cardRankTitle">
                        <p>세번째 추천 카드</p>
                      </div>

                      <p className="cardRankName">
                        {dividedDataObj2[2]?.cardName.split("&nbsp;").join(" ")}
                      </p>
                    </div>

                    <button
                      className="p-button p-button--default p-button--inline p-button--weak p-button--default padding--base"
                      type="button"
                      aria-disabled="false"
                      onClick={() => navigateToDetail(dividedDataObj2[2])}
                    >
                      카드 보기
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card-box rankOne cardHover">
                  <div
                    className="cardCol"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="tagDiv" style={{ marginBottom: 20 }}>
                      <p
                        className="tag"
                        style={{
                          backgroundColor: "#393939",
                          color: "#ede5ff}",
                        }}
                      >
                        세번째 추천 카드
                      </p>
                    </div>
                    <div className="cardBox">
                      <div className="cardRankTitle">
                        <p>세번째 추천 카드</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Summary3);
