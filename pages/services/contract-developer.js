import React from "react";
import Link from "next/link";
import QuickStart from "../../components/Homepage/QuickStart";
import TechStack from "../../components/Homepage/TechStack";
import Heading from "../../components/Heading";
import ClientFocusTab from "../../components/ClientFocusTab";
import Head from "next/head";

const ContractDeveloper = () => {
  console.log("testing");
  return (
    <>
      <Head>
        <title>
          Hire App Developers | Dedicated Application Programmers India
        </title>
        <meta
          name="description"
          content="Hire app developers & programmers (web & mobile) in India having rich domain expertise. 2x Faster.2500+ Project Done | 1000+ Customers | 200+ Staff |10+ Yrs Exp"
        />
        <meta
          name="keywords"
          content="hire app developers, hire app developers, best app developers, hire app developers india, hire app programmers, best app developers in india"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
      </Head>
      {/* Hero Section STARTS */}
      <section className="text-gray-600 body-font lg:-mt-[65px] md:-mt-0 sm:-mt-0">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
            <div className="title text-left mr-auto my-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading">
                Hire <span className="text-primary"> Developers</span>
              </h1>
            </div>
            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              Build quality software & accelerate time-to-market with our
              professional software developers who are dedicated to meet your
              specific requirements of the on-going development projects.
            </p>
            <div className="flex lg:justify-center lg:md:justify-start justify-between justify-start sm:gap-8 w-full">
              <Link href="/contact">
                <button className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Talk to our Consultant
                </button>
              </Link>
              <span className="mt-2 lg:text-[17px] text-[12px] text-heading font-bold">
                Or Call +918448229553
              </span>
            </div>
          </div>
          <div className="lg:mt-0 mt-10">
            <img
              className="object-contain object-center rounded sm:h-[500px] xl:max-w-[550px]"
              alt="hero"
              src="/backgrounds/contractdevbanner.png"
            />
          </div>
        </div>
      </section>
      <section className="bg-lightGray py-10">
        <div className="title text-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading ">
            Benefits of{" "}
            <span className="text-primary"> Staff Augmentation </span>
          </h1>
        </div>
        <div className="grid text-gray-600 gap-6 sm:grid-cols-2  mx-5 md:grid-cols-2 lg:grid-cols-4 mx-[60px] pt-10">
          {/* <div className=" flex-col p-6 text-center sm:mx-2 bg-white  border-[2px] rounded-[10px]  justify-center items-center"> */}
          <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
            <img src="/icons/advantages/custom.svg" width={52} height={50} />
            <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3">
              You will have access to world-class developers and project
              managers who have successfully delivered several projects.
            </p>
          </div>

          <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
            <img src="/icons/flexibility.svg" width={52} height={50} />
            <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3">
              The flexibility of staff augmentation services helps you increase
              or decrease your onsite workforce depending upon your business
              needs.
            </p>
          </div>

          <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
            <img src="/icons/reduce_cost.svg" width={52} height={50} />
            <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3">
              You can reduce overall expenses by avoiding costs associated with
              recruitment, office space, and employee benefits.
            </p>
          </div>

          <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
            <img src="/icons/product_launch.svg" width={52} height={50} />
            <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3">
              It helps you enhance your capabilities to meet peak demands, such
              as during product launches or seasonal sales cycles.
            </p>
          </div>
        </div>
      </section>
      {/* Hero Section ENDS */}
      <section className="nss-offer">
        <div className="sm:py-10 sm:px-10">
          <div className=" gap-4">
            <h1 className="font-bold text-center text-4xl text-heading px-4">
              What are the different types of Staffing
              <br /> Solutions that <span className="text-primary"> NSS </span>
              offers?
            </h1>

            <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-8 sm:mt-8 text-heading">
              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center p-12 mt-top">
                <img src="/icons/transperency.svg" width={70} height={70} />
                <h1 className="font-bold text-3xl p-4 hover:text-primary text-center">
                  Transparency in the process
                </h1>
                <p className="text-center text-xl hover:text-primary px-8 pb-4">
                  Clients have a vision for the kind of people they want to work
                  with which is why we keep our recruitment process transparent.
                </p>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center p-12 mt-bottom">
                <img src="/icons/direct_hire.svg" width={70} height={70} />
                <h1 className="font-bold text-3xl p-4 hover:text-primary text-center ">
                  Direct Hire
                </h1>
                <p className="text-center text-xl hover:text-primary px-8 pb-4">
                  Our proactive recruiting services not only help target the
                  best tech talent in the industry but also offer better
                  retention rates
                </p>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center p-12 mt-top">
                <img src="/icons/contact_hiring.svg" width={70} height={70} />
                <h1 className="font-bold text-3xl p-4 hover:text-primary text-center ">
                  Contract Hiring
                </h1>
                <p className="text-center text-xl hover:text-primary px-8 pb-4">
                  We at CronJ help augment businesses with the right short-term
                  hiring at the right time
                </p>
              </div>
            </div>
          </div>
          <div className="items-center flex flex-col mt-10">
            <Link href="/contact">
              <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lightGray my-5 agile-wrapper">
        <div className="sm:py-10 sm:px-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-center text-4xl text-heading pb-4">
              <span className="text-primary">Agile Recruiting</span> Process
            </h1>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:mt-8 text-heading">
              <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
                <div className="circle-icon">
                  <img src="/icons/agile1.svg" width={52} height={50} />
                </div>

                <h1 className="font-bold text-xl  hover:text-primary text-center">
                  A non-disclosure agreement
                </h1>
                <p className="text-center text-sm  hover:text-primary">
                  Our staff members are committed to safeguarding your private
                  and sensitive data.
                </p>
              </div>

              <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
                <div className="circle-icon">
                  <img src="/icons/agile2.svg" width={52} height={50} />
                </div>

                <h1 className="font-bold text-xl  hover:text-primary text-center">
                  Carefully pick the best
                </h1>
                <p className="text-center text-sm hover:text-primary">
                  Select the top IT specialists for our talent pool based on the
                  requirements of your project.
                </p>
              </div>

              <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
                <div className="circle-icon">
                  <img src="/icons/agile3.svg" width={52} height={50} />
                </div>
                <h1 className="font-bold text-xl  hover:text-primary text-center">
                  Personal Interview
                </h1>
                <p className="text-center text-sm hover:text-primary">
                  Get to know our employees in a candid interview before
                  welcoming them to your team.
                </p>
              </div>

              <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
                <div className="circle-icon">
                  <img src="/icons/agile4.svg" width={52} height={50} />
                </div>

                <h1 className="font-bold text-xl  hover:text-primary text-center">
                  Onboarding
                </h1>
                <p className="text-center text-sm hover:text-primary">
                  Maximize your productivity by starting your project with the
                  best employees on board.
                </p>
              </div>
            </div>
          </div>
          <div className="items-center flex flex-col mt-10">
            <Link href="/contact">
              <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                Build Your Team
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="sm:py-1">
        <div className="title text-center items-center my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold text-heading sm:leading-[45px] text-heading ">
            <span className="text-primary">Scale-up</span> Your Team the Way You
            Need
          </h1>
        </div>
        <div className="grid gap-6 text-gray-600 sm:grid-cols-2 lg:mx-16 mx-7 md:grid-cols-2 lg:grid-cols-3">
          <div className=" flex-col p-6 text-left sm:mx-2 bg-white shadow-lg justify-center items-left text-heading">
            <div className="flex items-center">
              <img
                src="/icons/web-dev-icons/custom-enterprise.svg"
                alt=""
                height={60}
                width={60}
              />
              <h1 className="font-bold ml-4 ">
                Build a Successful Team from Scratch
              </h1>
            </div>

            <p className="text-base lg:text-md mt-3">
              Support your business infrastructure with scalable software that
              improves key facets of your enterprise. Get access to our
              industry-specific knowledge to design, build, and scale your new
              enterprise software solution.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white  shadow-lg justify-center items-left text-heading">
            <div className="flex items-center">
              <img
                src="/icons/web-dev-icons/mobility.svg"
                alt=""
                height={60}
                width={60}
              />
              <h1 className="font-bold ml-4">
                Add Resources to Your Existing Project
              </h1>
            </div>
            <p className="text-base lg:text-md mt-3">
              Our end-to-end enterprise mobility solutions allow organizations
              to safely and efficiently manage the extensive use of mobile
              devices that can support a large number of users in their business
              environment.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white   shadow-lg justify-center items-left text-heading">
            <div className="flex items-center">
              <img
                src="/icons/web-dev-icons/transform.svg"
                alt=""
                height={60}
                width={60}
              />
              <h1 className="font-bold ml-4">Vendor Transition</h1>
            </div>
            <p className="text-base lg:text-md mt-3 ">
              NSS is your reliable digital transformation partner. Leverage our
              expertise in using digital technologies to create new or modify
              existing business processes to meet changing market requirements.
            </p>
          </div>
        </div>
        <div className="items-center flex flex-col mt-10">
          <Link href="/contact">
            <button className="mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Talk to Our Expert
            </button>
          </Link>
        </div>
      </section>

      {/* <section className="bg-lightGray">
        <div className="title text-center items-center  py-10 text-2xl sm:text-3xl md:text-5xl lg:text-4xl">
          <h1 className="font-bold  sm:leading-[45px] text-heading ">
            <span className="text-primary">Transform</span> your idea into
            reality using
            <span className="text-primary"> cutting-edge</span>
            <br /> technologies
          </h1>
        </div>
      </section>
       */}
      {/* Tech Stack STARTS */}
      <TechStack />
      {/* Tech Stack ENDS */}

      {/* contact us START */}
      <QuickStart />
      {/* contact us ENDS */}
    </>
  );
};

export default ContractDeveloper;
