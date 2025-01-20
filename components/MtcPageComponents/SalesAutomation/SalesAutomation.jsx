// import React from "react";
import styles from "./SalesAutomation.module.css";
// import ProphetCRMintegrationComponet from "../../../../partials/nssplPartials/ProphetCRMintegrationComponet/ProphetCRMintegrationComponet";
// import OpportunityManagementCard from "../../../../partials/nssplPartials/OpportunityManagementCard/OpportunityManagementCard";

// import TickIcon from "../../../../icons/TickIcon";
// import img from "./../../../../../assets/img/avidianCrm/SalesAutomation.png";

// import img2 from "./../../../../../assets/img/avidianCrm/ProphetCRMintegratio.png";
// import img3 from "./../../../../../assets/img/avidianCrm/Campaignmanagerfeature.png";
// import Emailtracking from "./../../../../../assets/img/avidianCrm/Email tracking.png";
// import salesimg from "./../../../../../assets/img/nssplimg/Sales.png";
// import EmbeddedOutlookCard from "../../../../partials/nssplPartials/EmbeddedOutlook/EmbeddedOutlookCard";

import ProphetCRMintegrationComponet from "../ProphetCRMintegrationComponet/ProphetCRMintegrationComponet";
import OpportunityManagementCard from "../../partials/OpportunityManagementCard/OpportunityManagementCard";
import EmbeddedOutlookCard from "../../partials/EmbeddedOutlook/EmbeddedOutlookCard";
import TickIcon from "../../icons/TickIcon";

const data = [
  {
    text: "Automate when and what actions are taken at every sales stage.",
  },
  {
    text: "Set reminders for key steps that keep you on track.",
  },
  {
    text: "Group Email function allows you to send personalized group emails through Outlook.",
  },
];
const points = [
  {
    text: "Developers can create and integrate applications that automatically perform tasks in Prophet.",
  },
  {
    text: "Helps to avoid spam filters and to prevent emails from bouncing back.",
  },
  {
    text: "Emails are personalized for each recipient using auto-filled content fields.",
  },
  {
    text: "Keeps track of sent, open, click-through, and unsubscribe rates.",
  },
];
const points1 = [
  {
    text: "Allows you to send out and track email campaigns through Prophet from Outlook.",
  },
  {
    text: "Helps to avoid spam filters and to prevent emails from bouncing back.",
  },
  {
    text: "Emails are personalized for each recipient using auto-filled content fields.",
  },
  {
    text: " Keeps track of sent, open, click-through, and unsubscribe rates.",
  },
];
const points2 = [
  {
    text: "Allows you to send out and track email campaigns through Prophet in Outlook.",
  },
  {
    text: "Helps to avoid spam filters and to prevent emails from bouncing back.",
  },
  {
    text: "Emails are personalized for each recipient using auto-filled content fields.",
  },
  {
    text: "Keeps track of sent, open, click-through, and unsubscribe rates.",
  },
];
const points3 = [
  {
    text: "Link emails, meetings, and tasks to records in your CRM database.",
  },
  {
    text: "Share emails with coworkers without having to forward them.",
  },
  {
    text: "Auto-link future communications to a specified contact, company, or opportunity.",
  },
  {
    text: "Delete emails from your Outlook inbox and keep them stored in Prophet CRM.",
  },
];
const points4 = [
  {
    text: "Visualize a relationship map of your connections to unlock warm referrals.",
  },
  {
    text: "Come to understand someone before even reaching out.",
  },
  {
    text: "Pull prospects from websites, web traffic, LinkedIn, and KnowledgeNet.ai’s database.",
  },
  {
    text: "Use AI to write intuitive emails targeted towards specific contacts.",
  },
];

const SalesAutomation = () => {
  return (
    <>
      <section className={"salesAutomation-section"}>
        <div className={"salesAutomation-innerContainer"}>
          <div className={"salesAutomation-imageContainer"}>
            <img src={"/imgs/avidianCrm/SalesAutomation.png"} alt="img" />
          </div>

          <div className={"salesAutomation-textContainer"}>
            <h3 className={"salesAutomation-heading"}>
              Sales automation and workflow.
            </h3>

            <div className={`caption`}>
              {data.map((item, i) => (
                <div key={i} className={"salesAutomation-pointItem"}>
                  <span>
                    <TickIcon />
                  </span>

                  <p
                    className={`fontRoboto ${"salesAutomation-aboutDescriptionText"}`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={"salesAutomation-border"}></div>
      </section>
      <ProphetCRMintegrationComponet
        Heading="Prophet CRM integration"
        img={"/imgs/avidianCrm/ProphetCRMintegratio.png"}
        points={points}
      />
      <div className={"salesAutomation-border"}></div>
      <ProphetCRMintegrationComponet
        img={"/imgs/avidianCrm/Campaignmanagerfeature.png"}
        Heading="Campaign Manager Features"
        points={points1}
        classes={"salesAutomation-flexDirection"}
      />
      <div className={"salesAutomation-border"}></div>

      <OpportunityManagementCard
        img={"/imgs/avidianCrm/Email tracking.png"}
        Heading="Email tracking"
        points={points3}
      />

      <EmbeddedOutlookCard
        img={"/imgs/nssplimg/Sales.png"}
        effectImg={""}
        Heading="AI Sales Intelligence"
        points={points4}
      />
    </>
  );
};

export default SalesAutomation;
