import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardTab = ({ cardTabList, countExpand }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const navigateToDetail = (obj) => {
    console.log("obj ===>", obj);
    navigate(`/detail/${obj.id}`, {
      state: { list: obj },
    });
  };

  useEffect(() => {
    if (cardTabList.length > 0) {
      setIsLoading(false);
    }
  }, [cardTabList]);

  return (
    <div>
      {!isLoading && (
        <ul className="lst" style={{ height: "auto" }}>
          {" "}
          {cardTabList.map((obj, index) => (
            <li key={obj.id}>
              <div className="cardImgContainer">
                <div className="cardImg">
                  <p className="img">
                    <img
                      src={`${obj.cardImg}`}
                      width="auto"
                      height="auto"
                      alt=""
                    />
                  </p>
                  <a href="" className="compare">
                    비교함 닫기
                  </a>
                </div>
                <div className="cardData">
                  <div className="name">
                    <p className="cardTit">
                      <span className="cardName">
                        {obj.cardName.split("&nbsp;").join(" ")}
                      </span>

                      <span className="cardCorp">{obj.cardCoKor}</span>
                    </p>
                  </div>
                  {obj.eventTitle ? (
                    <p className="newCard">
                      <span>{obj.eventTitle.split("&nbsp;").join(" ")}</span>
                    </p>
                  ) : (
                    ""
                  )}

                  <div
                    className="benefit"
                    onClick={() => navigateToDetail(obj)}
                  >
                    <a className="b_view">자세히 보기</a>
                  </div>
                  <div className="sale">
                    <p>
                      <i className="store">
                        {obj.benefitT1.split("&nbsp;").join(" ")}
                      </i>
                      <span className="num">
                        <b>{obj.benefitC1.split("&nbsp;")[0]}</b>{" "}
                        {obj.benefitC1.split("&nbsp;")[1]}
                      </span>
                    </p>
                    <p>
                      <i className="store">
                        {obj.benefitT2.split("&nbsp;").join(" ")}
                      </i>

                      <span className="num">
                        <b>{obj.benefitC2.split("&nbsp;")[0]}</b>{" "}
                        {obj.benefitC2.split("&nbsp;")[1]}
                      </span>
                    </p>

                    <i className="store">
                      {obj.benefitT3.split("&nbsp;").join(" ")}
                    </i>
                    <span className="num">
                      <b>{obj.benefitC3.split("&nbsp;")[0]}</b>{" "}
                      {obj.benefitC3.split("&nbsp;")[1]}
                    </span>
                  </div>
                  <div className="ex">
                    <p className="in_for">
                      <span>
                        {obj.nationalType.split("&nbsp;")[0]}{" "}
                        <b>{obj.nationalType.split("&nbsp;")[1]}</b>{" "}
                      </span>{" "}
                      {obj.nationalType.split("&nbsp;")[2]}{" "}
                      <span>
                        {" "}
                        {obj.nationalType.split("&nbsp;")[3]}{" "}
                        <b>{obj.nationalType.split("&nbsp;")[4]}</b>
                      </span>
                    </p>
                    <p className="l_mth">
                      {obj.previousPer.split("&nbsp;")[0]}{" "}
                      <b>{obj.previousPer.split("&nbsp;")[1]}</b>
                      {obj.previousPer.split("&nbsp;")[2]}
                    </p>

                    <p className="l_mth">
                      <b>{obj.issueType}</b>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardTab;
