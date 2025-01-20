import React from "react";
// import styles from "./OpportunityManagement.module.css";
import TickIcon from "../../icons/TickIcon";

const OpportunityManagementCard = ({ Heading, img, points }) => {
  return (
    <section className={"opportunityManagementCard-section"}>
      <div className={"opportunityManagementCard-innerContainer"}>
        <div className={"opportunityManagementCard-textContainer"}>
          <h3 className={"opportunityManagementCard-heading"}>{Heading}</h3>

          <div className={`caption`}>
            {points.map((item, i) => (
              <div key={i} className={"opportunityManagementCard-pointItem"}>
                <span>
                  <TickIcon />
                </span>

                <p
                  className={`fontRoboto ${"opportunityManagementCard-aboutDescriptionText"}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={"opportunityManagementCard-imageContainer"}>
          <img src={img} alt="img" />
          {/* <img src={effectImg} alt="" className={'opportunityManagementCard-effect'} /> */}
          <div className={"opportunityManagementCard-effectBorderImg"}></div>
        </div>
      </div>
      <div className={"opportunityManagementCard-border"}></div>
    </section>
  );
};

export default OpportunityManagementCard;
