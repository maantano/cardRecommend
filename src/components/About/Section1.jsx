import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Check from "./\bCheck";
import "./Cont1.css";
import Axios from "axios";
import { connect, useDispatch } from "react-redux";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { asyncBankUpFetch } from "./Section2";

export const asyncUpFetch = createAsyncThunk(
  "filter/asyncUpFetch",
  async ({ checkedList, cardType, refresh }) => {
    try {
      const response = await Axios.post(`/api/categoryCount`, {
        checkedList,
        cardType,
        refresh,
      });
      return response.data;
    } catch (e) {
      console.log("asyncUpFetch ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

const Section1 = ({ setExpand, allChkStatus, setAllChkStatus, getcardAll }) => {
  const [res, setRes] = useState([]);
  const dispatch = useDispatch();
  const [checkedList, setCheckedList] = useState([]);
  const prevCheckedList = usePrevious(checkedList);
  const [cardType, setCardType] = useState("");
  const [expandCon, setExpandCon] = useState(false);

  const getcardBenefit = async () => {
    try {
      await Axios.get(`/api/cardBenefit`).then((response) => {
        setRes(response.data);
      });
    } catch (e) {
      console.log("getcardBenefit ERROR 데이터를 받아올 수 없습니다.");
    }
  };

  useEffect(() => {
    getcardAll();
    getcardBenefit();
  }, []);

  const handleExpand = () => {
    setExpandCon(() => !expandCon);
  };
  const setExpandChild = () => {
    setExpand(!expandCon);
  };
  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );

  useEffect(() => {
    if (prevCheckedList !== checkedList) {
      dispatch(
        asyncUpFetch({ checkedList, cardType, refresh: "false1", cur: true })
      );
      dispatch(asyncBankUpFetch({ refresh: "false2", cur: false }));
    }
  }, [checkedList, prevCheckedList]);

  const checkOnlyOne = (e) => {
    const type = e.target.id;
    setCardType(type);
    dispatch(asyncUpFetch({ checkedList, cardType: type, refresh: "false2" }));
    let checkItem = document.getElementsByName("useType");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    return e;
  };

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useMemo(() => {
    setCheckedList([]);
    setCardType([]);
  }, [allChkStatus]);

  return (
    <>
      <div className="part">
        <div className="part_left" style={{ display: "block" }}>
          <p className="txt">
            카드 종류 선택 <i>필수</i>
          </p>
          <ul className="btnGroup">
            <li>
              <input
                type="checkbox"
                id="credit"
                name="useType"
                value="credit"
                onChange={(e) => checkOnlyOne(e)}
                checked={cardType === "credit"}
                style={{ display: "none" }}
              />
              <label htmlFor="credit">
                {/* <label htmlFor="credit" onClick={creditCount}> */}
                <a
                  className={
                    cardType === "credit"
                      ? `btn btnLineBlue on`
                      : "btn btnLineBlue"
                  }
                >
                  <i>신용카드</i>
                </a>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="debit"
                name="useType"
                value="debit"
                onChange={(e) => checkOnlyOne(e)}
                checked={cardType === "debit"}
                style={{ display: "none" }}
              />
              <label htmlFor="debit">
                <a
                  className={
                    cardType === "debit"
                      ? `btn btnLineBlue on`
                      : "btn btnLineBlue"
                  }
                >
                  <i>체크카드</i>
                </a>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <section className={expandCon ? "" : "hiddenSection"}>
        <div className="part last benefit">
          <p className="txt">카드 혜택 선택</p>
          {res.map((item) => {
            return (
              <Check
                key={item.id}
                setAllChkStatus={setAllChkStatus}
                allChkStatus={allChkStatus}
                res={item}
                onCheckedItem={onCheckedItem}
              />
            );
          })}
        </div>
      </section>
      <a
        data-v-2f748e5a=""
        data-v-lstmore=""
        className="cont1LstMore"
        style={expandCon ? { display: "none" } : { display: "block" }}
        onClick={() => {
          handleExpand();
          setExpandChild();
        }}
      >
        콘텐츠 더보기
      </a>
      <div className="frameby">
        <div className="card_ani slidein1">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27173/tips_slide1.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein2">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27174/tips_slide2.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein3">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27175/tips_slide3.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein4">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27176/tips_slide4.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein5">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27177/tips_slide5.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Section1);
