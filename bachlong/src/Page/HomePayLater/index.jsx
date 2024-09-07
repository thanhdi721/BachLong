import React from "react";
import "./HomePayLater.css";
import ImagePhone from "../../images/phone.png";
import ImageZalo from "../../images//zalo.png";
import ImageFacebook from "../../images/FACEBOOK.png";
import top from "../../images/top.jpg";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
function HomePaylater() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="floating-buttons">
        <a
          href="https://facebook.com"
          className="floating-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ImagePhone}
            alt=""
            width={25}
            height={25}
            style={{
              margin: " 0px 5px",
            }} /* Adjust the margin for better centering */
          />
          <span className="text-right">Gọi ngay</span>
        </a>
        <a
          href="https://facebook.com"
          className="floating-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ImageZalo}
            alt=""
            width={25}
            height={25}
            style={{
              margin: " 0px 5px",
            }} /* Adjust the margin for better centering */
          />
          <span className="text-right">Zalo</span>
        </a>
        <a
          href="https://facebook.com"
          className="floating-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ImageFacebook}
            alt=""
            width={25}
            height={25}
            style={{
              margin: " 0px 5px",
            }} /* Adjust the margin for better centering */
          />
          <span className="text-right">Messenger</span>
        </a>

        <img
          src={top}
          alt=""
          onClick={scrollToTop}
          width={40}
          height={40}
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default HomePaylater;
