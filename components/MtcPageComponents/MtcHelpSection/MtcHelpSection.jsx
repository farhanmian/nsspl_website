import React from "react";
import styles from "./MtcHelpSection.module.css";
// import TextHeading from "../../../../partials/TextHeading/TextHeading";

import TeamIcon from "../../icons/TeamIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import WebConferenceIcon from "../../icons/WebConferenceIcon";
import SecurityIcon from "../../icons/SecurityIcon";
import ErpSvgIcon from "../../icons/ErpSvgIcon";
import MtcHelpSectionCircleBgCard from "./MtcHelpSectionCircleBgCard/MtcHelpSectionCircleBgCard";

import Keyfeatures from "../../../public/imgs/nssplimg/mtcPhone.png";
import TextHeading from "../../partials/TextHeading/TextHeading";

const cardData = [
  {
    icon: <TeamIcon />,
    iconColor: "#EEDDFF",
    heading: "MY CRM",
    text: "Form winning strategies with a CRM that brings simplicity to complex daily processes.",
  },
  {
    icon: <DocumentIcon />,
    iconColor: "#DDE4FF",
    heading: "MY DOCUMENTS",
    text: "Store, share, and manage sensitive data and documents with security and confidence.",
  },
  {
    icon: <WebConferenceIcon />,
    iconColor: "#DDFFDE",
    heading: "MY WEB CONFERENCES",
    text: "Communicate and market to up to 1,000 people toll-free at any time from within the center of business.",
  },
  {
    icon: <SecurityIcon />,
    iconColor: "#FFDDF1",
    heading: "MY SECURITY",
    text: "With near military-grade data security, conquer your database with the assurance of its safety.",
  },

  {
    icon: <ErpSvgIcon />,
    iconColor: "#FFEFDD",
    heading: "MY ERP",
    text: "Integrate your CRM with your favorite products, apps, and software to boost efficiency and save time.",
  },
];

const descriptionCardData = [
  {
    img: "/imgs/mtc/about-crm-img.png",
    heading: "MY CRM",
    text: "Customer Relationship Management (CRM) is all about how you want to touch your Prospects and Customers. MTC understands key element in achieving efficiency and productivity is simplicity. Our comprehensive CRM solution goes beyond the boundaries of traditional CRM solutions by including features that will differentiate your sales team from the laundry list of competitors, and empower the sales and marketing teams to collaborate in a simple environment to form winning strategies.",
    imgMaxWidth: "750px",
  },
  {
    img: "/imgs/mtc/my-document-img.png",
    heading: "MY DOCUMENTS",
    text: "MTC’s ultra-secure cloud-based solutions address the issue of data security to remove a significant barrier to the adoption of an aggressive cloud strategy. MTC’s solutions are ideal for any organization that must meet high regulatory standards (such as HIPAA, SOX and GLBA) regarding data privacy and documentation.",
    imgMaxWidth: "750px",
    showBlueOverlay: true,
  },
  {
    img: "/imgs/mtc/mtc-web-conference-img.png",
    heading: "MY WEB CONFERENCES",
    text: "The key is collaboration among all of the participants. Being able to share documents, have open dialog, share an electronic whiteboard, and create projects and tasks to manage takeaways from that meeting. Then, going a step further, using MTC’s video conferencing capabilities, participants can see one another’s face, gestures, and body language to create the necessary energy and teamwork that will drive results.",
    imgMaxWidth: "750px",
  },
  {
    img: "/imgs/mtc/mtc-security-img.png",
    heading: "MY DOCUMENTS",
    text: "Data privacy is noted by CIOs as the single biggest reason for not adopting cloud and mobile solutions. My Security used in conjunction with My Documents will provide the security and forensics to ensure your company knows exactly what is happening with your data. My Security can be purchased as a stand-alone system (same new technology being introduced into Credit Card security today) or with any of MTC’s collaborative solutions.",
    imgMaxWidth: "750px",
    showBlueOverlay: true,
  },
  {
    img: "/imgs/mtc/mtc-erp-img.png",
    heading: "MY ERP",
    text: "My True ERP has a wide range of features suitable for many businesses, particularly distributed businesses in a wholesale, distribution and manufacturing environment. When combined with a 3rd party interactive desktop Point of Sale System with a Rewards program it can form the hub of a dispersed multi-branch retail management system.",
    imgMaxWidth: "500px",
  },
];

