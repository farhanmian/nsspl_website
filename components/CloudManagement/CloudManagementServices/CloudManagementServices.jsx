import React from "react";
// import TextHeading from "../../../partials/TextHeading/TextHeading";
import styles from "./CloudManagementServices.module.css";
import TextHeading from "../../partials/TextHeading/TextHeading";

const cardData = [
  {
    heading: "Cloud Migration",
    pay: "Seamlessly transition your data, applications, and workloads to the cloud with minimal downtime and maximum efficiency. Our migration experts ensure a smooth and secure migration process.",
    BgColor: "#EDEBFD",
  },
  {
    heading: "Cloud Optimization",
    pay: "Maximize your cloud performance and reduce costs with our optimization services. We analyze your cloud environment to identify and implement cost-saving and performance-enhancing strategies.",
    BgColor: "#FFF1F1",
  },
  {
    heading: "Cloud Security",
    pay: "Protect your cloud infrastructure with our advanced security solutions. We offer robust security measures, including threat detection, data encryption, and compliance management to safeguard your data",
    BgColor: "#E5FFEC",
  },
  {
    heading: "Cloud Monitoring and Support",
    pay: "Stay on top of your cloud environment with our 24/7 monitoring and support services. We provide real-time insights, proactive maintenance, and rapid issue resolution to ensure uninterrupted operations",
    BgColor: "#EAEAEA",
  },
];
const CloudManagementServices = () => {
  return (
    <section className={styles.borderBottom}>
      <div className={styles.innerContainer}>
        <TextHeading
          heading="Our Comprehensive Cloud Management Services"
          text="Seamlessly upload, organize, and access documents from anywhere with our intuitive cloud-based document management system."
        />
        <div className={styles.cardContainer}>
          {cardData.map((item, i) => (
            <div className={styles.cards}>
              <div
                className={styles.bgblueColor}
                style={{ background: item.BgColor }}
              ></div>
              <div>
                <p className={styles.heading}>{item.heading}</p>
                <p className={`${styles.pay} heading2`}>{item.pay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudManagementServices;
