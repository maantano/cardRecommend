import React, { useEffect, useState } from "react";
import FirstFilter from "./FirstFilter";
import SecondFilter from "./SecondFilter";
import "./Search1.css";
import SelectboxCard from "./SelectboxCard";
import styled from "styled-components";
import CardList from "./CardList";
import { useLocation } from "react-router-dom";

import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
const Btn = styled.button`
  margin-top: 27px;
  margin-left: 10px;
  right: 23px;
  bottom: 40px;
  cursor: pointer;
  width: 26px;
  height: 30px;
  font-size: 10;
  text-indent: -9999px;
  color: black;
  -webkit-filter: hue-rotate(28deg) brightness(0.1) contrast(0.1);
  filter: hue-rotate(28deg) brightness(0.1) contrast(0.1);
`;

export const asyncSearchFetch = createAsyncThunk(
  "search/asyncUpFetch",
  async ({
    list,
    amount,
    prevRec,
    selectCard,
    type,
    bankList,
    listCate,
    checkBenefitList,
    top3Benefit,
    cardCorp,
  }) => {
    try {
      const response = await Axios.post(`/api/search/cardList`, {
        amount,
        prevRec,
        selectCard,
        type,
        bankList,
        listCate,
        checkBenefitList,
        list,
        top3Benefit,
        cardCorp,
      });
      return response.data;
    } catch (e) {
      console.log("asyncUpFetch ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

const optionData = [
  {
    value: "카드 선택",
    key: null,
  },
  {
    value: "신한카드",
    key: "sh10",
  },
  {
    value: "국민카드",
    key: "kb01",
  },
  {
    value: "롯데카드",
    key: "lt07",
  },
  {
    value: "현대카드",
    key: "hd05",
  },
  {
    value: "우리카드",
    key: "wr02",
  },
  {
    value: "하나카드",
    key: "hn03",
  },
  {
    value: "농협카드",
    key: "nh04",
  },
  {
    value: "IBK카드",
    key: "ibk08",
  },
  {
    value: "삼성카드",
    key: "sm06",
  },
  {
    value: "BC카드",
    key: "bc09",
  },
];

const Search1 = () => {
  const location = useLocation();
  let list = location.state && location.state.list;
  let type = location.state && location.state.type;
  let cardCorp = location.state && location.state.cardCorp;
  let corporationTarget = location.state && location.state.corporationTarget;
  const [mainChk, setMainChk] = useState(false);

  const [listCate, setListCate] = useState([]);
  const [searchList, setSearchList] = useState(list);
  const [amount, setAmount] = useState([0, 1000000]);
  const [prevRec, setPrevRec] = useState([0, 1000000]);
  // const [selectCard, setSelectCard] = useState("");
  const [value1, setValue1] = useState([0, 20]);
  const [value2, setValue2] = useState([0, 33]);
  const targetObject = optionData.find(
    (item) => item.key === corporationTarget
  );
  const initialCurrentValue = corporationTarget
    ? targetObject.value
    : optionData[0].value;

  const [currentValue, setCurrentValue] = useState(initialCurrentValue);
  const [selectCard, setSelectCard] = useState(initialCurrentValue);
  const bankList = useSelector((state) => state.eventReducerReducer.list); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.
  const top3Benefit = useSelector((state) => state.xlsxTop3Reducer.checkedList); // 리덕스 스토어의 상태에서 필요한 값을 가져옵니다.

  const checkBenefitList = useSelector(
    (state) => state.filterReducer.checkedList
  );
  const dispatch = useDispatch();

  const searchAync = async () => {
    try {
      const searchData = await dispatch(
        asyncSearchFetch({
          amount,
          prevRec,
          selectCard,
          type,
          bankList,
          listCate,
          checkBenefitList,
          top3Benefit,
          cardCorp,
        })
      );
      setSearchList(searchData.payload);
    } catch (error) {
      console.log("Error while fetching search data:", error);
    }
  };

  useEffect(() => {
    if (mainChk) searchAync();
  }, [amount, prevRec, selectCard]);

  useEffect(() => {
    const extractedBenefitKorArray = list.map((card) => ({
      id: card.id, // 여기서 원하는 key 값을 사용할 수 있습니다.
      category: card.benefitKor,
    }));
    const uniqueCategories = [
      ...new Set(
        extractedBenefitKorArray.flatMap((card) => card.category.split(","))
      ),
    ];
    const uniqueListCate = uniqueCategories.map((category, index) => ({
      id: index,
      category,
    }));
    setListCate(uniqueListCate);
  }, []);

  const filterInit = () => {
    setSearchList(list);
    setSelectCard("카드 선택");
    setAmount([0, 1000000]);
    setPrevRec([0, 1000000]);
    setValue1([0, 20]);
    setValue2([0, 33]);
    setCurrentValue(optionData[0].value);
  };
  return (
    <>
      <article style={{ float: "left", width: "840" }}>
        <section className="sectionContainer">
          <FirstFilter
            value1={value1}
            setValue1={setValue1}
            setAmount={setAmount}
            searchAync={searchAync}
            cardCorp={cardCorp}
            setMainChk={setMainChk}
          />
          <SecondFilter
            value2={value2}
            setValue2={setValue2}
            setPrevRec={setPrevRec}
            setMainChk={setMainChk}
          />
          <SelectboxCard
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            setSelectCard={setSelectCard}
            setMainChk={setMainChk}
          />
          {/* <SelectboxCard2 /> */}
          <Btn
            type="button"
            id="anchor-card-result"
            className="btn_reset"
            onClick={() => filterInit()}
            style={{ color: "black" }}
          >
            초기화
          </Btn>
        </section>
        <section className="categorySection">
          {listCate.map((item) => (
            <span className="categoryBox" key={item.id}>
              <i className="bene1d">{item.category}</i>
            </span>
          ))}
        </section>
        <CardList searchList={searchList} />
      </article>
    </>
  );
};

export default Search1;
