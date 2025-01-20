import React from "react";
import Heading from "../Heading";

const AboutContent = () => {
  return (
    <section className="mt-6">
      <Heading title={"About"} highlighted={"NSS"} />
      <div className=" my-10 mt-2">
        <div className="grid md:grid-cols-[3fr_4fr] md:gap-5 items-center">
          <div className="flex flex-col mx-6">
            <img src="/imgs/aboutcontent.png" width={500} height={400} />
          </div>

          <div className="flex flex-col  text-center sm:text-left">
            <p className="text-base leading-9 sm:pr-10">
              As one of the leading Information Technology consulting companies,
              NSS Private Limited delivers tailored IT services to organizations
              globally.
              <br /> <br />
            </p>
            <p className="text-base leading-9 sm:pr-10">
              With NSS as your partner, we can heap your organization forward
              with highly effective IT strategies and implement innovative Cloud
              solutions.
              <br /> <br />
            </p>
            <p className="text-base leading-9 sm:pr-10">
              NSS is focused on developing highly secure and scalable Mobile and
              Web based cloud solutions for our Global Clients with complete
              Vertical support.
              <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
