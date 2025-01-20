import React from "react";
// import styles from "./MtcQuoteForm.module.css";
import parse from "html-react-parser";

import {
  AccessTime,
  DraftsOutlined,
  LocationOn,
  PhoneEnabledOutlined,
} from "@mui/icons-material";
import SendIcon from "../../../icons/SendIcon";
// import SendIcon from "../../../icons/SendIcon";

const points = [
  {
    icon: <LocationOn />,
    heading: "Dubai, UAE",
  },
  {
    icon: <AccessTime />,
    heading: "<b>Office Hours:</b> Sat - Thu / 8AM - 10PM",
  },
  {
    icon: <DraftsOutlined />,
    heading: "<b>Email:</b> vueporteq@gmail.com",
  },
  {
    icon: <PhoneEnabledOutlined />,
    heading: "<b>Phone number:</b> 6789379",
  },
];

const MtcQuoteForm = () => {
  return (
    <section className={"mtcQuoteForm-section"}>
      <div className={"mtcQuoteForm-innerContainer"}>
        <div className={"mtcQuoteForm-textContainer"}>
          <h3 className={` ${"mtcQuoteForm-aboutTitle"}`}>
            Schedule a Call Today
          </h3>
          <p
            className={`caption fontRoboto ${"mtcQuoteForm-aboutDescription"} ${"mtcQuoteForm-aboutDescriptionText"}`}
          >
            Schedule a call today to see how we can modernize your business and
            enhance your productivity by applying technology in the right
            quantum at the right place!
          </p>
          <h3 className={` ${"mtcQuoteForm-aboutText"}`}>
            Contact Us & Let&apos;s Collaborate!
          </h3>
          <p
            className={`caption fontRoboto ${"mtcQuoteForm-aboutDescription"} ${"mtcQuoteForm-aboutDescriptionText"}`}
          >
            We would love to hear how we can bring your possibilities to reality
            through technology and give away 2hrs of free consulting. So call us
            now..
          </p>

          <div className={`${"mtcQuoteForm-pointsContainer"} caption`}>
            {points.map((item, i) => (
              <div key={i} className={"mtcQuoteForm-pointItem"}>
                <span className={"mtcQuoteForm-icons"}>{item.icon}</span>
                <div>
                  <p className={"mtcQuoteForm-pointItemHeading"}>
                    {parse(item.heading)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className={"mtcQuoteForm-fromContainer"}>
          <h3 className={"mtcQuoteForm-messageText"}>Request a Quote</h3>
          <p className={`fontRoboto caption ${"mtcQuoteForm-formText"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation
          </p>
          <div className={"mtcQuoteForm-inputContainer"}>
            <select className={"mtcQuoteForm-inquiryText"}>
              <option value="">Select type of inquiry*</option>
              <option value="">Select type of inquiry1</option>
              <option value="">Select type of inquiry2</option>
            </select>
          </div>
          <div className={"mtcQuoteForm-inputContainer"}>
            <input
              type="text"
              placeholder="Name"
              className={"mtcQuoteForm-inputText"}
            />
          </div>
          <div className={"mtcQuoteForm-emailContainer"}>
            <div className={"mtcQuoteForm-inputContainer"}>
              <input
                type="email"
                placeholder="Email*"
                className={"mtcQuoteForm-inputText"}
              />
            </div>
            <div className={"mtcQuoteForm-inputContainer"}>
              <input
                type="text"
                placeholder="Company Name*"
                className={"mtcQuoteForm-inputText"}
              />
            </div>
          </div>
          <div className={"mtcQuoteForm-emailContainer"}>
            <div className={"mtcQuoteForm-inputContainer"}>
              <input
                type="text"
                placeholder="Country Code*"
                className={"mtcQuoteForm-inputText"}
              />
            </div>
            <div className={"mtcQuoteForm-inputContainer"}>
              <input
                type="text"
                placeholder="Phone Number*"
                className={"mtcQuoteForm-inputText"}
              />
            </div>
          </div>
          <div className={"mtcQuoteForm-inputContainer"}>
            <textarea
              className={"mtcQuoteForm-inputContainerInput"}
              placeholder=" Tell Us about your project"
            ></textarea>
          </div>
          <button className={` ${"mtcQuoteForm-btn"}`}>
            Send Message <SendIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default MtcQuoteForm;
