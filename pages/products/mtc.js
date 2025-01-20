import Head from "next/head";
import React from "react";
import BgContainerImg from "../../components/partials/BgContainerCard/BgContainerImg";
import MtcPageAboutSection from "../../components/MtcPageComponents/MtcPageAboutSection/MtcPageAboutSection";
import TextFlexCard from "../../components/partials/TextFlexCard/TextFlexCard";
import MtcHelpSection from "../../components/MtcPageComponents/MtcHelpSection/MtcHelpSection";
import TechnologyImgCard from "../../components/MtcPageComponents/TechnologyImgCard/TechnologyImgCard";
import MtcQuoteForm from "../../components/MtcPageComponents/MtcHelpSection/MtcQuoteForm/MtcQuoteForm";
import MtcAvidianCrm from "../../components/MtcPageComponents/MtcAvidianCrm/MtcAvidianCrm";
import MtcGetStartedComponent from "../../components/MtcPageComponents/MtcGetStartedComponent/MtcGetStartedComponent";
import MyTrueCard from "../../components/MtcPageComponents/MyTrueCard/MyTrueCard";

const mtc = () => {
  return (
    <>
      <Head>
        <title>MTC</title>
      </Head>
      <BgContainerImg
        img={"/imgs/mtc-header.png"}
        heading="My true cloud"
        isTab={true}
      />
      <MtcPageAboutSection />
      <MtcHelpSection />
      <TechnologyImgCard
        bgImageClass={"technologyImgCard-mtcBg"}
        text="Experience seamless integration with our partner brands, ensuring optimal performance and collaboration on the <span className='textOrange' >MTC platform</span>."
        btnText="View plans"
      />
      <MtcQuoteForm />
      <MyTrueCard />
      {/* <MtcAvidianCrm heading={"My True Cloud"} /> */}
      <MtcGetStartedComponent />
    </>
  );
};

export default mtc;
