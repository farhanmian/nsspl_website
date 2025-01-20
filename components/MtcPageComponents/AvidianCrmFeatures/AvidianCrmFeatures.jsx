import React from "react";

import ErpItSolution3 from "../../icons/ErpItSolution3";

import TextHeading from "../../partials/TextHeading/TextHeading";
import FeaturesIcon1 from "../../icons/FeaturesIcon1";
import FeaturesIcon2 from "../../icons/FeaturesIcon2";
import FeaturesIcon3 from "../../icons/FeaturesIcon3";

const data = [
  {
    icon: <FeaturesIcon1 />,
    heading: "Reporting and analytics dashboards",
    pay: "Users can monitor their cloud resources in real time and access analytics to gain insights",
    BgColor: "#B9E8F2",
  },
  {
    icon: <FeaturesIcon2 />,
    heading: "Document generation",
    pay: "Uploading, organizing, and managing files in the cloud, including folders, file sharing, and version control.",
    BgColor: "#EEDDFF",
  },
  {
    icon: <ErpItSolution3 />,
    heading: "Sales automation and workflow",
    pay: "The product ensures accessibility for users with disabilities and promotes inclusivity in its design and features.",
    BgColor: "#DDE0FF",
  },
  {
    icon: <FeaturesIcon3 />,
    heading: "CRM mobile app",
    pay: "The product ensures accessibility for users with disabilities and promotes inclusivity in its design and features.",
    BgColor: "#DDFFDE",
  },
];
const AvidianCrmFeatures = () => {
  return (
    <section style={{ backgroundColor: "#F7F7F7" }}>
      <div className={"avidianCrmFeatures-innerContainer"}>
        <TextHeading
          heading="Features"
          text="Whether you’re looking to fill gaps or find a turn-key solution, our customizable search engine optimization and social media marketing services can help."
        />
        <div className={"avidianCrmFeatures-imgContainer"}>
          {data.map((item, i) => (
            <div key={i} className={"avidianCrmFeatures-card"}>
              <div
                className={"avidianCrmFeatures-bgblueColor"}
                style={{ background: item.BgColor }}
              >
                {item.icon}
              </div>
              <h4 className={`${"avidianCrmFeatures-text"} body1 heading2`}>
                {item.heading}
              </h4>
              <p className={`${"avidianCrmFeatures-pay"} heading2`}>
                {item.pay}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvidianCrmFeatures;
