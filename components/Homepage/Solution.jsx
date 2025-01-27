import Link from "next/link";
import React from "react";

const Solution = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-[42px] text-heading font-bold">
        <span className="text-primary"> Solution </span> For
      </h1>

      <div className="grid xl:grid-cols-2 gap-4 mt-4 px-4 sm:px-20 sm:min-h-[650px]">
        {/* first box */}
        <div className="portfolioSlideCard grid sm:grid-cols-[1fr_2fr] justify-center rounded-lg shadow-lg py-10 px-10 gap-16">
          <div className="flex justify-center sm:block">
            <img src="/icons/enterprise.svg" height={136} width={142} />
          </div>
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
            <h1 className="text-3xl text-heading hover:text-primary font-bold">
              Enterprise
            </h1>
            <div>
              <p className="text-para mt-8 text-lg ">
                ESPs are complex, scalable, component-based, distributed and
                mission critical. ES software consists of a group of programs
                with 3rd party shared business applications.ES software
                ultimately enhances efficiency and productivity through business
                level support functionality.
              </p>
              <ul className="text-para flex flex-col items-center sm:items-start gap-6 mt-6 list-disc">
                <li className="marker:text-primary">Personalization</li>
                <li className="marker:text-primary">
                  High level of security–customized
                </li>
                <li className="marker:text-primary">
                  Increase productivity as it is tailored to your processes
                </li>
                <li className="marker:text-primary">Scalable </li>
                <li className="marker:text-primary">
                  Flexible to integrate any requirement
                </li>
                <li className="marker:text-primary">
                  Continuous and cost-effective support
                </li>
                <li className="marker:text-primary">
                  Seamless integration to legacy systems
                </li>
                <li className="marker:text-primary">
                  Exclusive ownership without license fee
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button className="border-2 border-primary px-4 py-1 rounded bg-primary text-white hover:shadow-md duration-200">
                <Link href="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </div>
        {/* second box */}
        <div className="portfolioSlideCard grid sm:grid-cols-[1fr_2fr] justify-center rounded-lg shadow-lg py-10 px-10 gap-16">
          <div className="flex justify-center sm:block">
            <img src="/icons/startup.svg" height={136} width={142} />
          </div>
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
            <h1 className="text-3xl text-heading hover:text-primary font-bold">
              Startup
            </h1>
            <div>
              <p className="text-para mt-8 text-lg">
                You have the idea, we have the skills to bring your startup
                concept to life! This is the most exciting part for us and for
                you as we bring something interesting to life by putting out
                heads together. We support entrepreneurs financially and
                technically to start something now.
              </p>
              <ul className="text-para flex flex-col items-center sm:items-start gap-6 mt-6 list-disc">
                <li className="marker:text-primary">
                  Technical support with cost effectiveness
                </li>
                <li className="marker:text-primary">Financial Subsidization</li>
                <li className="marker:text-primary">Long term partnership</li>
                <li className="marker:text-primary">
                  Flexibility to make changes
                </li>
                <li className="marker:text-primary">
                  Time to Market is shorter with us
                </li>
                <li className="marker:text-primary">
                  Experienced consulting to help you plan MVP and stages of the
                  product
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button className="border-2 border-primary px-4 py-1 rounded bg-primary text-white hover:shadow-md duration-200">
                <Link href="/contact">Contact us</Link>
              </button>
            </div>
          </div>
        </div>
        {/* main div */}
      </div>
    </div>
  );
};

export default Solution;
