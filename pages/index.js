import react, { useState } from "react";
import Link from "next/link";
import Awards from "../components/Homepage/Awards";
import Hero from "../components/Homepage/Hero";
import Partners from "../components/Homepage/Partners";
import Services from "../components/Homepage/Services";
import Presence from "../components/Homepage/Presence";
import TechStack from "../components/Homepage/TechStack";
import Solution from "../components/Homepage/Solution";
import QuickStart from "../components/Homepage/QuickStart";
import PortfolioSlide from "../components/Homepage/PortfolioSlide";
import Head from "next/head";
import PortfolioSlideNew from "../components/Homepage/PortfolioSlideNew";
import { BsCheckCircleFill } from "react-icons/bs";
import CountUp from "react-countup";

const technologiesData = [
  [
    {
      title: "App Development",
      img: "/icons/app-development.svg",
      link: "/services/appdev/",
    },
    {
      title: "Web Development",
      img: "/icons/web-development.svg",
      link: "/services/webdev/",
    },
    {
      title: "E-Commerce Solutions",
      img: "/icons/ecommerce.svg",
      link: "/services/eCommerce/",
    },
  ],
  [
    {
      title: "NFT & Blockchain",
      img: "/icons/blockchain.svg",
      link: "/services/blockchain/",
    },
    {
      title: "Staff Augmentation",
      img: "/icons/developer.svg",
      link: "",
    },
    {
      title: "Cloud Support",
      img: "/icons/cloudcomputing.svg",
      link: "",
    },
  ],
  [
    {
      title: "AI/ML",
      img: "/icons/ai-ml.svg",
      link: "",
    },
    {
      title: "Digital Marketing",
      img: "/icons/digital-marketing.svg",
      link: "/services/digital-marketing",
    },
  ],
];

