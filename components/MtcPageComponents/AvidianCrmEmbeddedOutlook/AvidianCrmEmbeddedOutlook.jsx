import React from "react";
// import img1 from "./../../../../../assets/img/avidianCrm/opportunity.png";
// import Embedded from "./../../../../../assets/img/nssplimg/Embedded.png";
// import Reporting from "../../../../../assets/img/nssplimg/Reporting.png";
// import DocumentImg from "./../../../../../assets/img/avidianCrm/Document.png";
// import effectImg from "./../../../../../assets/img/nssplimg/Embedded.png";

import EmbeddedOutlookCard from "../../partials/EmbeddedOutlook/EmbeddedOutlookCard";
import OpportunityManagementCard from "../../partials/OpportunityManagementCard/OpportunityManagementCard";

const points = [
  {
    text: "Embedded directly into Microsoft Outlook.",
  },
  {
    text: "Synchronizes and upgrades your team’s contacts, calendars, and functions.",
  },
  {
    text: "Adopts Outlook’s native contacts into CRM contact and company records.",
  },
  {
    text: "Our dedicated onboarding team guarantees a smooth transition.",
  },
];

const points1 = [
  {
    text: "Facilitates the tracking of quality data.",
  },
  {
    text: "Automatically tracks communications, events, and more.",
  },
  {
    text: "Data is presented in easily digestible, spreadsheet-like displays.",
  },
  {
    text: "Advanced filtering, sorting, and look-up capabilities.",
  },
  {
    text: "Allows you to save list views of refined data groups.",
  },
  {
    text: "Has numerous customizable data fields.",
  },
];

const points2 = [
  {
    text: "Portrays workplace trends in an interactive and visually accessible format.",
  },
  {
    text: "Automatically fills your report templates with data from your database.",
  },
  {
    text: "Stores your reports cleanly inside Outlook and Prophet CRM.",
  },
];

const points3 = [
  {
    text: "Produces Microsoft documents according to pre-defined templates.",
  },
  {
    text: "Auto-fills documents with data from the relevant opportunity.",
  },
  {
    text: "Customizable templates allow you to tailor reports to your specific needs.",
  },
  {
    text: "Creates hyperlinks to documents wherever you store them.",
  },
];

const EmbeddedOutlook = () => {
  return (
    <>
      <EmbeddedOutlookCard
        img={"/imgs/nssplimg/Embedded.png"}
        effectImg={"/imgs/nssplimg/Embedded.png"}
        Heading="Embedded in Outlook"
        points={points}
      />
      <OpportunityManagementCard
        img={"/imgs/avidianCrm/opportunity.png"}
        Heading="Contact, company, and opportunity management"
        points={points1}
      />
      <EmbeddedOutlookCard
        img={"/imgs/nssplimg/Reporting.png"}
        effectImg={""}
        Heading="Reporting and analytics dashboards."
        points={points2}
      />
      <OpportunityManagementCard
        img={"/imgs/avidianCrm/Document.png"}
        Heading="Document generation feature"
        points={points3}
      />
    </>
  );
};

export default EmbeddedOutlook;
