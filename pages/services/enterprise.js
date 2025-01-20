import React from "react";
import Link from "next/link";
import Industries from "../../components/About/Industries";
import QuickStart from "../../components/Homepage/QuickStart";
import TechStack from "../../components/Homepage/TechStack";
import Head from "next/head";
import { BsShieldFillCheck } from "react-icons/bs";

function Enterprise() {
  return (
    <>
      <Head>
        <title>
          Enterprise Mobile Application Management & Development Services,
          India-based Company
        </title>
        <meta
          name="description"
          content="NSS designs and builds custom enterprise mobile applications from the ground up implementing enterprise requirements and unique company-related functionality."
        />
        <meta
          name="keywords"
          content="Develop an app, Apps for enterprise, Enterprise application development, Enterprise Mobile Application Development, Mobile app development for Enterprise, Enterprise mobile app development, Enterprise mobile app development company, App development cost, "
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
      </Head>
      {/* Hero Section STARTS */}
      <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-5 sm:pb-10 sm:mx-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col mb-16 md:mb-0">
            <div className="title lg:text-left text-center my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                <span className="text-primary"> Enterprise </span>
                Software Development
              </h1>
            </div>
            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              Enhancing business{" "}
              <span className="text-primary">agility and efficiency</span> with
              cutting-edge{" "}
              <span className="text-primary">web and mobile solutions.</span>
            </p>
            <div className="flex lg:justify-center lg:md:justify-start justify-between justify-start sm:gap-8 w-full">
              <Link href="/contact">
                <button className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Let’s discuss your project
                </button>
              </Link>
              <span className="mt-2 lg:text-[17px] text-[12px] text-heading font-bold">
                Or Call +918448229553
              </span>
            </div>
          </div>
          {/* <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            <h1 className="font-bold sm:leading-[45px] text-heading">
              <span className="text-primary"> Enterprise </span>
              Software Development
            </h1>
            <p className="mb-8 text-center text-2xl md:text-left leading-relaxed">
              Enhancing business{" "}
              <span className="text-primary">agility and efficiency</span> with
              cutting-edge{" "}
              <span className="text-primary">web and mobile solutions.</span>
            </p>
            <div className="grid sm:grid-cols-2 flex sm:justify-center md:justify-start sm:gap-8 w-full">
              <Link href="/contact">
                <button className="pt-4 pb-4 pr-5 pl-5 bg-primary lg:text-2xl font-bold text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  LET’S DISCUSS YOUR PROJECT
                </button>
              </Link>
              <span className="pt-4 pb-4 pr-5 text-heading lg:text-2xl font-bold">
                Or Call +918448229553
              </span>
            </div>
          </div> */}

          <div className="">
            <img
              className="object-contain object-center rounded sm:h-[400px] lg:mr-[140px]"
              alt="hero"
              src="/backgrounds/enterprise_banner.png"
            />
          </div>
        </div>
      </section>
      {/* Hero Section ENDS */}

      {/* Enterprise software development start------------------------------------------------------------ */}
      <section className="bg-lightGray sm:py-1">
        <div className="title text-center items-center my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading ">
            <span className="text-primary">
              Enterprise Software Development
            </span>{" "}
            <br />
            Services
          </h1>
        </div>
        <div className="grid gap-6 text-gray-600 sm:grid-cols-3 lg:mx-16 mx-7 md:grid-cols-3 lg:grid-cols-3">
          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <div className="flex">
              <img
                src="/icons/web-dev-icons/custom-enterprise.svg"
                alt=""
                height={40}
                width={40}
              />
              <h1 className="font-bold text-heading ml-2">
                <span className="text-primary">CUSTOM</span> ENTERPRISE SOFTWARE
                DEVELOPMENT
              </h1>
            </div>

            <p className="text-base lg:text-md mt-3">
              Support your business infrastructure with scalable software that
              improves key facets of your enterprise. Get access to our
              industry-specific knowledge to design, build, and scale your new
              enterprise software solution.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <div className="flex">
              <img
                src="/icons/web-dev-icons/mobility.svg"
                alt=""
                height={40}
                width={40}
              />
              <h1 className="font-bold ml-2 text-heading">
                ENTERPRISE{" "}
                <span className="text-primary">MOBILITY SERVICES</span>
              </h1>
            </div>
            <p className="text-base lg:text-md mt-3">
              Our end-to-end enterprise mobility solutions allow organizations
              to safely and efficiently manage the extensive use of mobile
              devices that can support a large number of users in their business
              environment.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white  rounded-xl shadow-lg justify-center items-left">
            <div className="flex">
              <img
                src="/icons/web-dev-icons/transform.svg"
                alt=""
                height={40}
                width={40}
              />
              <h1 className="font-bold ml-2 text-heading">
                <span className="text-primary">DIGITAL TRANSFORMATION</span>{" "}
                SERVICES
              </h1>
            </div>
            <p className="text-base lg:text-md mt-3">
              NSS is your reliable digital transformation partner. Leverage our
              expertise in using digital technologies to create new or modify
              existing business processes to meet changing market requirements.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <div className="flex">
              <img
                src="/icons/web-dev-icons/data.svg"
                alt=""
                height={40}
                width={40}
              />
              <h1 className="font-bold ml-2 text-heading">
                <span className="text-primary">DATA</span> MANAGEMENT
              </h1>
            </div>
            <p className="text-base lg:text-md mt-3">
              Stay ahead with effective data management strategies, predictive
              analytics, and intelligent automation using our in-depth knowledge
              of emerging technologies such as Big Data, Data Science, Cognitive
              Computing, Blockchain and more.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <div className="flex">
              <img
                src="/icons/web-dev-icons/software.svg"
                alt=""
                height={40}
                width={40}
              />
              <h1 className="font-bold ml-2 text-heading">
                <span className="text-primary">SOFTWARE</span> INTEGRATION
              </h1>
            </div>
            <p className="text-base lg:text-md mt-3">
              Improve your software infrastructure with well-built
              microservices, reliable API, and data integration. Launch your
              business strategy with our comprehensive enterprise application
              development, or use our enterprise app integration solutions.
            </p>
          </div>

          <div className="flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <div className="flex">
              <img
                src="/icons/web-dev-icons/legacy.svg"
                alt=""
                height={40}
                width={40}
              />
              <h1 className="font-bold ml-2 text-heading">
                LEGACY{" "}
                <span className="text-primary">APPLICATION MODERNIZATION</span>
              </h1>
            </div>
            <p className="text-base lg:text-md mt-3">
              Outdated software comes with much bigger risks and can be
              expensive to maintain. Hire our top minds to perform an in-depth
              feature and technical analysis of your legacy solution and improve
              it with the latest tools and technologies.
            </p>
          </div>
        </div>
        <div className="items-center flex flex-col mt-10">
          <Link href="/contact">
            <button className="mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Consult Our Experts
            </button>
          </Link>
        </div>
      </section>
      {/* Enterprise software development End-------------------------------------------------------------------------- */}

      {/* Enterprise Software start------------------------------------------------------------ */}
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:mx-10 md:grid-cols-2 items-center">
          <div className="flex flex-col">
            <div className="title lg:text-left mx-7 text-center my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                <span className="text-primary"> Enterprise </span>
                Software Development
              </h1>
            </div>

            <h1 className="font-bold text-lg text-heading text-heading mx-7 mt-5 mb-2">
              <li className="">Flexible hiring models:</li>
            </h1>
            <p className="text-gray-600 mx-7">
              We offer clients the flexibility of choosing between a dedicated
              team model or a fixed pricing model as per their business needs.
            </p>

            <h1 className="font-bold text-lg text-heading text-heading mx-7 mt-5 mb-2">
              <li className="">Agile methodology:</li>
            </h1>
            <p className="text-gray-600 mx-7">
              We follow the agile methodology, which makes the business software
              development process easy to manage for both clients and
              developers.
            </p>

            <h1 className="font-bold text-lg text-heading text-heading mx-7 mt-5 mb-2">
              <li>Collaborative Approach:</li>
            </h1>
            <p className="text-gray-600 mx-7">
              Our collaborative approach assures clients that we will support
              them at every stage - from planning, designing, development to
              post-launch maintenance.
            </p>
          </div>

          <div className="flex flex-col mt-10 mx-6">
            <img src="/backgrounds/why-innovate.jpg" />
          </div>
        </div>
        <div className="items-center flex flex-col lg:mt-0 mt-8">
          <Link href="/contact">
            <button className="mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Let’S get started
            </button>
          </Link>
        </div>
      </section>
      {/* Enterprise Software End-------------------------------------------------------------------------- */}

      {/* Counter Value start------------------------------------------------------------ */}
      <section className="bg-lightGray lg:mt-0 mt-10">
        <div className="grid sm:grid-cols-3 pt-10 lg:px-20 lg:gap-[90px] gap-[55px]">
          <div className="flex flex-col py-12  items-center gap-4 lg:border-t-2 lg:border-b-0 border-b-2">
            <h1 className="font-bold text-4xl text-heading text-center">
              <span className="text-primary">459K</span>
            </h1>
            <p className="text-gray-600 text-center">
              Number of processes
              <br />
              Simplified
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px] pb-12 lg:pt-12 items-center gap-4 lg:border-t-2 lg:border-b-0 border-b-2">
            <h1 className="font-bold text-4xl text-heading text-center">
              <span className="text-primary">15,789</span>
            </h1>
            <p className="text-gray-600 text-center">
              Number of Work-Hours
              <br />
              Made Productive
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px] lg:pt-12 pb-12 items-center gap-4 lg:border-t-2 lg:border-b-0 border-b-2">
            <h1 className="font-bold text-4xl text-heading text-center">
              <span className="text-primary">375</span>
            </h1>
            <p className="text-gray-600 text-center">
              Number of Businesses
              <br /> Streamlined
            </p>
          </div>
        </div>
      </section>
      {/* Counter Value End-------------------------------------------------------------------------- */}

      {/* WE COVER THE FULL start------------------------------------------------------------ */}
      <section className="sm:py-10 sm:mx-10">
        <div className="title text-center lg:mt-0 mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading ">
            We Cover the Full Cycle of
            <br /> Custom
            <span className="text-primary">
              {" "}
              Enterprise Software Development
            </span>
          </h1>
        </div>
        <div className="text-center items-center mx-7 flex flex-col lg:-mt-[30px]">
          <img
            className="object-contain object-center rounded lg:w-[65%]"
            alt="hero"
            // src="/backgrounds/we-cover-full.jpg"
            src="/backgrounds/development-methodology.gif"
          />
        </div>
      </section>
      {/* WE COVER THE FULL End-------------------------------------------------------------------------- */}

      {/* Verticle Exposure STARTS */}
      <Industries />
      {/* Verticle Exposure ENDS */}

      {/* Tech Stack STARTS */}
      <TechStack page={"enterprise"} />
      {/* Tech Stack ENDS */}

      {/* contact us START */}
      <QuickStart />
      {/* contact us ENDS */}
    </>
  );
}

export default Enterprise;
