import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-iner">
        <div className="footer-info">
          <div className="divide">
            <ul className="footer-ul">
              <li>
                <div className="footer-category" style={{ color: "#b0b8c1" }}>
                  민경언
                </div>
              </li>
              <li className="">
                <a href="mailto:maantano@google.co.kr">
                  <span className="title">Email</span> : maandouzone@google.com
                </a>
              </li>
            </ul>
            <ul className="footer-ul2">
              <li>
                <div className="footer-category" style={{ color: "#b0b8c1" }}>
                  서비스
                </div>
              </li>
              <li className="">
                <span className="title">Stack :</span>
                <div>
                  FE : React, Redux, Zustand, Recoil, styled-compoent, tailwind
                  <div className="contents"></div>
                </div>
                <div>
                  BE : Node js, Python, Mysql, Firebase
                  <div className="contents"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
