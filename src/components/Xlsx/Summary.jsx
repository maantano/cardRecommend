import React, { useEffect, useState } from "react";
import "./Summary.css";

const Summary = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);

    if (scrollPosition >= 500) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateFirstTextStyles = () => {
    const opacity = Math.max(0, 1 - scrollY / 500);
    const fontSize = Math.max(0, 120 - scrollY / 20);

    return {
      opacity,
      fontSize: `${fontSize}px`,
    };
  };

  const calculateSecondTextStyles = () => {
    const fontSize = Math.max(0, 65 - scrollY / 20);
    const opacity = Math.max(0, 1 - scrollY / 500);

    return {
      opacity,
      fontSize: `${fontSize}px`,
    };
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    overflow: scrolling ? "hidden" : "auto", // Apply overflow styles based on scrolling state
  };

  return (
    <div className="container" style={containerStyles}>
      <div style={{ flex: "0 0 auto", height: "8px" }}></div>
      <span
        className={`typography typography--h1 typography--bold color--grey800 css-1azakc ${
          scrolling ? "scrolling" : ""
        }`}
        style={{
          color: "black",
          textAlign: "center",
          ...calculateFirstTextStyles(),
        }}
      >
        소비 패턴을 확인해 보세요
      </span>
      <div style={{ flex: "0 0 auto", height: "8px" }}></div>
      <span
        className="typography typography--h5 typography--medium color--grey700 css-1azakc"
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          ...calculateSecondTextStyles(),
        }}
      >
        소비 패턴 확인하고 카드까지 추천 받기
      </span>
    </div>
  );
};

export default Summary;
