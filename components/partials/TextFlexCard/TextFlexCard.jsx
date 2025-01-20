import React from "react";

const TextFlexCard = ({ Heading, img, para, btns }) => {
  return (
    <section>
      <div className={"textFlexCard-innerContainer"}>
        <div className={`${"textFlexCard-CardConainer"}`}>
          <div className={"textFlexCard-TextContainer"}>
            <h3 className={"textFlexCard-heading"}>{Heading}</h3>
            <h4 className="heading2 caption">{para}</h4>
            {btns &&
              btns.map((item, i) => (
                <button key={i} className={`btnPrimary ${"textFlexCard-btn"}`}>
                  {item.text}
                </button>
              ))}
          </div>
          <div className={"textFlexCard-imgContainer"}>
            <img
              src={img}
              width={600}
              height={600}
              alt=""
              className={"textFlexCard-img"}
            />
            {/* <img src={effectImg} alt="" className={'textFlexCard-effectImg'} /> */}
          </div>
        </div>
      </div>
      <div className={"textFlexCard-border"}></div>
    </section>
  );
};

export default TextFlexCard;
