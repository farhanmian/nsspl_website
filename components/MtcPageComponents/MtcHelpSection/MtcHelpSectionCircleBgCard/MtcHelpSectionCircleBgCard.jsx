import React, { CSSProperties } from "react";

const MtcHelpSectionCircleBgCard = ({
  imageClasses,
  img,
  heading,
  text,
  imgMaxWidth,
  showBlueOverlay,
  cardClasses,
}) => {
  return (
    <section className={"mtcHelpSectionCircleBgCard-section"}>
      <div
        className={`${"mtcHelpSectionCircleBgCard-card"} ${
          cardClasses ? cardClasses : ""
        }`}
      >
        <div
          style={{ maxWidth: imgMaxWidth ? imgMaxWidth : "100%" }}
          className={"mtcHelpSectionCircleBgCard-imgContainer"}
        >
          <img
            src={img}
            alt="img"
            className={`${"mtcHelpSectionCircleBgCard-img"} ${
              imageClasses ? imageClasses : ""
            }`}
          />

          {showBlueOverlay && (
            <div className={"mtcHelpSectionCircleBgCard-imgOverlay"} />
          )}
        </div>

        <div className={"mtcHelpSectionCircleBgCard-textContainer"}>
          <h3 className="fontMontserrat">{heading}</h3>
          <p
            className={`${"mtcHelpSectionCircleBgCard-text"} caption fontRoboto`}
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MtcHelpSectionCircleBgCard;
