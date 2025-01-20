import React from "react";
import TickIcon from "../../icons/TickIcon";
// import TickIcon from "../../../icons/TickIcon";

const EmbeddedOutlookCard = ({ Heading, img, effectImg, points }) => {
  return (
    <section className={"embeddedOutlookCard-section"}>
      <div className={"embeddedOutlookCard-innerContainer"}>
        <div className={"embeddedOutlookCard-imageContainer"}>
          <img src={img} alt="img" />
          {/* <img src={effectImg} alt="" className={'embeddedOutlookCard-effectImg'} /> */}
        </div>

        <div className={"embeddedOutlookCard-textContainer"}>
          <h3 className={"embeddedOutlookCard-heading"}>{Heading}</h3>

          <div className={`caption`}>
            {points.map((item, i) => (
              <div key={i} className={"embeddedOutlookCard-pointItem"}>
                <span>
                  <TickIcon />
                </span>

                <p
                  className={`fontRoboto ${"embeddedOutlookCard-aboutDescriptionText"}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"embeddedOutlookCard-border"}></div>
    </section>
  );
};

export default EmbeddedOutlookCard;
