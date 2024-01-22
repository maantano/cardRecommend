import React, { useState } from "react";
import "./SelectboxCard.css";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 136px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin-right: 10px;
  margin-top: 25px;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #4975c1;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul`
  min-width: 136px;
  margin-right: 10px;
  list-style: none;
  top: 18px;
  left: 0;
  margin-top: 15px;
  height: 200px;
  overflow: scroll;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #3e3e3e;
  z-index: 999;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: #346df3;
    font-weight: 800;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const SelectboxCard = ({
  setMainChk,
  setSelectCard,
  currentValue,
  setCurrentValue,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
    setShowOptions((prev) => !prev);
    setSelectCard(innerText);
  };
  return (
    <>
      <SelectContainer>
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
          <Label>{currentValue}</Label>
        </SelectBox>
        <SelectOptions show={showOptions}>
          {optionData.map((data) => (
            <Option
              key={data.value}
              value={data.value}
              onClick={handleOnChangeSelectValue}
            >
              {data.value}
            </Option>
          ))}
        </SelectOptions>
      </SelectContainer>
    </>
  );
};

export default SelectboxCard;
