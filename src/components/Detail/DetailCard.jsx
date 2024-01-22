import React, { useState } from "react";
import "./DetailCard.css";
import RefContents from "./RefContents";
import Rank from "./Rank";
const DetailCard = ({ detailCard }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  // console.log(detailCard);
  const handleToggle = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <section className="detail_con" style={{ height: "auto" }}>
      <article data-v-2f748e5a="" data-v-35734774="" className="card_top">
        <div data-v-2f748e5a="" data-v-35734774="" className="inner">
          <div data-v-2f748e5a="" data-v-35734774="" className="in_box">
            <h3 data-v-2f748e5a="" data-v-35734774="" className="hide">
              카드 정보
            </h3>
            <span
              data-v-2f748e5a=""
              data-v-35734774=""
              className="share"
            ></span>
            <div data-v-2f748e5a="" data-v-35734774="" className="plate_area">
              <div data-v-2f748e5a="" data-v-35734774="" className="card_img">
                <img
                  data-v-2f748e5a=""
                  data-v-35734774=""
                  src={detailCard.cardImg}
                  width="auto"
                  height="auto"
                  alt=""
                />
              </div>

              <a
                data-v-103c4868=""
                data-v-2f748e5a=""
                className="compare_in"
                data-v-35734774=""
              ></a>
            </div>
            <div data-v-2f748e5a="" data-v-35734774="" className="data_area">
              <div data-v-2f748e5a="" data-v-35734774="" className="tit">
                <strong data-v-2f748e5a="" data-v-35734774="" className="card">
                  {detailCard.cardName.split("&nbsp;").join(" ")}
                </strong>
                <p data-v-2f748e5a="" data-v-35734774="" className="brand">
                  {detailCard.cardCo}
                </p>
              </div>
              <div data-v-2f748e5a="" data-v-35734774="" className="bnf1">
                <dl
                  data-v-2f748e5a=""
                  data-v-35734774=""
                  className="bnf11"
                  style={{
                    backgroundImage:
                      "url('https://api.card-gorilla.com:8080/storage/benefit/2/logo_img/753/ico_bill.png')",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <dt data-v-2f748e5a="" data-v-35734774="">
                    {detailCard.benefitT1.split("&nbsp;").join(" ")}
                  </dt>
                  {` `}
                  <dd data-v-2f748e5a="" data-v-35734774="">
                    <strong data-v-2f748e5a="" data-v-35734774="">
                      {detailCard.benefitC1.split("&nbsp;").join(" ")}
                    </strong>
                  </dd>
                </dl>
                <dl
                  data-v-2f748e5a=""
                  data-v-35734774=""
                  className="bnf12"
                  style={{
                    backgroundImage:
                      "url('https://api.card-gorilla.com:8080/storage/benefit/21/logo_img/859/ico_oil%28%EC%A3%BC%EC%9C%A0%29.png')",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <dt data-v-2f748e5a="" data-v-35734774="">
                    {detailCard.benefitT2.split("&nbsp;").join(" ")}
                  </dt>
                  {`  `}
                  <dd data-v-2f748e5a="" data-v-35734774="">
                    <strong data-v-2f748e5a="" data-v-35734774="">
                      {detailCard.benefitC2.split("&nbsp;").join(" ")}
                    </strong>
                  </dd>
                </dl>
                <dl
                  data-v-2f748e5a=""
                  data-v-35734774=""
                  className="bnf13"
                  style={{
                    backgroundImage:
                      "url('https://api.card-gorilla.com:8080/storage/benefit/16/logo_img/854/ico_shopping%28%EC%87%BC%ED%95%91%29.png')",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <dt data-v-2f748e5a="" data-v-35734774="">
                    {detailCard.benefitT3.split("&nbsp;").join(" ")}
                  </dt>
                  {` `}
                  <dd data-v-2f748e5a="" data-v-35734774="">
                    <strong data-v-2f748e5a="" data-v-35734774="">
                      {detailCard.benefitC3.split("&nbsp;").join(" ")}
                    </strong>
                  </dd>
                </dl>
              </div>
              <div data-v-2f748e5a="" data-v-35734774="" className="btn_wrap">
                <div data-v-2f748e5a="" data-v-35734774="" className="app_btn">
                  <a
                    data-v-2f748e5a=""
                    data-v-35734774=""
                    href={detailCard.urlLink}
                  >
                    <span data-v-2f748e5a="" data-v-35734774="">
                      <b data-v-2f748e5a="" data-v-35734774="">
                        카드 신청
                      </b>
                      <i data-v-2f748e5a="" data-v-35734774="">
                        APPLY NOW
                      </i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div data-v-2f748e5a="" data-v-35734774="" className="bnf2">
              <dl data-v-2f748e5a="" data-v-35734774="">
                <dt data-v-2f748e5a="" data-v-35734774="" className="hide">
                  연회비
                </dt>
                <dd data-v-2f748e5a="" data-v-35734774="" className="in_out">
                  <span>
                    {detailCard.nationalType.split("&nbsp;")[0]}{" "}
                    <b>{detailCard.nationalType.split("&nbsp;")[1]}</b>{" "}
                  </span>{" "}
                  {detailCard.nationalType.split("&nbsp;")[2]}{" "}
                  <span>
                    {" "}
                    {detailCard.nationalType.split("&nbsp;")[3]}{" "}
                    <b>{detailCard.nationalType.split("&nbsp;")[4]}</b>
                  </span>
                </dd>
                <dd data-v-2f748e5a="" data-v-35734774="">
                  <span data-v-2f748e5a="" data-v-35734774="">
                    <div
                      role="tooltip"
                      id="el-popover-6293"
                      aria-hidden="true"
                      className="el-popover el-popper"
                      style={{ display: "none" }}
                    >
                      <div data-v-2f748e5a="" style={{ padding: "5px 15px" }}>
                        <div
                          style={{
                            fontSize: "1.2em",
                            fontWeight: "600",
                            color: "#222",
                            paddingBottom: "10px",
                            display: "block",
                          }}
                        >
                          연회비 상세안내
                        </div>
                        국내전용 없음
                        <br />
                        해외겸용(VISA, mastercard) 없음
                        <br />* 후불교통카드 : 가능
                      </div>
                    </div>
                    <a
                      data-v-2f748e5a=""
                      className="qa el-popover__reference"
                      aria-describedby="el-popover-6293"
                    >
                      ?
                    </a>
                  </span>
                </dd>
              </dl>
              <dl data-v-2f748e5a="" data-v-35734774="">
                <dd data-v-2f748e5a="" data-v-35734774="">
                  {detailCard.previousPer.split("&nbsp;").join(" ")}
                </dd>
              </dl>
              <dl data-v-2f748e5a="" data-v-35734774="">
                <dt data-v-2f748e5a="" data-v-35734774="" className="hide">
                  브랜드
                </dt>
                <dd data-v-2f748e5a="" data-v-35734774="" className="c_brand">
                  <span data-v-2f748e5a="" data-v-35734774="" className="visa">
                    {detailCard.globalMerchant.split("&nbsp;").join(" ")}
                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </article>
      <article
        data-v-2f748e5a=""
        data-v-35734774=""
        className="cmd_con benefit"
      >
        <h3 data-v-2f748e5a="" data-v-35734774="">
          주요혜택
        </h3>
        <div data-v-2f748e5a="" data-v-35734774="" className="lst bene_area">
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(1) ? "on" : ""}
            onClick={() => handleToggle(1)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/2/logo_img/753/ico_bill.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                공과금/렌탈
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                국세·지방세 7천원 환급할인
              </i>
            </dt>
            {activeIndexes.includes(1) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>
                      스피드메이트 엔진오일교환 2만원 현장할인 및 정비 할인
                    </strong>
                  </p>
                  <p>- 엔진오일 교환 (연 1회)</p>
                  <p>&nbsp; 엔진오일은 ZIC-A Bulk 기준</p>
                  <p>
                    &nbsp; 수입차, 1.4톤 이상 차량은 제외되며, 기존 제품 이외
                    사용 또는 4L 초과 시 추가요금 발생
                  </p>
                  <p>&nbsp; 타 할인카드 및 쿠폰 중복 사용 불가</p>
                  <p>&nbsp; 실적조건 : 전월 이용실적 30만원 이상</p>
                  <p>- 정비공임 10% 할인</p>
                  <p>- 무료안전점검서비스</p>
                  <p>
                    - 스피드메이트 엔진오일교환 및 정비 할인 , SK렌터카 할인은
                    월간 통합할인한도 예외 적용 서비스입니다.
                  </p>
                  <p>
                    - 상기 서비스에 대한 문의사항은 스피드메이트
                    홈페이지(www.speedmate.com)를 확인하시거나
                  </p>
                  <p>콜센터(1600-1600)로 문의하여 주시기 바랍니다.</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(2) ? "on" : ""}
            onClick={() => handleToggle(2)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/122/logo_img/986/ico_oil.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                주유소
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                GS칼텍스 리터당 주중 50원, 주말 60원 환급할인
              </i>
            </dt>
            {activeIndexes.includes(2) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>
                      GS칼텍스 리터당 주중 50원, 주말 60원 환급할인
                    </strong>
                  </p>
                  <p>
                    - 건당 이용금액 10만원까지 할인 (월 이용금액 30만원까지 할인
                    적용)
                  </p>
                  <p>
                    - 할인제외 : GS칼텍스 비제휴 주유소 이용금액 / LPG 이용금액
                  </p>
                  <p>- 실적조건 : 전월 이용실적 20만원 이상</p>
                  <p>
                    - GS칼텍스 본사 휘발유 고시가 기준 (경유, 등유는 휘발유가
                    기준으로 환산하여 적용)
                  </p>
                  <p>
                    - 각 주유소별 유가 및 유류에 따라 할인액 차이가 발생할 수
                    있습니다.
                  </p>
                  <p>
                    - 최초카드 발급 후 사용등록일로부터 60일간은 이용실적이 없는
                    경우에도 월간통합할인한도 5천원 이내에서&nbsp;
                  </p>
                  <p>할인 제공됩니다.</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(3) ? "on" : ""}
            onClick={() => handleToggle(3)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/118/logo_img/980/ico_carMaintenance.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                정비
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                스피드메이트 엔진오일교환 2만원 현장할인 및 정비 할인
              </i>
            </dt>
            {activeIndexes.includes(3) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>
                      스피드메이트 엔진오일교환 2만원 현장할인 및 정비 할인
                    </strong>
                  </p>
                  <p>- 엔진오일 교환 (연 1회)</p>
                  <p>&nbsp; 엔진오일은 ZIC-A Bulk 기준</p>
                  <p>
                    &nbsp; 수입차, 1.4톤 이상 차량은 제외되며, 기존 제품 이외
                    사용 또는 4L 초과 시 추가요금 발생
                  </p>
                  <p>&nbsp; 타 할인카드 및 쿠폰 중복 사용 불가</p>
                  <p>&nbsp; 실적조건 : 전월 이용실적 30만원 이상</p>
                  <p>- 정비공임 10% 할인</p>
                  <p>- 무료안전점검서비스</p>
                  <p>
                    - 스피드메이트 엔진오일교환 및 정비 할인 , SK렌터카 할인은
                    월간 통합할인한도 예외 적용 서비스입니다.
                  </p>
                  <p>
                    - 상기 서비스에 대한 문의사항은 스피드메이트
                    홈페이지(www.speedmate.com)를 확인하시거나
                  </p>
                  <p>콜센터(1600-1600)로 문의하여 주시기 바랍니다.</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(4) ? "on" : ""}
            onClick={() => handleToggle(4)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/107/logo_img/969/ico_car.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                렌터카
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                SK렌터카 할인 (연 2회)
              </i>
            </dt>
            {activeIndexes.includes(4) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>SK렌터카 할인 (연 2회)</strong>
                  </p>
                  <p>- SK렌터카 방문 시 현장할인 (연 2회)</p>
                  <p>- 전국 지점 가능하며, 전 차종 가능</p>
                  <p>- 월간 통합할인한도 적용 제외</p>
                  <p>
                    - 자세한 내용은 SK렌터카 홈페이지(www.skcarrental.com)를
                    확인하시거나 고객센터(1599-9111)로 문의하여
                  </p>
                  <p>주시기 바랍니다.</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(5) ? "on" : ""}
            onClick={() => handleToggle(5)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/97/logo_img/961/ico_shopping.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                백화점
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                롯데·현대·신세계백화점 5% 환급할인
              </i>
            </dt>
            {activeIndexes.includes(5) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>롯데·현대·신세계백화점 5% 환급할인</strong>
                  </p>
                  <p>
                    - 이용금액 건당 5만원~10만원까지 할인 적용(1회 최대 할인금액
                    5,000원)
                  </p>
                  <p>- 실적조건 : 전월 이용실적 50만원 이상</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(6) ? "on" : ""}
            onClick={() => handleToggle(6)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/135/logo_img/998/ico_food.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                패밀리레스토랑
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                아웃백 10% 환급할인
              </i>
            </dt>
            {activeIndexes.includes(6) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>아웃백 10% 환급할인</strong>
                  </p>
                  <p>
                    - 이용금액 건당 3만원~10만원까지 할인 적용(1회 최대 할인금액
                    10,000원)
                  </p>
                  <p>
                    - 할인제외 : 할인대상 가맹점이 백화점 및 대형할인점에 입점한
                    점포인 경우
                  </p>
                  <p>- 실적조건 : 전월 이용실적 20만원 이상</p>
                  <p>
                    - 최초카드 발급 후 사용등록일로부터 60일간은 이용실적이 없는
                    경우에도 월간통합할인한도 5천원 이내에서&nbsp;
                  </p>
                  <p>할인 제공됩니다.</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(7) ? "on" : ""}
            onClick={() => handleToggle(7)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/52/logo_img/767/ico_traffic.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                대중교통
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                버스·지하철 5% 청구할인
              </i>
            </dt>
            {activeIndexes.includes(7) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>버스·지하철 5% 청구할인</strong>
                  </p>
                  <p>- 월 이용금액 2만원까지 할인</p>
                  <p>
                    - 대중교통 할인 대상 : RF교통기관 업종 (KB국민카드 가맹점
                    업종 기준)
                  </p>
                  <p>- 실적 조건 : 전월 이용실적 30만원 이상</p>
                  <p>
                    - 실제 카드이용일이 아닌 이메일 이용내역서상 기재된 이용일
                    기준으로 할인 적용 됩니다.
                  </p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(8) ? "on" : ""}
            onClick={() => handleToggle(8)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/23/logo_img/861/ico_mobile%28%ED%86%B5%EC%8B%A0%29.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                통신
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                이동통신요금 1,000원 환급할인 (월 1회)
              </i>
            </dt>
            {activeIndexes.includes(8) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>이동통신요금 1,000원 환급할인 (월 1회)</strong>
                  </p>
                  <p>
                    - 자동이체금액 건당 5만원 이상 이용 시 1천원 정액할인 (월
                    1회)
                  </p>
                  <p>
                    - 제공조건 : 해당 카드로 3대 이동통신사(SKT, KT, LG U+)
                    자동이체 등록
                  </p>
                  <p>- 할인 제외 : 유무선 통신요금 통합 청구금액</p>
                  <p>- 실적조건 : 전월 이용실적 30만원 이상</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(9) ? "on" : ""}
            onClick={() => handleToggle(9)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/71/logo_img/926/ico_themePark.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                테마파크
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                에버랜드 50% 환급할인
              </i>
            </dt>
            {activeIndexes.includes(9) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>에버랜드 50% 환급할인</strong>
                  </p>
                  <p>
                    - 이용금액 건당 3만원~5만원까지 할인 적용(1회 최대 할인금액
                    25,000원)
                  </p>
                  <p>- 제공조건 : 현장 티켓 발매</p>
                  <p>- 실적조건 : 전월 이용실적 20만원 이상</p>
                  <p>
                    - 최초카드 발급 후 사용등록일로부터 60일간은 이용실적이 없는
                    경우에도 월간통합할인한도 5천원 이내에서&nbsp;
                  </p>
                  <p>할인 제공됩니다.</p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(10) ? "on" : ""}
            onClick={() => handleToggle(10)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/82/logo_img/945/ico_membership.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                해피포인트
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                해피포인트 5% 현장적립
              </i>
            </dt>
            {activeIndexes.includes(10) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>해피포인트 5% 현장적립</strong>
                  </p>
                  <p>- 해피포인트 가맹점에서 1천원 이상 이용 시 현장적립</p>
                  <p>
                    - 적립제외 : 일부 해피포인트 가맹점에서 통신사 멤버십카드로
                    할인 또는 사이즈 업그레이드 서비스 적용 시
                  </p>
                  <p>
                    - 해피포인트 사용과 적립 내역에 대한 자세한 정보는
                    해피포인트카드 홈페이지에서 조회 가능합니다.
                  </p>
                  <p>&nbsp;( www.happypointcard.com ) / 080 - 320 - 1234</p>
                  <p>
                    <br />
                  </p>
                  <p>해피포인트란?</p>
                  <p>
                    - 파리크라상, 파리바게뜨, 배스킨라빈스, 던킨도너츠,
                    파스쿠찌, 타마티, 리나스, 빚은, 사누끼보레, 잠바주스,
                    월드바인의 전국 3,000여 개의 매장에서 적립과 사용이 가능한
                    포인트입니다. 적립 포인트가 일정 포인트 이상(현재 기준 1천
                    포인트이며, 행사 또는 제휴가맹점의 별도 기준에 따름) 되었을
                    경우 해피포인트카드의 가맹점에서 제품 구매 시 현금 대신
                    활용하실 수 있습니다. (단, 1포인트는 현금 1원에 해당하며,
                    포인트를 현금으로 환급할 수 없으며, 포인트로 구매 시에는
                    해당 금액에 대해 추가 적립이 불가합니다.)
                  </p>
                  <p>
                    - 포인트 유효기간 적립일로부터 차차년도 6월 30일
                    해피포인트카드 가맹 브랜드 점포 영업종료 시간에 소멸됩니다.
                  </p>
                  <p>
                    PG(인터넷)업체를 통한 결제 및 호텔, 백화점, 대형마트,
                    철도역사에 입점한 가맹점의 경우 적립 대상에서 제외될 수
                  </p>
                  <p>있습니다.</p>
                  <p>
                    - 해피포인트 제휴 KB국민카드 발급 시 기존 누적된 해피포인트
                    및 거래이력은 본인명의의 해당카드로 자동 이관되며,
                  </p>
                  <p>
                    기존 카드는 정지됩니다. (단, 2012년 8월 23일 이후 일반
                    해피포인트 멤버십카드 소지 회원이 제휴카드를 신규 발급
                  </p>
                  <p>
                    받으실 경우에는 기존 해피포인트 멤버십카드도 사용
                    가능합니다.)
                  </p>
                  <p>
                    - 해피포인트 제휴 KB국민카드를 해지할 경우에도,
                    해피포인트카드 회원의 자격은 계속 유지됩니다. 또한 별도 의사
                    없이 해피포인트 사용내역과 적립금 역시 소멸되지 않습니다.
                  </p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(11) ? "on" : ""}
            onClick={() => handleToggle(11)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/7/logo_img/912/ico_etc.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                기타
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                통합할인한도
              </i>
            </dt>
            {activeIndexes.includes(11) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>월간 통합할인한도</strong>
                  </p>
                  <p>- 전월실적 20만원 이상: 월 통합 최대 5천원 할인한도</p>
                  <p>- 전월실적 30만원 이상: 월 통합 최대 1만원 할인한도</p>
                  <p>- 전월실적 50만원 이상: 월 통합 최대 2만원 할인한도</p>
                  <p>- 전월실적 100만원 이상: 월 통합 최대 5만원 할인한도</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    - KB국민 직장인보너스체크카드 및 직장인보너스체크
                    동일계열카드의 할인 서비스는 전월 이용실적에 따라 월간
                    통합할인한도가 차등 적용됩니다.
                  </p>
                  <p>- 할인 한도 적용기간 : 매월1일~말일</p>
                  <p>
                    - 할인되는 전표가 매입되는 순서대로 월간 통합할인한도 내에서
                    차감됩니다.
                  </p>
                  <p>
                    - 월간 통합할인한도는 KB국민 직장인보너스체크카드 및
                    직장인보너스체크 동일계열카드로 월간 할인받을 수 있는
                    최대금액을 의미하며, 월간 잔여할인한도는 다음 달로 이월되지
                    않습니다.
                  </p>
                  <p>
                    - KB국민 직장인보너스체크카드 및 직장인보너스체크
                    동일계열카드의 최초 발급 후 사용등록일로부터 60일까지는
                    전월이용실적이 없는 경우에도 월간 통합할인한도 5천원
                    이내에서 국세·지방세,주유(GS칼텍스), 에버랜드, 아웃백에서
                    할인받으실 수 있습니다.
                  </p>
                  <p>
                    - KB국민 직장인보너스체크카드 및 직장인보너스체크
                    동일계열카드의 중복 소지 시 최초 발급된 카드의 발급일을
                    기준으로 합니다.
                  </p>
                  <p>
                    - KB국민 직장인보너스체크 동일계열카드: KB국민
                    직장인보너스체크카드, KB국민
                    직장인보너스체크카드(신한은행계좌전용), KB국민
                    직장인보너스체크카드(농협계좌전용)
                  </p>
                </div>
              </dd>
            )}
          </dl>
          <dl
            data-v-2f748e5a=""
            data-v-35734774=""
            className={activeIndexes.includes(12) ? "on" : ""}
            onClick={() => handleToggle(12)}
          >
            <dt
              data-v-2f748e5a=""
              data-v-35734774=""
              style={{
                backgroundImage:
                  'url("https://api.card-gorilla.com:8080/storage/benefit/28/logo_img/866/ico_note%28%EC%9C%A0%EC%9D%98%EC%82%AC%ED%95%AD%29.png")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <p data-v-2f748e5a="" data-v-35734774="" className="txt1">
                유의사항
              </p>
              <i data-v-2f748e5a="" data-v-35734774="">
                꼭 확인하세요!
              </i>
            </dt>
            {activeIndexes.includes(12) && (
              <dd data-v-2f748e5a="" data-v-35734774="">
                <div data-v-2f748e5a="" data-v-35734774="" className="in_box2">
                  <p>
                    <strong>카드발급</strong>
                  </p>
                  <p>
                    - 인터넷을 통한 체크카드 발급은 만 17세 이상으로 KB국민은행
                    요구불 계좌를 보유한 고객이면 신청 가능 합니다. (단,
                    후불교통카드는 만 18세 이상만 가능)
                  </p>
                  <p>
                    - 만 14세 이상~만 17세 미만 고객은 KB국민카드 영업점 방문 시
                    비교통카드에 한해 발급 가능합니다.
                  </p>
                  <p>
                    - 특수채권 잔액 보유 또는 은행연합회 신용관리 대상 등 일부
                    고객은 후불교통기능이 탑재된 KB국민 체크카드의 발급이 제한
                    될 수 있습니다.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>체크카드 전월 이용실적</strong>&nbsp;
                  </p>
                  <p>
                    - 전월1일~말일까지 “KB국민 직장인보너스 체크카드”로 이용한
                    승인금액 (이용일 기준)으로, 교통 및 해외이용금액은
                    제외됩니다.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>체크카드 이용제한&nbsp;</strong>
                  </p>
                  <p>
                    - 매월 세번째 일요일 00:00~06:00중에는 이용이 불가할 수
                    있습니다.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>체크카드 포인트리 적립&nbsp;</strong>
                  </p>
                  <p>
                    - 체크카드 이용 후 이용전표가 매입처리(카드이용일로부터
                    약2~3일 후) 완료된 후 할인금액을 카드 출금계좌로 환급하는
                    방식입니다.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>포인트리</strong>
                  </p>
                  <p>
                    - KB국민 직장인보너스 체크카드는 KB국민카드에서 제공해
                    드리는 포인트리가 적립되지 않습니다. (단, KB국민카드 스타샵
                    가맹점에서 제공하는 포인트리는 적립)
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>할인 서비스 적용</strong>&nbsp;
                  </p>
                  <p>
                    - 할인받은 매출 취소 후 이용한 매출의 경우 취소 전표가
                    실시간 매입 되지 않아 할인 한도가 즉시 복원되지 않으며, 할인
                    한도가 복원되지 않은 상태에서 매출 거래가 있는 경우 할인이
                    적용되지 않습니다.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>소액신용결제 서비스</strong>
                  </p>
                  <p>
                    - 소액신용결제 서비스를 신청하시면 신청고객의 예금평잔 등
                    소액신용한도의 결제능력을 평가할 수 있는 기준에 따라 최고
                    30만원 이내에서 소액신용한도가 부여됩니다.&nbsp;
                  </p>
                  <p>
                    - 다음의 경우 신용카드로 거래로 처리되며 이용대금은 약정
                    결제일에 체크카드 결제계좌로 청구됩니다.&nbsp;
                  </p>
                  <p>
                    &nbsp; 1. 계좌 잔액 부족(계좌잔액이 1만원인 상황에서 3만원
                    사용 승인을 요청하였을 경우 3만원 전액이 신용카드 거래로
                    처리)&nbsp;
                  </p>
                  <p>
                    &nbsp; 2. 계좌 개설 은행의 전산장애(미응답, 체크카드
                    사용제한 시간)등으로 사용 불가한 경우&nbsp;
                  </p>
                  <p>
                    - 할부결제, 포인트리 복합결제 시 적용되지 않으며, 바우처
                    결제 시 적용되지 않을 수 있습니다. 또한 신용카드
                    일부결제금액이월약정(리볼빙) 대상에서 제외 됩니다.&nbsp;
                  </p>
                  <p>
                    - 교통카드 이용 등 무승인 거래 시 적용 제외됩니다. &nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>체크카드 해외 이용 시 유의사항</strong>
                  </p>
                  <p>
                    - 브랜드 : 국내전용(로컬), 국내외겸용(VISA, Master)&nbsp;
                  </p>
                  <p>
                    - 일반 가맹점 이용 : 승인시점 출금계좌에서 즉시 출금
                    됩니다.&nbsp;
                  </p>
                  <p>
                    &nbsp; 단, 승인시점 전신환 매도율이 적용되며, 승인시점과
                    매입 시점 차액 발생 시 환급 또는 추가출금 될 수
                    있습니다.&nbsp;
                  </p>
                  <p>&nbsp; * 승인금액 &gt; 매입금액: 차액환급</p>
                  <p>
                    &nbsp; * 승인금액 &lt; 매입금액: 차액 추가출금(계좌 잔액부족
                    신용청구)
                  </p>
                  <p>
                    - 무승인 / T&amp;E 업종이용 : 매출전표 매입시점에
                    출금됩니다.(매입시점 최초고시 전신환매도율 적용)&nbsp;
                  </p>
                  <p>
                    &nbsp; * T&amp;E(Travel&amp;Entertainment)업종 :
                    항공/렌터카/호텔/숙박업체/ 무인주유기 등
                  </p>
                  <p>
                    &nbsp; * 무승인/T&amp;E업종 이용금액 출금 시점의 계좌잔액
                    부족 시 전액 신용 청구됩니다.
                  </p>
                  <p>
                    - 신용청구 : 체크카드 결제일에 결제계좌에서
                    출금됩니다.&nbsp;
                  </p>
                  <p>
                    - 해외 이용 시(해외사이트 거래 포함) 미화(USD)기준
                    거래미화금액에 접수일의(KB국민은행) 최초 고시 전신환매도율을
                    적용한 후, 국제브랜드사가 부과하는 국제브랜드 수수료(VISA
                    1%, Master 1%)와 KB국민카드가 부과하는 해외서비스
                    수수료(0.25%)를 포함하여 원화로 청구됩니다. 이 경우
                    KB국민카드의 해외서비스 수수료는 국제브랜드 수수료를
                    제외하고 산정됩니다.&nbsp;
                  </p>
                  <p>- 해외 이용 시 청구금액 산출방법&nbsp;</p>
                  <p>
                    &nbsp; *해외 이용 시 청구금액 = (거래미화금액x 전신환매도율1
                    ) + 국제브랜드 수수료2+ 해외서비스 수수료3&nbsp;
                  </p>
                  <p>
                    &nbsp; 1. 전신환매도율 : 접수일의 KB국민은행 최초 고시
                    전신환매도율&nbsp;
                  </p>
                  <p>
                    &nbsp; 2. 국제브랜드 수수료 = (거래미화금액 x 국제브랜드
                    이용수수료율 ) x 전신환매도율&nbsp;
                  </p>
                  <p>
                    &nbsp; 3. 해외서비스 수수료 = (거래미화금액 x 해외서비스
                    수수료율 ) x 전신환매도율&nbsp;
                  </p>
                  <p>
                    &nbsp; *해당 내용은 해외원화결제서비스(DCC) 수수료가 없는
                    경우이며, 해외원화결제서비스(DCC)이용 시 추가 수수료가
                    발생할 수 있으니 유의하시기 바랍니다.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>부가서비스 변경 안내</strong>
                  </p>
                  <p>
                    - 카드 이용시 제공되는 포인트 및 할인 혜택 등의 부가서비스는
                    카드 신규 출시(2012년8월6일) 이후 1년 이상 축소∙ 폐지 없이
                    유지 됩니다.&nbsp;
                  </p>
                  <p>
                    &nbsp; 다만, 부가서비스 제공과 관련된 제휴업체의 일방적인
                    제휴 조건 변경, 도산, 천재지변, 금융환경의 급변, 카드업자의
                    경영 위기 및 그밖에 준하는 사유에 따른 불가피한 변경의 경우
                    즉시 홈페이지에 게시하고, 개별 고지해드립니다.&nbsp;
                  </p>
                  <p>
                    &nbsp; 카드 신규 출시 이후 1년 이상 경과했고, 해당 카드의
                    수익성 유지가 어려워 부가서비스를 변경하는 경우는 홈페이지에
                    게시하고 6개월 전부터 매월 개별 고지해드립니다.&nbsp;
                  </p>
                  <p>
                    - 개별 고지 방법 : 이용대금명세서, 우편, 이메일, 휴대폰
                    문자메시지 중 하나
                  </p>
                </div>
              </dd>
            )}
          </dl>
        </div>
        <div data-v-2f748e5a="" data-v-35734774="" className="lst_info inner">
          <p>
            <span style={{ fontSize: "17px" }}>
              계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
            </span>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                연체이자율:&nbsp;회원별&nbsp;/&nbsp;이용상품별 정상이자율&nbsp;+
                3%p,&nbsp;최고 연&nbsp;20%&nbsp;이내
              </span>
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                ※ 단,&nbsp;연체발생시점에 정상이자율이 없는 경우 아래와 같이
                적용함
              </span>
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                &nbsp;- 일시불 거래 연체 시: 거래발생시점의 최소기간(2개월)
                유이자 할부수수료율 적용
              </span>
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                &nbsp;- 무이자할부 거래 연체 시: 거래발생시점의 동일한
                할부계약기간의 유이자할부수수료율 적용
              </span>
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                -&nbsp;그 외의 경우:&nbsp;정상이자율은 상법상 상사법정이율과
                상호금융가계자금대출금리*&nbsp;중 높은 금리 적용
              </span>
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                *한국은행에서 매월 발표하는 가장 최근의 비은행 금융기관
                가중평균대출금리(신규대출 기준)
              </span>
            </strong>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                <strong>
                  상환능력에 비해 신용카드 사용액이 과도할 경우,&nbsp;귀하의
                  개인신용평점이 하락할 수 있습니다.
                </strong>
              </span>
            </strong>
          </p>
          <p>
            <span style={{ fontSize: "17px" }}>
              <strong>
                개인신용평점 하락시 금융거래와 관련된 불이익이 발생할 수
                있습니다.
              </strong>
            </span>
          </p>
          <p>
            <strong>
              <span style={{ fontSize: "17px" }}>
                일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                발생할 수 있습니다.
              </span>
            </strong>
          </p>
          <p>
            <br />
          </p>
          <p>
            <span style={{ fontSize: "15px" }}>
              준법 심의필 220822-02771-HPP
              <span lang="EN-US">&nbsp;(2022.08.22)</span>
            </span>
          </p>
        </div>
        <div
          data-v-2f748e5a=""
          data-v-35734774=""
          className="lst_info inner basic"
        >
          * 본 카드의 서비스 내용은 카드사 사정에 따라 사전 고지 후 변경 또는
          중단될 수 있습니다.
          <br data-v-2f748e5a="" data-v-35734774="" />
          * 카드 사용 전 반드시 상품설명서와 약관을 읽어 보시기 바랍니다.
          <br data-v-2f748e5a="" data-v-35734774="" />* 카드고릴라는
          소비자들에게 다양한 정보제공을 목적으로 심의번호가 미기재된 카드상품을
          수집 및 노출할 수 있으며, 정보 업데이트에 최선을 다하고 있습니다.
        </div>
      </article>
      <RefContents />
      {/* <Rank /> */}
    </section>
  );
};

export default DetailCard;
