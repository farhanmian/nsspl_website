import React from "react";
// import styles from "./FooterHeader.module.css";

const MtcGetStartedComponent = () => {
  return (
    <div className={"mtcGetStartedComponent-textHeadingContainer"}>
      <h3 className={"mtcGetStartedComponent-heading"}>
        Get Started with NSS Pvt. Ltd.
      </h3>
      <div className={"mtcGetStartedComponent-borderContainer"}>
        <span className={"mtcGetStartedComponent-BoderBlue"}></span>
        <span className={"mtcGetStartedComponent-BoderWhite"}></span>
      </div>
      <button className={`${"mtcGetStartedComponent-btn"}`}>GET STARTED</button>
    </div>
  );
};

export default MtcGetStartedComponent;
