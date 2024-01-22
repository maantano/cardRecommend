import React, { useState } from "react";
import "./Filter.css";

import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const minDistance = 33;

const marks = [
  {
    value: 0,
    prevRec: 0,
    label: "0원",
  },
  {
    value: 33,
    prevRec: 300000,
    label: "30만원",
  },
  {
    value: 66,
    prevRec: 500000,
    label: "50만원",
  },
  {
    value: 100,
    prevRec: 1000000,
    label: "50만원 +",
  },
];
const valuetext = (label) => {
  return `${label}`;
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
    // border: "1px solid currentColor",
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

const SecondFilter = ({ setMainChk, setPrevRec, value2, setValue2 }) => {
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
      const prevRec0 = marks.find(
        (mark) => mark.value === Math.min(newValue[0], value2[1] - minDistance)
      )?.prevRec;
      const prevRec1 = marks.find((mark) => mark.value === value2[1])?.prevRec;
      setPrevRec([prevRec0, prevRec1]);
    } else {
      if (Math.max(newValue[1], value2[0] + minDistance) >= 90) {
        setValue2([value2[0], 100]);
      } else {
        setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
      }
      const prevRec0 = marks.find((mark) => mark.value === value2[0])?.prevRec;
      const maxComputedValue = Math.max(newValue[1], value2[0] + minDistance);
      const computedMarkValue = maxComputedValue >= 90 ? 100 : maxComputedValue;
      const prevRec1 = marks.find(
        (mark) => mark.value === computedMarkValue
      )?.prevRec;
      setPrevRec([prevRec0, prevRec1]);
    }
  };

  return (
    <>
      <section
        className="filterContainer"
        style={{ width: "20%", marginTop: 10 }}
      >
        <span className="filterTtitle">전월실적</span>
        <div className="firstF">
          <Filter
            value={value2}
            onChange={handleChange1}
            slots={
              {
                //   thumb: FirstThumbComponent,
              }
            }
            defaultValue={[0, 33]}
            step={33}
            getAriaValueText={valuetext}
            marks={marks}
            disableSwap
          />
        </div>
      </section>
    </>
  );
};

export default SecondFilter;
