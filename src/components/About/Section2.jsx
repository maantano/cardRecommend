import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./Section2.css";
import Check2 from "./Check2";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { asyncUpFetch } from "./Section1";

export const asyncBankUpFetch = createAsyncThunk(
  "eventReducer/asyncBankUpFetch",
  async ({ checkedBankList, eventType, refresh }) => {
    try {
      const response = await Axios.post(`/api/bankCount`, {
        checkedBankList,
        eventType,
        refresh,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      console.log("asyncUpFetch ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

const CardList = [
  { name: "전체", id: "All" },
  { name: "신한카드", id: "shinhancard" },
  { name: "삼성카드", id: "samsungcard" },
  { name: "KB카드", id: "kbcard" },
  { name: "롯데카드", id: "lottecard" },
  { name: "하나카드", id: "hanacard" },
  { name: "우리카드", id: "wooricard" },
  { name: "NH농협카드", id: "nhcard" },
  { name: "현대카드", id: "hyundaicard" },
  { name: "BC 바로카드", id: "bccard" },
  { name: "IBK카드", id: "ibk" },
];

const Section2 = ({ allChkStatus }) => {
  const dispatch = useDispatch();
  const [eventType, setEventType] = useState("");
  const [checkedBankList, setCheckedBankList] = useState([]);
  const prevCheckedList = usePrevious(checkedBankList);

  const onCheckedBank = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedBankList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedBankList(checkedBankList.filter((el) => el !== item));
      }
    },
    [checkedBankList]
  );

  useEffect(() => {
    if (prevCheckedList !== checkedBankList) {
      dispatch(
        asyncBankUpFetch({
          checkedBankList,
          eventType,
          refresh: false,
          cur: true,
        })
      );
      dispatch(asyncUpFetch({ refresh: "false1", cur: false }));
    }
  }, [checkedBankList, prevCheckedList]);

  const chkOnly = (e) => {
    const type = e.target.id;
    setEventType(type);
    dispatch(
      asyncBankUpFetch({
        checkedBankList,
        eventType: type,
        refresh: false,
      })
    );

    let chkItem = document.getElementsByName("useType");
    Array.prototype.forEach.call(chkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
  };
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useMemo(() => {
    setCheckedBankList([]);
    setEventType([]);
  }, [allChkStatus]);

  return (
    <div>
      <div data-v-2c2d8c87="" data-v-734f3b6c="" className="part benefit">
        <p data-v-2c2d8c87="" data-v-734f3b6c="" className="txt2">
          <span data-v-2c2d8c87="" data-v-734f3b6c="">
            카드사별 이벤트 카드를 검색해보세요. 🙂
          </span>
        </p>
        <p data-v-2c2d8c87="" data-v-734f3b6c="" className="txt">
          이벤트 혜택을 선택하세요.
          <i data-v-2c2d8c87="" data-v-734f3b6c="">
            필수
          </i>
        </p>
        <ul data-v-2c2d8c87="" data-v-734f3b6c="" className="btnGroup">
          <li data-v-2c2d8c87="" data-v-734f3b6c="">
            <input
              type="checkbox"
              id="cashBack"
              name="useType"
              value="cashBack"
              onChange={(e) => chkOnly(e)}
              checked={eventType === "cashBack" ? true : false}
              style={{ display: "none" }}
            />
            <label htmlFor="cashBack">
              <a
                data-v-2c2d8c87=""
                data-v-734f3b6c=""
                className={
                  eventType === "cashBack"
                    ? "btn btn_lineBlue s4_01 on"
                    : "btn btn_lineBlue s4_01"
                }
              >
                <i data-v-2c2d8c87="" data-v-734f3b6c="">
                  최대 19.5만원 캐시백
                </i>
              </a>
            </label>
          </li>
          <li data-v-2c2d8c87="" data-v-734f3b6c="">
            <input
              type="checkbox"
              id="pYear"
              name="useType"
              value="pYear"
              onChange={(e) => chkOnly(e)}
              checked={eventType === "pYear" ? true : false}
              style={{ display: "none" }}
            />
            <label htmlFor="pYear">
              <a
                data-v-2c2d8c87=""
                data-v-734f3b6c=""
                //   className="btn btn_lineBlue s4_02"
                className={
                  eventType === "pYear"
                    ? "btn btn_lineBlue s4_02 on"
                    : "btn btn_lineBlue s4_02"
                }
              >
                <i data-v-2c2d8c87="" data-v-734f3b6c="">
                  연회비 최대 100% 지원
                </i>
              </a>
            </label>
          </li>
          <li data-v-2c2d8c87="" data-v-734f3b6c="">
            <input
              type="checkbox"
              id="present"
              name="useType"
              value="present"
              onChange={(e) => chkOnly(e)}
              checked={eventType === "present" ? true : false}
              style={{ display: "none" }}
            />
            <label htmlFor="present">
              <a
                data-v-2c2d8c87=""
                data-v-734f3b6c=""
                className={
                  eventType === "present"
                    ? "btn btn_lineBlue s4_03 on"
                    : "btn btn_lineBlue s4_03"
                }
              >
                <i data-v-2c2d8c87="" data-v-734f3b6c="">
                  경품 증정(상품권, 기프티콘 등)
                </i>
              </a>
            </label>
          </li>
        </ul>
      </div>
      <div data-v-2c2d8c87="" data-v-734f3b6c="" className="part last">
        <p data-v-2c2d8c87="" data-v-734f3b6c="" className="txt">
          카드사를 선택하세요.
        </p>
        <ul data-v-2c2d8c87="" className="company_box" data-v-734f3b6c="">
          {CardList.map((item) => {
            return (
              <Check2
                res={item}
                key={item.id}
                allChkStatus={allChkStatus}
                // name={item.name}
                onCheckedBank={onCheckedBank}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Section2;
