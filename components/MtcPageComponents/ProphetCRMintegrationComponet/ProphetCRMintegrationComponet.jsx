import React from "react";
// import styles from "./ProphetCRMintegrationComponet.module.css";
import TickIcon from "../../icons/TickIcon";

const ProphetCRMintegrationComponet = ({ Heading, img, points, classes }) => {
  return (
    <section className={"prophetCRMintegrationComponet-section"}>
      <div
        className={`${classes} ${"prophetCRMintegrationComponet-innerContainer"}`}
      >
        <div className={"prophetCRMintegrationComponet-textContainer"}>
          <h3 className={"prophetCRMintegrationComponet-heading"}>{Heading}</h3>

          <div className={`caption`}>
            {points.map((item, i) => (
              <div
                key={i}
                className={"prophetCRMintegrationComponet-pointItem"}
              >
                <span>
                  <TickIcon />
                </span>

                <p
                  className={`fontRoboto ${"prophetCRMintegrationComponet-aboutDescriptionText"}`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={"prophetCRMintegrationComponet-imageContainer"}>
          <img src={img} alt="img" />
        </div>
      </div>
      <div className={"prophetCRMintegrationComponet-border"}></div>
    </section>
  );
};

export default ProphetCRMintegrationComponet;
