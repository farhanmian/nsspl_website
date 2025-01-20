import React from "react";
import TickIcon from "../../icons/TickIcon";

const points = [
  {
    heading: "Simplify data entry with an Outlook CRM.",
    text: "Prophet CRM improves data workflow by adopting Outlook’s native contacts into CRM contacts and company records, making the transition a breeze. Prophet allows for consistent data entry speed by putting your CRM in Outlook.",
  },
  {
    heading: "Ease the transition with Outlook workflow software.",
    text: "Enhance your current business workflow by enhancing the Outlook features you already know and use with workflow CRM features from Prophet.",
  },
];

const AvidianCrmOutlook = () => {
  return (
    // <section className="section">
    //   <ImgTextFlexComponent
    //     isTitle={false}
    //     img={img}
    //     MainHeading="How can Prophet CRM in Outlook help you?"
    //     para="CRM needs differ based on the industry, company, and role someone works in. Most CRMs offer an organizational database system and a way to track communications with clients but may not have the specific tools team members need to be on their A-game. CRM must fit your needs and grow alongside you.
    //     Prophet is a catch-all CRM for the needs of people from different areas of expertise. With customizable data fields, report templates, and automation of sales stages, Prophet flexes to fit in your work environment, not the other way around."
    //     btn={false}
    //     imgWidth="50rem"
    //   />
    // </section>
    <section className={"avidianCrmOutlook-section"}>
      <div className={"avidianCrmOutlook-innerContainer"}>
        <div className={"avidianCrmOutlook-imageContainer"}>
          <img src={"/imgs/avidianCrm/CrmOutlook.png"} alt="img" />
        </div>

        <div className={"avidianCrmOutlook-textContainer"}>
          <h3 className={"avidianCrmOutlook-heading"}>
            How can Prophet CRM for Outlook help you?
          </h3>
          <p
            className={`caption fontRoboto ${"avidianCrmOutlook-aboutDescription"} ${"avidianCrmOutlook-aboutDescriptionText"}`}
          >
            CRM needs differ based on the industry, company, and role someone
            works in. Most CRMs offer an organizational database system and a
            way to track communications with clients, but may not have the
            specific tools team members need to be on their A-game. CRM must fit
            your needs and grow alongside you. Prophet is a catch-all CRM for
            the needs of people from different areas of expertise. With
            customizable data fields, report templates, and automation of sales
            stages, Prophet flexes to fit in your work environment, not the
            other way around.
          </p>

          <div className={`${"avidianCrmOutlook-pointsContainer"} caption`}>
            {points.map((item, i) => (
              <div key={i} className={"avidianCrmOutlook-pointItem"}>
                <span>
                  <TickIcon />
                </span>
                <div>
                  <p className={"avidianCrmOutlook-pointItemHeading"}>
                    {item.heading}
                  </p>
                  <p
                    className={`fontRoboto ${"avidianCrmOutlook-aboutDescriptionText"}`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvidianCrmOutlook;
