import Link from "next/link";
import QuickStart from "../../components/Homepage/QuickStart";
import Industries from "../../components/About/Industries";
import { GiMining } from "react-icons/gi";
import { BiChip, BiTestTube } from "react-icons/bi";
import { TbMathFunction, TbPresentationAnalytics } from "react-icons/tb";
import {
  BsTools,
  BsShieldFillCheck,
  BsFillGrid1X2Fill,
  BsSpeedometer,
} from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import {
  AiOutlineStock,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineDatabase,
  AiOutlineControl,
} from "react-icons/ai";
import Head from "next/head";

const Backoffice = () => {
  return (
    <>
      <Head>
        <title>Back Office Support - NSS</title>
        <meta
          name="description"
          content="Back Office Support functions are roles that are not directly related to customer support—but do enhance customer experience."
        />
        <meta
          name="keywords"
          content="Back office, back office support, back office support India, back office support India, outsourcing back office support, BPO, KPO"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
      </Head>
      {/* Hero Section STARTS */}
      <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-5 sm:py-10 sm:mx-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl sm:leading-[44px] sm:text-[40px] font-bold mb-4 text-gray-900 mr-auto">
              Back-Office <span className="text-primary"> Support</span>
            </h1>
            <p className="mb-8 text-2xl text-left mr-auto leading-relaxed">
              Great things in business are never done by one person, they are
              done by a team of people
            </p>
            <div className="flex sm:justify-center md:justify-start sm:gap-8 w-full">
              <Link href="/contact">
                <button className="p-2 bg-primary text-white rounded-sm hover:scale-105 transition-all">
                  Talk to our Consultant
                </button>
              </Link>
              <Link href="/projects">
                <button className="p-2 shadow-xl rounded-sm text-heading hover:scale-105 transition-all">
                  Our Portfolio
                </button>
              </Link>
            </div>
          </div>

          <div className="">
            <img
              className="object-contain object-center rounded sm:h-[500px]"
              alt="hero"
              src="/backgrounds/backofficebanner.jpeg"
            />
          </div>
        </div>
      </section>
      {/* Hero Section ENDS */}

      {/* Web Apps start------------------------------------------------------------ */}
      <section className=" bg-lightGray my-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col">
            <div className="title text-left mx-7 my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold">
                Range of <span className="text-primary">Support Services</span>
              </h1>
            </div>

            <p className="text-base leading-9 text-left mx-7">
              Keep your website/app fully functional with expert support
              services from Nsspl. We provide highly competent quality support
              experts, so you can focus on your core business.
              <br /> <br />
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <li className="flex gap-2  items-center">
                    <BsShieldFillCheck size={20} className="text-primary" />
                    Data Mining
                  </li>
                  <li className="flex gap-2  items-center">
                    <TbPresentationAnalytics
                      size={20}
                      className="text-primary"
                    />
                    Data Analytics
                  </li>
                  <li className="flex gap-2  items-center">
                    <BsFillGrid1X2Fill size={18} className="text-primary" />
                    GUI and Usability Testing
                  </li>
                  <li className="flex gap-2  items-center">
                    <BiTestTube size={20} className="text-primary" />
                    Compatibility Testing
                  </li>
                  <li className="flex gap-2  items-center">
                    <BiChip size={20} className="text-primary" />
                    System / Integration Testing
                  </li>
                </div>
                <div>
                  <li className="flex gap-2  items-center">
                    <AiOutlineDatabase size={20} className="text-primary" />
                    Data Entry
                  </li>
                  <li className="flex gap-2  items-center">
                    <TbMathFunction size={20} className="text-primary" />
                    Functional and Regression Testing
                  </li>
                  <li className="flex gap-2  items-center">
                    <AiOutlineControl size={20} className="text-primary" />
                    Quality control
                  </li>
                  <li className="flex gap-2  items-center">
                    <BsSpeedometer size={20} className="text-primary" />
                    Performance Testing
                  </li>
                  <li className="flex gap-2  items-center">
                    <BsTools size={20} className="text-primary" />
                    Technical testing
                  </li>
                </div>
              </div>
            </p>
          </div>
          <div className="flex flex-col my-10 mx-6">
            <img src="/imgs/backoffice1.png" width={500} height={400} />
          </div>
        </div>
      </section>
      {/* Web Apps End-------------------------------------------------------------------------- */}

      {/* Benefit section STARTS  */}
      <section className=" my-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
          {/* first section */}
          <div className="flex flex-col items-center my-10 mx-6">
            <img src="/imgs/backoffice2.jpeg" width={400} height={400} />
          </div>
          {/* second section */}
          <div className="flex flex-col">
            <div className="title text-left mx-7 my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold">
                Benefits of <span className="text-primary">Choosing NSS</span>
              </h1>
            </div>

            <p className="text-base leading-9 text-left mx-7">
              Nsspl’s Services reduce the time and effort in testing and other
              non-core activities for your organization so that you can shorten
              the Time To Market (TTM) for your products while improving your
              Return on Investment (ROI) with enhanced support for your
              business.
              <br /> <br />
              <li className="flex sm:items-center gap-2">
                <GiMining size={20} className="text-primary mt-2 sm:mt-0" />
                Use of the best tools and Process driven.
              </li>
              <li className="flex sm:items-center gap-2">
                <AiOutlineStock
                  size={24}
                  className="text-primary mt-2 sm:mt-0"
                />
                Improve the quality, reliability, and performance of your
                Product
              </li>
              <li className="flex sm:items-center gap-2">
                <AiOutlineClockCircle
                  size={20}
                  className="text-primary mt-2 sm:mt-0"
                />
                Reduce ROI (Return On Investment) through our support services.
              </li>
              <li className="flex sm:items-center gap-2">
                <HiOutlineDocumentDuplicate
                  size={20}
                  className="text-primary mt-2 sm:mt-0"
                />
                Daily reporting and access to the team.
              </li>
              <li className="flex sm:items-center gap-2">
                <AiOutlineCalendar
                  size={20}
                  className="text-primary mt-2 sm:mt-0"
                />
                Quality planning and results.
              </li>
            </p>
          </div>
        </div>
      </section>
      {/* Benefit section ENDS  */}

      {/* Verticle Exposure STARTS */}
      <Industries />
      {/* Verticle Exposure ENDS */}

      {/* contact us START */}
      <QuickStart />
      {/* contact us ENDS */}
    </>
  );
};

export default Backoffice;
