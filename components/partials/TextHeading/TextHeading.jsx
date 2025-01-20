import React from "react";

const TextHeading = ({ heading, text }) => {
  return (
    <>
      <div className={"textHeading-textHeadingContainer"}>
        <h3 className="heading">{heading}</h3>
        <div className={"textHeading-borderContainer"}>
          <span className={"textHeading-BoderBlack"}></span>
          <span className={"textHeading-BoderBlue"}></span>
        </div>
        <p className={`${"textHeading-pay"} heading2`}>{text}</p>
      </div>
    </>
  );
};

export default TextHeading;
