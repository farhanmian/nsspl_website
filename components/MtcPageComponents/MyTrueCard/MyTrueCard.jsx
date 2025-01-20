import React from "react";

const MyTrueCard = () => {
  return (
    <section className={"myTrueCloudCard-sectionBgColor"}>
      <div className={"myTrueCloudCard-innerContainer"}>
        <div className={"myTrueCloudCard-TextContainer"}>
          <p className={"myTrueCloudCard-FeaturedHeading"}>FEATURED PRODUCT</p>
          <h3 className={"myTrueCloudCard-heading"}>MY TRUE CLOUD</h3>
          <h4 className="heading2 caption">
            Set of digital tools and platforms are designed for Collaborative
            applications. This helps organizations to facilitate communication,
            coordination, and cooperation among individuals or teams working
            together on projects or tasks, regardless of their physical
            location.
          </h4>
          <button className={`${"myTrueCloudCard-btn"}`}>VIEW PRODUCT</button>
        </div>

        <img
          src={"/imgs/mtc/mtc-about.png"}
          alt="img"
          className={"myTrueCloudCard-img"}
        />
      </div>
    </section>
  );
};

export default MyTrueCard;
