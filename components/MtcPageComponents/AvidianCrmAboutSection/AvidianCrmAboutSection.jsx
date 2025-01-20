import React from "react";
// import img from "../../../../assets/img/nssplimg/AvidainImg1.png";
// import { text } from "stream/consumers";
import TextFlexCard from "../../partials/TextFlexCard/TextFlexCard";

const AvidianCrmAboutSection = () => {
  return (
    <div>
      <TextFlexCard
        Heading="Industry-leading CRM geared towards user convenience."
        para="Prophet CRM is an easy-to-use, fast-to-implement CRM and contact manager embedded in Microsoft Outlook. It de-clutters and expedites your workflow with intuitive features."
        img={"/imgs/nssplimg/AvidainImg1.png"}
        btns={[{ text: "Get Started" }]}
      />
    </div>
  );
};

export default AvidianCrmAboutSection;
