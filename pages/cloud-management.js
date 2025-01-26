import Head from "next/head";
import React from "react";
import BgContainerImg from "../components/partials/BgContainerCard/BgContainerImg";
import TextFlexCard from "../components/partials/TextFlexCard/TextFlexCard";
import CloudManagementAbout from "../components/CloudManagement/CloudManagementAbout";
import ErpitSolutions from "../components/CloudManagement/CloudManagementServices/CloudManagementServices";
import WhyOurCloudManagement from "../components/CloudManagement/WhyOurCloudManagement/WhyOurCloudManagement";
import CloudInfrastructureManagement from "../components/CloudManagement/CloudInfrastructureManagement/CloudInfrastructureManagement";
import CloudDataSecurity from "../components/CloudManagement/CloudDataSecurity";

const CloudManagement = () => {
  return (
    <>
      <Head>
        <title>Cloud Management</title>
      </Head>
      <BgContainerImg
        img={"/imgs/cloud-management.png"}
        heading="Cloud Management"
        isTab={false}
      />

      <CloudManagementAbout />

      <ErpitSolutions />

      <WhyOurCloudManagement />

      <CloudInfrastructureManagement />

      <CloudDataSecurity />

      {/* <TextFlexCard
        Heading="Empower Your Business with Comprehensive Cloud Management Services"
        para="Our company provides end-to-end cloud management solutions designed to help businesses harness the full potential of cloud computing. From initial setup to ongoing management and optimization, our team of experts ensures your cloud infrastructure is secure, efficient, and scalable"
        img={"/imgs/cloud-page-about.png"}
        btns={[{ text: "Get Started" }]}
      /> */}
    </>
  );
};

export default CloudManagement;
