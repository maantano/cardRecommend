import "./Header.css";
import GNB from "./GNB/GNB";
import Aside from "./Aside/Aside";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <div style={{ height: 60 }}>
      <div className={scroll ? "headerBlur" : "header"}>
        <div className="header-main">
          <nav className="header-nav">
            <div className="header-logo"></div>
            <GNB />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
