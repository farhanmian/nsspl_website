import Head from "next/head";
import React from "react";
import BgContainerImg from "../../components/partials/BgContainerCard/BgContainerImg";
import AvidianCrmAboutSection from "../../components/MtcPageComponents/AvidianCrmAboutSection/AvidianCrmAboutSection";
import AvidianCrmOutlook from "../../components/MtcPageComponents/AvidianCrmOutlook/AvidianCrmOutlook";
import AvidianCrmFeatures from "../../components/MtcPageComponents/AvidianCrmFeatures/AvidianCrmFeatures";
import EmbeddedOutlook from "../../components/MtcPageComponents/AvidianCrmEmbeddedOutlook/AvidianCrmEmbeddedOutlook";
import SalesAutomation from "../../components/MtcPageComponents/SalesAutomation/SalesAutomation";
import TechnologyImgCard from "../../components/MtcPageComponents/TechnologyImgCard/TechnologyImgCard";
import MtcQuoteForm from "../../components/MtcPageComponents/MtcHelpSection/MtcQuoteForm/MtcQuoteForm";
import MtcAvidianCrm from "../../components/MtcPageComponents/MtcAvidianCrm/MtcAvidianCrm";
import MtcGetStartedComponent from "../../components/MtcPageComponents/MtcGetStartedComponent/MtcGetStartedComponent";
const avidiancrm = () => {
  return (
    <>
      <Head>
        <title>MTC</title>
      </Head>
      <BgContainerImg
        btns={["HOME ", "Products", "Avidian-CRM"]}
        img={"/imgs/avidianCrm/avidianCrmHeader.png"}
        heading="Avidian CRM"
        isTab={true}
      />
      <AvidianCrmAboutSection />
      <AvidianCrmOutlook />
      <AvidianCrmFeatures />
      <EmbeddedOutlook />
      <SalesAutomation />
      <TechnologyImgCard
        bgImageClass={"avidiancrm-technologyCardImg"}
        text="See what’s possible when you have growth-friendly technology and award-winning support behind you."
        btnText="VIEW PLANS"
      />
      <MtcQuoteForm />
      <MtcAvidianCrm heading={"Avidian CRM"} />
      <MtcGetStartedComponent />
    </>
  );
};

export default avidiancrm;
