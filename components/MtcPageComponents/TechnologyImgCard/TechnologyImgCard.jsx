import React from "react";
import styles from "./TechnologyImgCard.module.css";
import parse from "html-react-parser";

const TechnologyImgCard = ({ text, btnText, bgImageClass }) => {
  return (
    <section className={"technologyImgCard-bgContainer"}>
      <div
        className={`${"technologyImgCard-bgImg"} ${
          bgImageClass ? bgImageClass : ""
        }`}
      >
        <div className={"technologyImgCard-textHeadingContainer"}>
          <h3 className={`${"technologyImgCard-heading"} fontMontserrat`}>
            {text
              ? parse(text)
              : "See what’s possible when you have growth-friendly technology and award-winning support behind you."}
          </h3>
          <button className={`btnPrimary ${"technologyImgCard-btn"}`}>
            {btnText ? btnText : "GET STARTED"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyImgCard;
