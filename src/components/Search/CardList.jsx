import React, { useState } from "react";
import "./CardList.css";
import CardTab from "./CardTab";

const CardList = ({ searchList }) => {
  const [countExpand, setCountExpand] = useState(3);
  const showMoreItems = () => {
    setCountExpand((prevVisibleItems) => prevVisibleItems + 2);
  };
  return (
    <article className="resultsLst">
      <section className="summarySection">
        <b>{searchList.length}</b>
        개의{` `}
        검색 결과
      </section>

      <CardTab
        cardTabList={searchList}
        initialVisibleItems={1}
        countExpand={countExpand}
      />
    </article>
  );
};

export default CardList;
