import React, { useState } from "react";
import parse from "html-react-parser";

const defaultBtns = ["HOME ", "Products", "CRM"];
const BgContainerImg = ({ img, heading, isTab, btns = defaultBtns }) => {
  const [activeBtn, setActiveBtn] = useState(btns[2]);

  return (
    <section>
      <div className={`bgContainerCard-bgContainer`}>
        <div className={`bgContainerCard-bgImg`}>
          <img src={img} alt="img" className={`bgContainerCard-img`} />
          <div className={`bgContainerCard-textHeading`}>
            <h1>{parse(heading)}</h1>
            {isTab && (
              <div className={`bgContainerCard-buttonContainer`}>
                {btns.map((item, i) => (
                  <>
                    <button
                      className={`bgContainerCard-btns caption ${
                        activeBtn === item
                          ? "bgContainerCard-activeBtnClass"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveBtn(item);
                      }}
                      key={i}
                    >
                      {item}
                    </button>
                    {i !== btns.length - 1 && (
                      <span className={"bgContainerCard-border"}>/</span>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgContainerImg;