const Data = [
  {
    img: "/imgs/mtc/massage.svg",
    heading: "Real time communications",
    pay: `Instant messaging, video conferencing, and voice calling features enable users to communicate seamlessly, exchange information, and discuss ideas in real time,`,
    BgColor: "#EDEBFD",
  },
  {
    img: "/imgs/mtc/project.svg",
    heading: "Task and project management",
    pay: "Collaborative applications often include features for creating, assigning, and tracking tasks and projects. Users can set deadlines, allocate resources, monitor progress, and coordinate efforts effectively.",
    BgColor: "#E5FFEC",
  },
  {
    img: "/imgs/mtc/Workflow.svg",
    heading: "Workflow Automation",
    pay: `Some collaborative applications offer workflow automation capabilities, allowing users to streamline repetitive tasks, automate notifications, and improve efficiency through
    predefined workflows and process automation.`,
    BgColor: "#FFF1F1",
  },
];

const Data1 = [
  {
    img: "/imgs/mtc/File.svg",
    heading: "File sharing and document collaboration",
    pay: `These applications allow users to share files,
    documents, and other resources securely, collaborate on them simultaneously, track changes, and maintain version control.`,
    BgColor: "#FFEFDD",
  },
  {
    img: "/imgs/mtc/Calendar.svg",
    heading: "Calendar and scheduling",
    pay: `Integration with calendars and scheduling tools enables users to
    coordinate meetings, appointments, and events efficiently, avoiding scheduling conflicts and ensuring
    timely collaboration.`,
    BgColor: "#EAEAEA",
  },
  {
    img: "/imgs/mtc/Security.svg",
    heading: "Access Control and Security",
    pay: `Robust security measures, such as encryption, access controls, and
    user authentication, help safeguard sensitive information and ensure compliance with data privacy regulations.`,
    BgColor: "#fff8EA",
  },
];
const MtcHelpSection = () => {
  return (
    <>
      <section className={"mtcHelpSection-section"}>
        <div className={"mtcHelpSection-innerContainer"}>
          <TextHeading
            heading="How Can MY TRUE CLOUD help you?"
            text="Whether you’re looking to fill gaps or find a turn-key solution, our customizable search engine optimization and social media marketing services can help."
          />

          <div className={"mtcHelpSection-cardContainer"}>
            {cardData.map((item, i) => (
              <div key={i} className={"mtcHelpSection-card"}>
                <span
                  style={{ background: item.iconColor }}
                  className={"mtcHelpSection-icon"}
                >
                  {item.icon}
                </span>
                <h3 className={`${"mtcHelpSection-cardHeading"}`}>
                  {item.heading}
                </h3>
                <p className="overlay">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={"mtcHelpSection-detailCardList"}>
        {descriptionCardData.map((item, i) => (
          <>
            <MtcHelpSectionCircleBgCard
              key={i}
              {...item}
              cardClasses={i % 2 ? "mtcHelpSection-flexReverse" : ""}
            />
            {i + 1 !== descriptionCardData.length && (
              <div className={"mtcHelpSection-border"}></div>
            )}
          </>
        ))}
      </div>
      <div className={"mtcHelpSection-border"}></div>
      <div
        className={`${"mtcHelpSection-innerContainer"} ${"mtcHelpSection-mainClass"}`}
      >
        <TextHeading
          heading="Key features for collaborative applications"
          text="Whether you’re looking to fill gaps or find a turn-key solution, our customizable search engine optimization and social media marketing services can help."
        />
        <div className={"mtcHelpSection-mainContainer"}>
          <div className={"mtcHelpSection-cardContainer1"}>
            {Data.map((item, i) => (
              <div key={i} className={"mtcHelpSection-cards"}>
                <div
                  className={"mtcHelpSection-bgblueColor"}
                  style={{ background: item.BgColor }}
                >
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <p className={"mtcHelpSection-heading1"}>{item.heading}</p>
                  <p className={`${"mtcHelpSection-pay"} heading2`}>
                    {item.pay}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img
            src={"/imgs/nssplimg/mtcPhone.png"}
            alt=""
            className={"mtcHelpSection-img"}
          />
          <div className={"mtcHelpSection-cardContainer1"}>
            {Data1.map((item, i) => (
              <div key={i} className={"mtcHelpSection-cards"}>
                <div
                  className={"mtcHelpSection-bgblueColor"}
                  style={{ background: item.BgColor }}
                >
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <p className={"mtcHelpSection-heading1"}>{item.heading}</p>
                  <p className={`${"mtcHelpSection-pay"} heading2`}>
                    {item.pay}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MtcHelpSection;
