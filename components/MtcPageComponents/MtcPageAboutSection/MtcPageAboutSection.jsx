import React from "react";
import TextFlexCard from "../../partials/TextFlexCard/TextFlexCard";

const MtcPageAboutSection = () => {
  return (
    <TextFlexCard
      Heading="Integrated Solutions for Seamless Business Operations"
      para="Set of digital tools and platforms designed for Collaborative applications. This helps organizations to facilitate communication, coordination, and cooperation among individuals or teams working together on projects or tasks, regardless of their physical location."
      img={"/imgs/mtc-about.png"}
      btns={[{ text: "Get Started" }]}
    />
  );
};

export default MtcPageAboutSection;
