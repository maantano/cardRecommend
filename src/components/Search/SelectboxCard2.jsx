import React, { useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 120px;
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
  min-width: 100px;
  list-style: none;
  top: 18px;
  left: 0;
  margin-top: 15px;
  height: 95px;
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
    /* background-color: #595959; */
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
    value: "인기순",
    key: "pop",
  },
  {
    value: "전월실적순",
    key: "post",
  },
  {
    value: "연회비순",
    key: "pyear",
  },
];

const SelectboxCard2 = () => {
  const [currentValue, setCurrentValue] = useState(optionData[0].value);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
    setShowOptions((prev) => !prev);
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

export default SelectboxCard2;
