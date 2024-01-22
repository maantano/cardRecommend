import { Link } from "react-router-dom";
import "./GNB.css";

function GNB() {
  const menuList = [
    { name: "메인", link: "/" },
    { name: "카드 검색", link: "/about" },
    { name: "소비패턴 분석", link: "/xlsx2" },
  ];
  return (
    <ul className="GNB">
      {menuList.map(({ name, comment, link }, index) => (
        <li key={index}>
          <Link to={link}>
            {name}
            {comment && <span>{comment}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GNB;
