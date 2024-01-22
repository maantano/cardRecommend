import React from "react";
import "./Rank.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rank = () => {
  const settings = {
    slide: <li />,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <article data-v-2f748e5a="" data-v-35734774="" className="cmd_con popular">
      <h3 data-v-2f748e5a="" data-v-35734774="">
        KB국민카드 인기순위
      </h3>
      <div data-v-2f748e5a="" data-v-35734774="" className="lst_wrap inner">
        <ul
          data-v-2f748e5a=""
          data-v-35734774=""
          className="lst real_time_lst calc_chart"
        >
          <Slider {...settings}>
            <li data-v-2f748e5a="" data-v-35734774="">
              <a
                data-v-2f748e5a=""
                href="/card/detail/2422"
                className=""
                data-v-35734774=""
              >
                <p data-v-2f748e5a="" className="num">
                  1
                </p>
                <p data-v-2f748e5a="" className="img">
                  <img
                    data-v-2f748e5a=""
                    src="https://api.card-gorilla.com:8080/storage/card/2422/card_img/27141/2422card.png"
                    alt=""
                    style={{ width: "160px", margin: "auto" }}
                  />
                </p>
                <div data-v-2f748e5a="" className="data">
                  <p data-v-2f748e5a="" className="subj">
                    노리2 체크카드(KB Pay)
                  </p>
                </div>
              </a>
            </li>
            <li data-v-2f748e5a="" data-v-35734774="">
              <a
                data-v-2f748e5a=""
                href="/card/detail/348"
                className=""
                data-v-35734774=""
              >
                <p data-v-2f748e5a="" className="num">
                  2
                </p>
                <p data-v-2f748e5a="" className="img">
                  <img
                    data-v-2f748e5a=""
                    src="https://api.card-gorilla.com:8080/storage/card/348/card_img/20581/348card.png"
                    alt=""
                    style={{ width: "160px", margin: "auto" }}
                  />
                </p>
                <div data-v-2f748e5a="" className="data">
                  <p data-v-2f748e5a="" className="subj">
                    노리체크카드
                  </p>
                </div>
              </a>
            </li>
            <li data-v-2f748e5a="" data-v-35734774="">
              <a
                data-v-2f748e5a=""
                href="/card/detail/2423"
                className=""
                data-v-35734774=""
              >
                <p data-v-2f748e5a="" className="num">
                  3
                </p>
                <p data-v-2f748e5a="" className="img">
                  <img
                    data-v-2f748e5a=""
                    src="https://api.card-gorilla.com:8080/storage/card/2423/card_img/27142/2423card.png"
                    alt=""
                    style={{ width: "160px", margin: "auto" }}
                  />
                </p>
                <div data-v-2f748e5a="" className="data">
                  <p data-v-2f748e5a="" className="subj">
                    노리2 체크카드(Global)
                  </p>
                </div>
              </a>
            </li>
            <li data-v-2f748e5a="" data-v-35734774="">
              <a
                data-v-2f748e5a=""
                href="/card/detail/332"
                className=""
                data-v-35734774=""
              >
                <p data-v-2f748e5a="" className="num">
                  4
                </p>
                <p data-v-2f748e5a="" className="img">
                  <img
                    data-v-2f748e5a=""
                    src="https://api.card-gorilla.com:8080/storage/card/332/card_img/20576/332card.png"
                    alt=""
                    style={{ width: "160px", margin: "auto" }}
                  />
                </p>
                <div data-v-2f748e5a="" className="data">
                  <p data-v-2f748e5a="" className="subj">
                    카카오페이 KB국민 체크카드
                  </p>
                </div>
              </a>
            </li>
            <li data-v-2f748e5a="" data-v-35734774="">
              <a
                data-v-2f748e5a=""
                href="/card/detail/614"
                className=""
                data-v-35734774=""
                style={{ width: "160px", margin: "auto" }}
              >
                <p data-v-2f748e5a="" className="num">
                  5
                </p>
                <p data-v-2f748e5a="" className="img">
                  <img
                    data-v-2f748e5a=""
                    src="https://api.card-gorilla.com:8080/storage/card/614/card_img/21381/614card.png"
                    alt=""
                  />
                </p>
                <div data-v-2f748e5a="" className="data">
                  <p data-v-2f748e5a="" className="subj">
                    위글위글 첵첵 체크카드
                  </p>
                </div>
              </a>
            </li>
            <li data-v-2f748e5a="" data-v-35734774="">
              <a
                data-v-2f748e5a=""
                href="/card/detail/350"
                className="router-link-exact-active router-link-active"
                data-v-35734774=""
              >
                <p data-v-2f748e5a="" className="num">
                  6
                </p>
                <p data-v-2f748e5a="" className="img">
                  <img
                    data-v-2f748e5a=""
                    src="https://api.card-gorilla.com:8080/storage/card/350/card_img/20594/350card.png"
                    alt=""
                    style={{ width: "160px", margin: "auto" }}
                  />
                </p>
                <div data-v-2f748e5a="" className="data">
                  <p data-v-2f748e5a="" className="subj">
                    직장인보너스체크카드
                  </p>
                </div>
              </a>
            </li>
          </Slider>
        </ul>
      </div>
    </article>
  );
};

export default Rank;
