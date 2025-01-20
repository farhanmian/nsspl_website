import React from "react";
// import img from "./../../../../../assets/img/mtc/MtcAvidianCrm.png";

const MtcAvidianCrm = ({ heading }) => {
  return (
    <section className={"mtcAvidianCrm-sectionBgColor"}>
      <div className={"mtcAvidianCrm-innerContainer"}>
        <div className={"mtcAvidianCrm-TextContainer"}>
          <p className={"mtcAvidianCrm-FeaturedHeading"}>FEATURED PRODUCT</p>
          <h3 className={"mtcAvidianCrm-heading"}>{heading}</h3>
          <h4 className="heading2 caption">
            Prophet CRM is an easy-to-use, fast-to-implement CRM and contact
            manager embedded in Microsoft Outlook. It de-clutters and expedites
            your workflow with intuitive features.
          </h4>
          <button className={`${"mtcAvidianCrm-btn"}`}>VIEW PRODUCT</button>
        </div>

        <img
          src={"/imgs/mtc/MtcAvidianCrm.png"}
          alt=""
          className={"mtcAvidianCrm-img"}
        />
      </div>
    </section>
  );
};

export default MtcAvidianCrm;
