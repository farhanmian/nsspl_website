import React from "react";
import Link from "next/link";

function WebDev() {
  return (
    <>
      {/* Hero Section STARTS */}
      <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-5 py-2 sm:mx-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-2xl z-10 sm:leading-[44px] sm:text-[40px] font-bold mb-4 text-gray-900 ">
              Web App{" "}
              <span className="text-primary"> Development Services</span>
            </h1>
            <p className="mb-8 text-center text-2xl md:text-left leading-relaxed">
              Nsspl is capable of composing high-end web solutions.
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
              className="object-contain object-center rounded sm:h-[500px] "
              alt="hero"
              src="/backgrounds/webdevbanner.png"
            />
          </div>
        </div>
      </section>
      {/* Hero Section ENDS */}

      <div className="grid gap-4 bg-gray-300 py-4 sm:grid-cols-2 sm:px-10  md:grid-cols-3 lg:grid-cols-4  justify-items-center xl:grid-cols-8 text-heading 2xl:grid-cols-8">
        <div className="bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            className="stroke-primary-500"
            src="/icons/web-dev-icons/web-dev-1.svg"
            height={75}
            width={75}
          />
          <h1>Custom Web Development</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/customer-relation-1.svg"
            height={75}
            width={75}
          />
          <h1>Customer Relationship Management</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/cloud-solution-1.svg"
            height={75}
            width={75}
          />
          <h1>Cloud Solutions</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/third-party-integration-1.svg"
            height={75}
            width={75}
          />
          <h1>Third-party integrations (CRM and more)</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/workflow-management-1.svg"
            height={75}
            width={75}
          />
          <h1>Workflow Management</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/enterprise-web-development-1.svg"
            height={75}
            width={75}
          />
          <h1>Enterprise Web Development</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/e-commerce-1.svg"
            height={75}
            width={75}
          />
          <h1>E-Commerce, B2B & B2C</h1>
        </div>
        <div className="text-center bg-white w-[240px] sm:w-full hover:scale-105 shadow-md rounded flex flex-col justify-center items-center gap-2 p-4 sm:p-8">
          <img
            src="/icons/web-dev-icons/custom-business-1.svg"
            height={75}
            width={75}
          />
          <h1>Any custom business application</h1>
        </div>
      </div>

      {/* start Boost your web application ---------------*/}

      <section className=" container-fluid my-18 text-center sm:text-left">
        <div className="mx-2 sm:mx-10">
          <h1 className="mx-2 my-10 font-bold text-xl xl:text-4xl 2xl:text-6xl">
            Let's Join Hands to Boost Your{" "}
            <span className="text-primary font-bold">
              Web Application Development
            </span>
          </h1>
          <p className="mx-2 text-lg leading-6 my-5">
            NSSPL offers end-to-end 'Web Solutions' Aimed at Increasing your
            overall ROI Customized solutions for your brand. We are aware of the
            fact that your brand is unique & that is why we have a step-by-step
            approach to help you reach your target in minimal time.
          </p>
        </div>
        <div className="mx-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="flex flex-col">
            <p className="text-base leading-9 text-left mx-7">
              We are a renowned custom web development company in the global
              market. We are not just a company providing web development
              services; instead, we are a well-grounded technology partner
              offering empirical solutions to synchronous business situations.
              Abstraction, planning, and delivery are decisive parts of the
              process flow that turn a strong product idea into a commercial
              one.
              <br /> <br />
              Our deep industry experiences are high-performing, feature-packed,
              and best-in-class, designed to be adaptable, serviceable, secure,
              and scalable. We have a strong track record in providing
              customized software and other web development services involving
              the latest technologies and features. We accommodate Magento
              certified developers who are skilled professionals on different
              platforms like Drupal, JavaScript, WordPress, CSS3, HTML5, PHP,
              Joomla, and many more.
              <br /> <br />
              Our business analysts, UX/UI developers are well versed in
              implementing the blended system and web development services to
              corroborate better visibility and administration. They are
              unskilled, certified, and proficient across a variety of website
              platforms.
            </p>
          </div>
          <div className="flex flex-col my-8 mx-6 ">
            <img
              src="/icons/web-dev-icons/customizable-web-development.png"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* end Boost your web application---------------------- */}

      {/* start customised web application */}

      <section className="bg-lightGray container-fluid py-2">
        <div className="title text-center py-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1>
            Customized{" "}
            <span className="text-primary">
              {" "}
              Web Application Development <br /> Services{" "}
            </span>
            Entailing Your Needs
          </h1>
        </div>

        <div className="grid gap-8 my-4 px-5 sm:grid-cols-2 sm:px-10  md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col p-2 text-center sm:mx-2 bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/webdev.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl mx-4 text-center text-heading ">
              Advanced Web Development
            </h1>

            <p className="break-words mx-4 ">
              We at Nsspl can indeed deliver you a fast-running, fascinating
              website within a few days only. It takes our developers to
              integrate with HTML5, CSS3, Cake PHP 3. X technologies under a
              customized platform, and we are done.
            </p>
          </div>

          <div className="flex flex-col p-2 text-center sm:mx-2 bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/quality.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl text-center text-heading">
              Quality Assurance
            </h1>
            <p className="break-words mx-4">
              Before we introduce your new site, we at Nsspl want to
              double-check all the technical details that can prohibit a
              website's success, and hence we aim to deliver the quality that
              the client desires.
            </p>
          </div>

          <div className=" flex flex-col p-2 text-center sm:mx-2 bg-lightGray  rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/cloud.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl text-center text-heading">
              Cloud-Based Development
            </h1>
            <p className="break-words mx-4">
              Cloud computing platforms provide you with a stack of solutions
              that can speed up the development cycle, allowing you to consume
              resources as a service and pay only for what you use. It can be
              very cost-efficient and scalable.
            </p>
          </div>

          <div className=" flex flex-col p-2 text-center sm:mx-2 bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/integration.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl text-center text-heading">
              Consolidation & Integration
            </h1>
            <p className="break-words mx-4">
              Our team of experts understands the goal your website intends to
              accomplish to improve the site’s visibility to attract more users.
              We locate your needs, brand, and company identity, and then choose
              the right course of action.
            </p>
          </div>
          <div className=" flex flex-col p-2 text-center sm:mx-2 bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/team.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl mx-4 text-center text-heading ">
              Dedicated team
            </h1>

            <p className="break-words mx-4 ">
              Our mission is to work closely with our customers to develop
              results-oriented, profitable websites that include strategic
              placement of strong calls-to-action, a clear message, a
              professional design, and carefully-planned site architecture with
              our the dedicated team of developers and designers.
            </p>
          </div>

          <div className="flex flex-col p-2 text-center sm:mx-2 bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/agile.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl text-center text-heading">
              Agile Methodology
            </h1>
            <p className="break-words mx-4">
              Our team's efforts are directed towards customer satisfaction by
              early and continuous delivery of valuable software, and the
              amalgamated efforts of the organization deliver working software
              frequently. We focus on agile methodology.
            </p>
          </div>

          <div className=" flex flex-col p-2 text-center sm:mx-2 bg-lightGray  rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/cycle.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl text-center text-heading">
              Full Cycle Development
            </h1>
            <p className="break-words mx-4">
              NSSPL has a systematic process that allows us to work with you at
              your pace and maintains an atmosphere that empowers you to
              participate in the process. We're working together on this
              project. It's collaboration, not dictatorship.
            </p>
          </div>

          <div className=" flex flex-col p-2 text-center sm:mx-2 bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4">
            <img
              src="/icons/web-dev-icons/support.svg"
              alt=""
              height={70}
              width={70}
            />
            <h1 className="text-2xl text-center text-heading">
              Maintenance and Support
            </h1>
            <p className="break-words mx-4 ">
              Our team at Voziac will help you create appropriate and responsive
              tools (adapted to all platform formats and equipment), offering
              distinct user experiences and support users to keep them updated
              in the competition.
            </p>
          </div>
        </div>
      </section>
      {/* end customised web application */}

      {/* start  why choose nsspl */}

      <section className="container-fluid py-2">
        <div className="px-2 grid grid-cols-1 sm:grid-cols-1  ">
          {/* <div className="flex flex-col my-8 items-center lg:-ml-20 ">
            <img src="/icons/web-dev-icons/men.png" width={200} height={300} />
          </div> */}
          <div className="flex flex-col ">
            <div className="">
              <h1 className="py-2 text-center  font-bold text-xl xl:text-4xl 2xl:text-6xl">
                Why Choose <span className="text-primary font-bold">NSS?</span>
              </h1>
              <p className=" text-center text-lg leading-6 my-5">
                At NSSPL, we try to strengthen our customer experience by
                providing them with on-time excellent solutions at an affordable
                cost. We make application building strategies and use the
                requisite methodology to help enlarge your customer base by
                millions. Our focus is to deliver high-grade and dynamic
                software to businesses around the globe.
              </p>

              <div className="grid grid-cols-1 px-4 sm:grid-cols-2 sm:px-10 gap-6">
                <div className="p-4 shadow-lg flex flex-col items-center border-gray-300  hover:text-white rounded-lg text-center hover:bg-primary transition-shadow">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                  <h3 className="my-2 font-bold text-lg ">100% Transparency</h3>
                  <p>
                    We keep project progress visible and traceable right from
                    the inception to ensure the practicability of the task
                    deadlines
                  </p>
                </div>
                <div className="p-4 shadow-lg flex flex-col items-center border-gray-300 hover:text-white rounded-lg text-center hover:bg-primary ">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h3 className="my-2 font-bold text-lg ">On-time Delivery</h3>
                  <p className="">
                    A project is successful if the same gets delivered on time.
                    To seek on-time delivery, we plan and manage end-to-end
                    development activities.
                  </p>
                </div>

                <div className="p-4 shadow-lg flex flex-col items-center border-gray-300 hover:text-white rounded-lg text-center hover:bg-primary ">
                  <svg
                    className="h-10 w-10 my-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <h3 className="my-2 font-bold text-lg ">
                    Flexible Engagements
                  </h3>
                  <p className="">
                    Create websites that adjust in real-time to your customer’s
                    devices and offer them the best look and feel of your
                    website at all times.
                  </p>
                </div>

                <div className="p-4 shadow-lg flex flex-col items-center border-gray-300 hover:text-white rounded-lg text-center hover:bg-primary ">
                  <svg
                    className="h-10 w-10 my-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <h3 className="my-2 font-bold text-lg ">24X7 Support</h3>
                  <p>
                    Every member of our team brings different experiences and
                    skills to the table and is there to support the client 24*7
                    and cater to their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end why choose nsspl----------------------------------------------- */}
    </>
  );
}

export default WebDev;