export default function Home() {
  const [value, setValue] = useState(1);
  const handleClick = (val) => {
    setValue(val);
  };
  return (
    <>
      <Head>
        <title>
          #1 App Development Company India | Outsource App Development India -
          NSS
        </title>
        <meta
          name="description"
          content="Outsource App development to India & scale on-demand. In business for 18+ years, 150+ full time staff, 2500+ satisfied customers, 100% guaranteed work."
        />
        <meta
          name="keywords"
          content="app development services, app development company india, app development services india, app development company, hire app development company, app development firm, app development agency"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
      </Head>
      <div>
        <Hero />
        {/* Counter start------------------------------------------------------------ */}
        <section className="bg-lightGray text-heading lg:mt-0 mt-5">
          <div className="grid grid-cols-1 sm:mx-10 lg:grid-cols-[565px_minmax(0px,_1fr)_0px] items-center">
            <div className="flex flex-col">
              <div className="title mx-7 my-3 lg:my-9 lg:text-left text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                <h1 className="font-bold sm:leading-[45px]">
                  About
                  <span className="text-primary"> Us</span>
                </h1>
              </div>

              <p className="text-center text-gray-600 md:text-left leading-relaxed mx-7">
                As one of the leading Information Technology consulting company,
                NSS Private Limited delivers tailored IT services to
                organizations Globally. With NSS as your partner, we can leap
                your organization forward with highly effective IT strategies
                and implement innovative Cloud solutions. NSS is focused on
                developing highly secure and scalable Mobile and Web based cloud
                solutions for our Global Clients with complete Vertical support.
              </p>
            </div>

            <div className="flex flex-col my-10">
              <div className="grid gap-8 my-4 px-5 sm:grid-cols-2 sm:px-10  md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col p-10 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                  <h1 className="font-bold text-3xl text-heading text-center">
                    <span className="text-primary">
                      <CountUp end={500} duration={2} />+<br />
                    </span>{" "}
                    Solutions Delivered
                  </h1>
                </div>

                <div className="flex flex-col p-10 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                  <h1 className="font-bold text-3xl text-heading text-center">
                    <span className="text-primary">
                      <CountUp end={100} duration={2} />%<br />
                    </span>{" "}
                    Satisfied Clients
                  </h1>
                </div>

                <div className="flex flex-col p-10 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                  <h1 className="font-bold text-3xl text-heading text-center">
                    <span className="text-primary">
                      <CountUp end={18} duration={2} />+<br />
                    </span>
                    Years of Experience
                  </h1>
                </div>
                <div className="flex flex-col p-10 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                  <h1 className="font-bold text-3xl text-heading text-center">
                    <span className="text-primary">
                      <CountUp end={200} duration={2} />+<br />
                    </span>{" "}
                    Consultants
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counter End-------------------------------------------------------------------------- */}

        {/* We create Start------------------------------------------------------------ */}
        <section className="technology text-heading">
          <div className="flex px-5 lg:px-12 lg:mx-10 md:flex-row tech-inner">
            <div className="lg:flex-grow md:w-1/3 p-50">
              <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                <h1 className="font-bold sm:leading-[45px]">
                  We Leverage the{" "}
                  <span className="text-primary">Latest Technologies </span>
                  to Create
                  <span className="text-primary"> Flexible Solutions</span>
                </h1>
              </div>
              <div className="flex md:flex-row mobile-view">
                <div className="lg:flex-grow md:w-1/3">
                  <Link href={"/services/appdev/"}>
                    <div className="box">
                      <div className="flex text-center item-center">
                        <h1 className="font-bold text-lg text-heading text-center item-center">
                          App Development
                        </h1>
                        <img
                          src="/icons/app-development.svg"
                          className="icon"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="lg:flex-grow md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        Web Development
                      </h1>
                      <img src="/icons/web-development.svg" className="icon" />
                    </div>
                  </div>
                </div>
                <div className="lg:flex-grow md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        E-Commerce Solutions
                      </h1>
                      <img src="/icons/ecommerce.svg" className="icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row mobile-view">
                <div className="lg:flex-grow md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        NFT & Blockchain
                      </h1>
                      <img src="/icons/blockchain.svg" className="icon" />
                    </div>
                  </div>
                </div>
                <div className="lg:flex-grow md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        Staff Augmentation
                      </h1>
                      <img src="/icons/developer.svg" className="icon" />
                    </div>
                  </div>
                </div>
                <div className="lg:flex-grow md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        Cloud Support
                      </h1>
                      <img className="icon" src="/icons/cloudcomputing.svg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row justify-center mobile-view">
                <div className="md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        AI/ML
                      </h1>
                      <img
                        src="/icons/machinelearning.svg"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="box">
                    <div className="flex">
                      <h1 className="font-bold text-lg text-heading text-center item-center mt-2">
                        Digital Marketing
                      </h1>
                      <img
                        src="/icons/digital marketing.svg"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="lg:flex-grow md:w-1/3"></div> */}
              </div>
            </div>
            <div className="lg:flex-grow md:w-1">
              <div className="technologies_bg_image h-100"></div>
            </div>
          </div>
        </section>
        {/* We create End------------------------------------------------------------ */}

        {/* A Range of Start------------------------------------------------------------ */}
        <section className="text-gray-600 body-font speedysolution text-heading mt-8 lg:mt-0">
          <div className="flex px-5 lg:px-12 lg:mx-10 md:flex-row flex-col items-center">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading">
                A Range of{" "}
                <span className="text-primary">Speedy Solutions</span> to <br />
                <span className="text-primary">Accelerate</span> Your Growth
              </h1>
            </div>
          </div>
          <div className="lg:pb-10 pb-5">
            <div className="lg:px-12 lg:mx-10">
              <div className="flex gap-5 flex-wrap xl:flex-nowrap justify-center">
                <div className="max-w-full md:max-w-[45%] bg-lightGray p-4 w-full flex flex-col">
                  <div className="mb-5">
                    <h2 className="text-xl font-bold">MVP for Startups</h2>

                    <p className="text-base leading-7 text-left mt-4">
                      Get to market with the fastest solution-building team
                      there is. Shoot us your idea, and we’ll help you transform
                      it into an amazing test-ready MVP!
                    </p>

                    <div className="text-base leading-6 text-left mt-6">
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Conceptualization & Prototyping
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Product Design
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Quality Analysis
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Mobile Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Web Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Product Team Expansion
                      </li>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      style={{ margin: 0 }}
                      href="/contact/"
                      className="btn"
                      aria-label="Let’s Talk"
                    >
                      <span class="relative capitalize">Let’s Talk</span>
                    </a>
                  </div>
                </div>

                <div className="max-w-full md:max-w-[45%] bg-lightGray p-4 w-full flex flex-col">
                  <div className="mb-5">
                    <h2 className="text-xl font-bold">
                      Agile Product Team for Scaleups
                    </h2>

                    <p className="text-base leading-7 text-left mt-4">
                      We can take over your entire development project or
                      augment your team to assist you at any stage of your
                      product development cycle. By embracing agile development
                      strategies, we build your products faster while you scale
                      up.
                    </p>

                    <div className="text-base leading-6 text-left mt-6 px-6">
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Mobile Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Web Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Product Design
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Cloud Services
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Quality Review
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Product Management
                      </li>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      style={{ margin: 0 }}
                      href="/contact/"
                      className="btn"
                      aria-label="Let’s Talk"
                    >
                      <span class="relative capitalize">Let’s Talk</span>
                    </a>
                  </div>
                </div>

                <div className="max-w-full md:max-w-[45%] bg-lightGray p-4 w-full flex flex-col">
                  <div className="mb-5">
                    <h2 className="text-xl font-bold">MVP for Startups</h2>

                    <p className="text-base leading-7 text-left mt-4">
                      Get to market with the fastest solution-building team
                      there is. Shoot us your idea, and we’ll help you transform
                      it into an amazing test-ready MVP!
                    </p>

                    <div className="text-base leading-6 text-left mt-6 px-6">
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Product Design
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Legacy Modernization
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Testing
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Mobile Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Web Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Cloud App Development
                      </li>
                      <li className="flex sm:items-center gap-2 leading-9">
                        <BsCheckCircleFill
                          size={12}
                          className="text-primary mt-2 sm:mt-0"
                        />
                        Expanded Scrum Team
                      </li>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      style={{ margin: 0 }}
                      href="/contact/"
                      className="btn"
                      aria-label="Let’s Talk"
                    >
                      <span class="relative capitalize">Let’s Talk</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* A Range of End------------------------------------------------------------ */}
        <Presence />
        <TechStack />

        {/* About NSS End-------------------------------------------------------------------------- */}
        {/* <Services /> */}

        {/* <Solution /> */}
        <PortfolioSlideNew />
        {/* <PortfolioSlide /> */}
        {/* <Awards /> */}
        <Partners />
        <QuickStart />
      </div>
    </>
  );
}
