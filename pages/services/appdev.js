import Link from "next/link";
import ClientFocusTab from "../../components/ClientFocusTab";
import Heading from "../../components/Heading";
import QuickStart from "../../components/Homepage/QuickStart";
import DevelopmentProcess from "../../components/DevelopmentProcess";
import TechStack from "../../components/Homepage/TechStack";
import Ondemand from "../../components/About/Ondemand";
import Head from "next/head";
import {
  BsLightbulb,
  BsTools,
  BsShieldFillCheck,
  BsFillGrid1X2Fill,
  BsSpeedometer,
} from "react-icons/bs";
import { BiTimeFive, BiCustomize, BiUserCircle } from "react-icons/bi";
import { SiQuicktime } from "react-icons/si";
import ConsultantPopup from "../../components/ConsultantPopup";
import { useState } from "react";
import ConsultantBox from "../../components/ConsultantBox";

const Appdev = () => {
  const [openConsultantPopup, setOpenConsultantPopup] = useState(false);

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
      {/* Hero Section STARTS */}
      <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center col-nsspl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center col-100">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                A Leading{" "}
                <span className="text-primary">
                  {" "}
                  Mobile App Development Company{" "}
                </span>
                , That transferring Your Ideas Into Reality.
              </h1>
            </div>
            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              Converting your vision into reality. Build a tailor-made mobile
              app to deliver experiences that attract and retain customers.
            </p>
            <div className="flex lg:justify-center lg:md:justify-start justify-between justify-start sm:gap-8 w-full">
              <button
                onClick={() => setOpenConsultantPopup(true)}
                className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full font-bold"
              >
                Talk to our Consultant
              </button>

              <span className="mt-2 lg:text-[17px] text-[12px] text-heading font-bold">
                Or Call{" "}
                <a
                  style={{
                    color: "#ff6701",
                  }}
                  href={"tel:919911283830"}
                >
                  918448229553
                </a>
              </span>
            </div>
          </div>

          <div className="col-100">
            <img
              className="object-contain object-center rounded sm:h-[500px] lg:mr-[25px]"
              alt="hero"
              src="/backgrounds/applicationbanner.png"
              // width={500}
            />
          </div>
        </div>
      </section>

      {/*popup*/}
      <ConsultantPopup
        setState={(state) => setOpenConsultantPopup(state)}
        open={openConsultantPopup}
      />

      {/* Hero Section ENDS */}
      {/* OUTSHINE YOUR start------------------------------------------------------------ */}
      <section className="bg-lightGray text-gray-600 body-font">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center col-nsspl">
          <p className={"text-2xl text-heading font-bold block-below-991"}>
            {" "}
            Outshine Your <span className="text-primary">Competitors</span> With
            Custom App Development{" "}
            <span className="text-primary">Solutions</span>
          </p>

          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col text-justify mb-16 md:mb-0 col-100">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading none-below-991">
                Outshine Your <span className="text-primary">Competitors</span>{" "}
                With Custom App Development{" "}
                <span className="text-primary">Solutions</span>
              </h1>
            </div>
            <p className="mb-8 text-justify text-base leading-relaxed">
              NSS Pvt. Ltd. was established in 2005. NSS has a band of 100+
              highly qualified and trained professionals championing the global
              cause of digitization and digitalization. We are proud to have
              delivered 850+ projects across 30+ countries in the diverse fields
              of education, healthcare, banking, hospitality, entertainment,
              eCommerce, travel, etc.
            </p>

            <p className="mb-8 text-justify text-base leading-relaxed">
              NSS provides a reasonably complex result that would suit your
              requirements and your business signature. We provide a development
              solution with which you can help your business reach a new level.
              Our beguiling services make you comfortable with the emerging
              technology, and we strive to provide a solution that will bring
              satisfaction and retention to your brand.
            </p>

            <p className="mb-8 text-justify text-base leading-relaxed">
              We enable businesses across the globe to scale, transform, and
              gain a competitive advantage. As a leading custom app development
              services provider, we are acknowledged in the industry owing to
              our client-centric approach.
            </p>
          </div>

          <div className="col-100">
            <img
              src="/backgrounds/outshine.jpeg"
              width={600}
              height={400}
              className="lg:mr-[25px]"
            />
          </div>
        </div>
      </section>
      {/* OUTSHINE YOUR End-------------------------------------------------------------------------- */}
      <ConsultantBox />
      {/* What service start------------------------------------------------------------ */}
      <section className="sm:pb-10 sm:mx-10">
        <div className="title text-center items-center my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading horizontal-nsspl-padding">
            What <span className="text-primary"> Services </span> are you
            interested in?
          </h1>
        </div>
        <div className="grid text-gray-600 gap-6 sm:grid-cols-3 mx-5 md:grid-cols-3 lg:grid-cols-3">
          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">Android App Development</span>
            </h1>
            <p className="text-base lg:text-md mt-2">
              Target the extensive Android app market with robust, feature-rich,
              UI/UX-friendly mobile apps. Accelerate your business revenue with
              successful apps by relying on our Android app development services
              in India and the expertise of industry-level app developers.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">iOS App Development</span>
            </h1>
            <p className="text-base lg:text-md mt-2">
              Reach the elite prospects with a scalable, stable, and
              full-fledged iOS app developed by our skilled & professional team.
              We have a decade of expertise and a successful line of the
              portfolio in developing iOS apps as a leading mobile app
              development company in New Delhi.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white  rounded-xl shadow-lg justify-center items-left">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">Hybrid App Development</span>
            </h1>
            <p className="text-base lg:text-md mt-2">
              Extend the reach of your digital business landscape across app
              users of different operating systems. We have a team of experts
              creating cross-platform apps by using React Native framework. iOS
              and Android application development services are the two driving
              forces to enrich reach and profitability.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">
                Progressive Web App Development
              </span>
            </h1>
            <p className="text-base lg:text-md mt-2">
              Follow the trend to stay ahead with progressive web app
              development. Here, we offer a seamless experience on different
              mobile devices with the capabilities of Progressive Web Apps
              (PWAs). Our app developers integrate the top-notch features while
              creating result-oriented mobile and web apps.
            </p>
          </div>

          <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">IoT Apps</span>
            </h1>
            <p className="text-base lg:text-md mt-2">
              Stay connected with a range of devices and gather data using IoT
              apps to make information-based decisions. We create secure and
              market-ready IoT apps to empower your business with a competitive
              advantage. Hire mobile app developer to avail fully integrated IoT
              solutions for existing hardware and new smart infrastructure
              alike.
            </p>
          </div>

          <div className="flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
            <h1 className="font-bold text-lg text-heading text-left">
              <span className="text-primary">M-Commerce App</span>
            </h1>
            <p className="text-base lg:text-md mt-2">
              Take your online retail business to the next level with
              results-driven mobile commerce. We boost your sales by expanding
              your digital footprints via high-performing apps tailored to
              specific requirements. Extend your reach towards active customers
              and scale up your business ROI seamlessly.
            </p>
          </div>
        </div>

        <div className="items-center flex flex-col mt-10">
          <button
            onClick={() => setOpenConsultantPopup(true)}
            className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full"
          >
            Share Your Requirements
          </button>
        </div>
      </section>
      {/* What service End-------------------------------------------------------------------------- */}

      {/* Why choose NSS start------------------------------------------------------------ */}
      <section className="bg-lightGray lg:mt-0 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols- sm:mx-10 md:grid-cols-2 items-center col-nsspl flex-nsspl">
          <div className="flex flex-col col-100">
            <div className="title lg:text-left text-center mx-7 my-9 lg:leading-[50px] text-2xl sm:text-3xl md:text-4xl lg:text-4xl col-100 text-heading">
              <h2 className="font-extrabold">
                Why Choose <span className="text-primary">NSS</span> for App
                Development?
              </h2>
            </div>
            <div className="flex px-5 flex-col sm:flex-row gap-5 col-100 text-gray-600">
              <div className={"col-100"}>
                <li className="flex  items-center">
                  <BsLightbulb
                    size={25}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Cost-effective Solutions
                </li>
                <li className="flex mt-3 items-center">
                  <BsTools
                    size={20}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Experienced app developers
                </li>
                <li className="flex mt-3 items-center">
                  <BiTimeFive
                    size={25}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  160 man hours guaranteed
                </li>
                <li className="flex mt-3 items-center">
                  <BiUserCircle
                    size={25}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Project Manager
                </li>
              </div>
              <div className={"col-100"}>
                <li className="flex items-center">
                  <BsFillGrid1X2Fill
                    size={20}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Flexible engagement options
                </li>
                <li className="flex mt-3 items-center">
                  <BsSpeedometer
                    size={25}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Daily/weekly/monthly reporting
                </li>
                <li className="flex mt-3 items-center">
                  <BiCustomize
                    size={25}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Customized SLA
                </li>
                <li className="flex mt-3 items-center">
                  <SiQuicktime
                    size={20}
                    className="text-primary mr-2 min-width-nsspl"
                  />
                  Quick MVP
                </li>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-10 mx-6 flex-center-nsspl col-100">
            <img
              src="/imgs/why-choose-nss.png"
              width={500}
              height={400}
              className="lg:ml-[55px]"
            />
          </div>
        </div>
        <div className="items-center flex flex-col">
          <button
            onClick={() => setOpenConsultantPopup(true)}
            className="mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full"
          >
            Talk To Our Consultant
          </button>
        </div>
      </section>
      {/* Why choose NSS End-------------------------------------------------------------------------- */}

      {/* What make NSS start------------------------------------------------------------ */}
      <section className="sm:py-10 mx-7 lg:mt-0 mt-10">
        <div className="title text-center sm:text-3xl md:text-4xl lg:text-4xl text-heading">
          <h2 className="font-extrabold">
            What Makes <span className="text-primary"> NSS </span> Different
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 lg:mt-8 lg:px-20">
          <div className="flex flex-col sm:min-h-[150px] py-12 items-center gap-4 lg:border-r-2 border-b-2 lg:border-b-0">
            <h1 className="font-bold text-2xl text-heading text-center">
              <span className="text-primary">18+</span> Years <br />
              in Business
            </h1>
          </div>

          <div className="flex py-12 flex-col sm:min-h-[150px]  items-center gap-4 lg:border-r-2 border-b-2 lg:border-b-0">
            <h1 className="font-bold text-2xl text-heading text-center">
              <span className="text-primary">100+</span> Software <br />{" "}
              Developers
            </h1>
          </div>

          <div className="flex flex-col sm:min-h-[150px] py-12 items-center border-b-2 gap-2">
            <h1 className="font-bold text-2xl text-heading text-center">
              <span className="text-primary">1000+</span> Satisfied <br />{" "}
              Customers
            </h1>
          </div>
        </div>
      </section>
      {/* What make NSS End-------------------------------------------------------------------------- */}

      {/* Tech Stack STARTS */}
      <TechStack />
      {/* Tech Stack ENDS */}

      <Ondemand />

      {/* Development process STARTS */}
      <DevelopmentProcess />
      {/* Development process ENDS */}

      {/* contact us START */}
      <QuickStart />
      {/* contact us ENDS */}
    </>
  );
};

export default Appdev;
