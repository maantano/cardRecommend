import useScrollFadeIn from "../../hooks/useScrollFadIn";
import Style from "./Third.module.css";

const Main3Table = () => {
  const bankarr = [
    { name: "국민은행", link: "kbbank.svg" },
    { name: "신한은행", link: "shinhan.svg" },
    { name: "우리은행", link: "woori.svg" },
    { name: "하나은행", link: "hana.svg" },
    { name: "현대카드", link: "hyundai.svg" },
    { name: "카카오뱅크", link: "kakao.svg" },
    { name: "토스뱅크", link: "toss.png" },
    { name: "뱅크샐러드", link: "banksalad.png" },
    { name: "KEB은행", link: "keb.png" },
    { name: "농협은행", link: "nonghyup.svg" },
    { name: "BC카드", link: "bc.svg" },
    { name: "..." },
  ];

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4),
  };

  return (
    <div>
      <section className={Style.firstSection}>
        <div className={Style.secondDiv}>
          <h3 className={Style.firstText}>
            오늘 바로 신청해보세요.
            <strong>3분이면 카드 비교 끝!</strong>
          </h3>
        </div>
        <div className={Style.firstDiv} {...animatedItem[0]}>
          <ul className={Style.firstUl}>
            {bankarr.map((item) => {
              return (
                <div key={item.name}>
                  <li className={Style.ulLi}>
                    <div>
                      {item.link && (
                        <img
                          src={require(`../../../assets/icons/bank/${item.link}`)}
                          width="24"
                          height="24"
                          alt={item.name}
                          className={Style.liSvg}
                        />
                      )}
                      <span className={Style.liSpan}>{item.name}</span>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Main3Table;
