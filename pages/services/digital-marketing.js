import React, { useState } from "react";
import Link from "next/link";
import ClientFocusTab from "../../components/ClientFocusTab";
import Heading from "../../components/Heading";
import QuickStart from "../../components/Homepage/QuickStart";
import DevelopmentProcess from "../../components/DevelopmentProcess";
import TechStack from "../../components/Homepage/TechStack";
import Industries from "../../components/About/Industries";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import {
  BsLightbulb,
  BsTools,
  BsShieldFillCheck,
  BsFillGrid1X2Fill,
  BsSpeedometer,
  BsCheckCircleFill,
} from "react-icons/bs";

const Ecommerce = () => {
  let [active, setactive] = useState(1);
  return (
    <>
      <Head>
        <title>Mobile App Development Company | NSS Pvt Ltd</title>
        <meta
          name="description"
          content="Top mobile app development company NSS focusing on Android & iOS apps. Since 2009, we build more than 2500+ apps for both platform."
        />
        <meta
          name="keywords"
          content="mobile app development company, top app development companies, mobile app developers, mobile application development, mobile app development companies"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
        <meta name="author" content="NSS Pvt Ltd" />
        <meta name="distribution" content="global" />
      </Head>
      <section className="text-gray-600 body-font py-5">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center lg:-mt-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col mb-16 md:mb-0 lg:text-left text-center">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                <span className="text-primary">Marketing services</span> for
                SMBs and Start-ups
              </h1>
            </div>
            <p className="mb-2 text-center text-base md:text-left leading-relaxed">
              NSS uses AI to find the best Digital Marketing Agency for you.
              <br />
            </p>
            <p className="mb-5 text-center text-base md:text-left leading-relaxed">
              Let{" "}
              <span className="text-primary">
                Award-Winning Digital Marketing Agencies
              </span>{" "}
              Drive Results For You.
            </p>
            <div className="flex mb-6 flex-col sm:flex-row gap-5 text-gray-600 md:text-sm">
              <div>
                <li className="flex gap-2  items-center">
                  <BsCheckCircleFill size={20} className="text-primary" />
                  100% Vetted & Verified
                </li>
                <li className="flex gap-2 mt-3 items-center">
                  <BsCheckCircleFill size={20} className="text-primary" />
                  Affordable and ROI Based Campaigns
                </li>
                <li className="flex gap-2 mt-3 items-center">
                  <BsCheckCircleFill size={20} className="text-primary" />
                  Carefully chosen to suit your Industry and Budget
                </li>
                <li className="flex gap-2 mt-3 items-center">
                  <BsCheckCircleFill size={20} className="text-primary" />
                  Guaranteed Results
                </li>
              </div>
            </div>
            <div className="flex lg:justify-center lg:md:justify-start justify-between justify-start sm:gap-8 w-full">
              <Link href="/contact">
                <button className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Talk to our Digital Marketer Consultant
                </button>
              </Link>
            </div>
          </div>

          <div className="">
            <img
              className="object-contain object-center rounded sm:h-[500px]"
              alt="hero"
              src="/backgrounds/banner-right-image.webp"
              // width={500}
            />
          </div>
        </div>
      </section>
      <section className="bg-lightGray my-5 py-5 nss-offer">
        <div className="bg-lightGray mx-6 sm:py-10 sm:px-10">
          <div className="gap-4">
            <div className="title text-center items-center">
              <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                Our Specialized{" "}
                <span className="text-primary">
                  Digital Marketing Services{" "}
                </span>
              </h1>
              <p class=" my-4 text-center text-gray-600">
                We can be your reliable 'DIGITAL' marketing services partner.
                Being a pioneer in the market, we have been working closely with
                our clients since our inception. <br /> Our exceptional digital
                strategies have helped many businesses reach out to their
                targeted audience across verticals and geographies.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-8 sm:mt-8">
              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center py-10">
                <img src="/icons/seo.svg" width={60} height={60} />
                <h1 className="font-bold text-heading text-[18px] mt-5 mb-2">
                  Search Engine Optimization (SEO)
                </h1>
                <p className="text-center text-[#666666] hover:text-primary px-8 pb-4">
                  Enhance your online presence and divert more yet relevant
                  traffic to your business website with our customized SEO
                  strategies and services
                </p>
                <Link href="/contact">
                  <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center py-10">
                <img src="/icons/smm.svg" width={60} height={60} />
                <h1 className="font-bold text-heading text-[18px] mt-5 mb-2">
                  Social Media Marketing (SMM)
                </h1>
                <p className="text-center text-[#666666] hover:text-primary px-8 pb-4">
                  Engage your target audience more creatively and spread your
                  brand awareness by opting for our effective social media
                  marketing services
                </p>
                <Link href="/contact">
                  <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center py-10">
                <img src="/icons/ppc.svg" width={60} height={60} />
                <h1 className="font-bold text-heading text-[18px] mt-5 mb-2">
                  Pay-Per-Click (PPC)
                </h1>
                <p className="text-center text-[#666666] hover:text-primary px-8 pb-4">
                  Significantly increase your revenue and grow your business
                  with our expertly designed and result-oriented PPC campaigns
                </p>
                <Link href="/contact">
                  <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center py-10">
                <img
                  src="/icons/display-advertisement.svg"
                  width={60}
                  height={60}
                />
                <h1 className="font-bold text-heading text-[18px] mt-5 mb-2">
                  Display Advertising
                </h1>
                <p className="text-center text-[#666666] hover:text-primary px-8 pb-4">
                  Grab the attention of maximum eyeballs online by displaying
                  your brand in the right place. Avail our display advertising
                  services to have your brand presence everywhere
                </p>
                <Link href="/contact">
                  <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center py-10">
                <img
                  src="/icons/content-merketing.svg"
                  width={60}
                  height={60}
                />
                <h1 className="font-bold text-heading text-[18px] mt-5 mb-2">
                  Content Marketing
                </h1>
                <p className="text-center text-[#666666] hover:text-primary px-8 pb-4">
                  Get content that defines your business, tells the world who
                  you are, and what you stand for with our impressive content
                  marketing services
                </p>
                <Link href="/contact">
                  <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div className="flex flex-col sm:min-h-[250px] bg-white shadow-lg rounded-[10px] items-center py-10">
                <img src="/icons/orm.svg" width={60} height={60} />
                <h1 className="font-bold text-heading text-[18px] mt-5 mb-2 items-center text-center">
                  Online Reputation Management (ORM)
                </h1>
                <p className="text-center text-[#666666] hover:text-primary px-8 pb-4">
                  Get full control and authority to get what online results will
                  be through our online reputation management services and reap
                  the maximum benefits
                </p>
                <Link href="/contact">
                  <button className="p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mx-10 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
          {/* first section */}
          <div className="flex flex-col items-center my-10 mx-6">
            <img
              src="/backgrounds/about-left-image.webp"
              width={600}
              height={500}
            />
          </div>
          {/* second section */}
          <div className="flex flex-col">
            <div className="title text-left mx-7 my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold text-heading">
                NSS{" "}
                <span className="text-primary">Digital Marketing Agency</span>
              </h1>
            </div>

            <p className="text-base leading-9 text-left mx-7 text-gray-600">
              We at NSS Provide complete digital solutions, based in Delhi,
              India. We are a group of young, passionate, individuals who
              understand the need for internet technology and work according to
              the latest search trends. We are experts in search engine
              marketing, website development, app development, optimization,
              reputation management, and all forms of Digital Marketing, <br />
              NSS always finds ways that are helpful to grow your business. We
              use maximum resources & analytic tools & our online promotion
              experts. Our goal is to bring your business back on the right
              track by using all web-based tools and strategies.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mx-8">
              <div className="flex flex-col  pt-12 pb-3 items-start">
                <div className="lg:border-r-0 border-b-2 lg:border-b-2 pb-2 mb-2 ">
                  <img src="/icons/year-business.svg" width={50} height={50} />
                  <h1 className="font-bold text-3xl text-heading text-left mt-3">
                    <span className="text-primary">18+</span>
                  </h1>
                  <p className="text-primary">Years in Business</p>
                </div>
                <p className="text-gray-600">
                  Grow your online business successfully
                </p>
              </div>

              <div className="flex flex-col  pt-12 pb-3 items-start">
                <div className="lg:border-r-0 border-b-2 lg:border-b-2 pb-2 mb-2 ">
                  <img src="/icons/inhouse-team.svg" width={50} height={50} />
                  <h1 className="font-bold text-3xl text-heading text-left mt-3">
                    <span className="text-primary">100+</span>
                  </h1>
                  <p className="text-primary">In House Team</p>
                </div>
                <p className="text-gray-600">
                  Complement the business requirement
                </p>
              </div>

              <div className="flex flex-col  pt-12 pb-3 items-start">
                <div className="lg:border-r-0 border-b-2 lg:border-b-2 pb-2 mb-2 ">
                  <img
                    src="/icons/satisfied-customers.svg"
                    width={50}
                    height={50}
                  />
                  <h1 className="font-bold text-3xl text-heading text-left mt-3">
                    <span className="text-primary">1000+</span>
                  </h1>
                  <p className="text-primary">Satisfied Customers</p>
                </div>
                <p className="text-gray-600">
                  Find out the exact business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightGray sm:pb-10 my-5 py-5">
        <div className="sm:px-10">
          <div className="title text-center items-center">
            <h1 className="my-3 lg:my-9 font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              Select A Suitable Plan
              <span className="text-primary">
                {" "}
                For Digital Marketing Projects{" "}
              </span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-8 sm:mt-8 mx-10">
            {/* <div className=" flex-col p-6 text-center sm:mx-2 bg-white  border-[2px] rounded-[10px]  justify-center items-center"> */}
            <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
              <h1 className="text-center text-heading text-2xl font-bold sm:leading-[45px]">
                Starter Plan
              </h1>
              <div>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Creative Design
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  social media management
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  social media marketing
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Keyword Research
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Search Engine Optimization
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Google My Business
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Facebook Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Google Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
              </div>
              <Link href="/contact">
                <button className="mt-5 p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Contact Us
                </button>
              </Link>
            </div>

            <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
              <h1 className="text-center text-heading text-2xl font-bold sm:leading-[45px]">
                Premium Plan
              </h1>
              <div>
                <p className="text-base lg:text-md mt-1 text-[#7E7E7E] mt-4 px-3 text-center">
                  Creative Design
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Social Media Management
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Social Media Marketing
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Keyword Research
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Search Engine Optimization
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Google My Business
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Facebook Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Google Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  LinkedIn ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Landing Page Creation
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Customer Tracking
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Remarketing Service
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  **************
                </p>
              </div>
              <Link href="/contact">
                <button className="mt-5 p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Contact Us
                </button>
              </Link>
            </div>

            <div className=" flex flex-col  p-7 text-center bg-white  border-[2px] rounded-[10px]  items-center">
              <h1 className="text-center text-heading text-2xl font-bold sm:leading-[45px]">
                Business Plan
              </h1>
              <div className="text-center">
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Creative Design
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Social Media Management
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Social Media Marketing
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Keyword Research
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Search Engine Optimization
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Google My Business
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Facebook Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Google Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  LinkedIn Ads
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Landing Page Creation
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Customer Tracking
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Remarketing Service
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Video Creating Services
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Marketing Research
                </p>
                <p className="text-base lg:text-md mt-2 text-[#7E7E7E] mt-4 px-3 text-center">
                  Marketing Consultation
                </p>
              </div>
              <Link href="/contact">
                <button className="mt-5 p-2 px-8 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* contact us START */}
      <Industries />
      {/* contact us ENDS */}
      <QuickStart />
    </>
  );
};

export default Ecommerce;
