import React, { useState } from "react";
import "./Filter.css";
import { useLocation } from "react-router-dom";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const minDistance = 20;

const marks = [
  {
    value: 0,
    amount: 0,
    label: "0원",
  },
  {
    value: 20,
    amount: 10000,
    label: "1만원",
  },
  {
    value: 40,
    amount: 30000,
    label: "3만원",
  },
  {
    value: 60,
    amount: 50000,
    label: "5만원",
  },
  {
    value: 80,
    amount: 100000,
    label: "10만원",
  },
  {
    value: 100,
    amount: 1000000,
    label: "10만원 +",
  },
];
const valuetext = (value) => {
  return `${value}'만원'`;
};

const Filter = styled(Slider)(({ theme }) => ({
  //   color: "#3b6bf2",
  color: "#bfbfbf",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 5,
    color: "#5b91f0",
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 5,
  },
}));

const FirstFilter = ({
  setMainChk,
  setAmount,
  searchAync,
  value1,
  setValue1,
  cardCorp,
}) => {
  const location = useLocation();
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      const amount0 = marks.find(
        (mark) => mark.value === Math.min(newValue[0], value1[1] - minDistance)
      )?.amount;
      const amount1 = marks.find((mark) => mark.value === value1[1])?.amount;

      setAmount([amount0, amount1]);
      setMainChk(true);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      const amount0 = marks.find((mark) => mark.value === value1[0])?.amount;
      const amount1 = marks.find(
        (mark) => mark.value === Math.max(newValue[1], value1[0] + minDistance)
      )?.amount;
      setAmount([amount0, amount1]);
      setMainChk(true);
    }
  };

  return (
    <>
      <section
        className="filterContainer"
        style={{ width: "28%", marginTop: 10 }}
      >
        <span className="filterTtitle">연회비</span>
        <div className="firstF">
          <Filter
            value={value1}
            onChange={handleChange1}
            slots={
              {
                //   thumb: FirstThumbComponent,
              }
            }
            defaultValue={[20, 40]}
            step={20}
            getAriaValueText={valuetext}
            marks={marks}
            disableSwap
          />
        </div>
      </section>
    </>
  );
};

export default FirstFilter;
