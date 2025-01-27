import React, { useState } from "react";
import Link from "next/link";
import ClientFocusTab from "../../components/ClientFocusTab";
import Heading from "../../components/Heading";
import QuickStart from "../../components/Homepage/QuickStart";
import DevelopmentProcess from "../../components/DevelopmentProcess";
import TechStack from "../../components/Homepage/TechStack";
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
      {/* Hero Section STARTS */}
      <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center lg:-mt-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col mb-16 md:mb-0 lg:text-left text-center">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                <span className="text-primary">E-Commerce</span> App Development
                Company
              </h1>
            </div>
            <p className="mb-5 text-center text-base md:text-left leading-relaxed">
              As an E-Commerce app development company, we will create
              customizable white-label E-Commerce app solutions per your
              business-specified needs.
            </p>
            <div className="flex mb-10 flex-col sm:flex-row gap-5 text-gray-600">
              <div>
                <li className="flex gap-2  items-center">
                  <BsCheckCircleFill size={25} className="text-primary" />
                  E-Commerce App Development
                </li>
                <li className="flex gap-2 mt-3 items-center">
                  <BsCheckCircleFill size={25} className="text-primary" />
                  Payment Gateway Integration
                </li>
              </div>
              <div>
                <li className="flex gap-2 items-center">
                  <BsCheckCircleFill size={25} className="text-primary" />
                  Shopping Cart Development
                </li>
                <li className="flex gap-2 mt-3 items-center">
                  <BsCheckCircleFill size={25} className="text-primary" />
                  Responsive Shopping Application
                </li>
              </div>
            </div>
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

          <div className="">
            <img
              className="object-contain object-center rounded sm:h-[500px]"
              alt="hero"
              src="/backgrounds/ecommerce-banner.webp"
              // width={500}
            />
          </div>
        </div>
      </section>
      {/* Hero Section ENDS */}

      {/* Top rated app development start------------------------------------------------------------ */}
      <section className="bgLinear-top text-gray-600 body-font">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                Top-Rated{" "}
                <span className="text-primary">E-commerce App Development</span>{" "}
                Company
              </h1>
            </div>
            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              With everything happening at our fingertips in today’s digital
              world, having a mobile app for your business is a cost-effective
              and profitable way to drive more revenue. With more than half of
              all internet traffic shopping from mobile devices, e-commerce
              business owners need to level up their e-commerce business by
              developing user-friendly and intuitive e-commerce apps.
            </p>

            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              As one of the best e-commerce app development companies, we build
              feature-rich, intuitive, and industry-standard e-commerce mobile
              applications to mobilize your e-commerce store. With our esteemed
              years of expertise and excellence in e-commerce app development,
              we provide the best-fit solutions that cater to our customer's
              requirements and gratify users with delightful shopping
              experiences.
            </p>

            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              We are backed by a team of highly qualified mobile app developers
              that craft the best-in-class e-commerce applications to support
              your online store and deliver a world-class user experience for
              your customers. Over the years, we have acquired an excellent
              track record of developing the best e-commerce apps for our
              prestigious clients using the best of our skills and abilities to
              ensure superior quality and effectiveness of apps.
            </p>
          </div>

          <div className="">
            <img
              src="/backgrounds/top-rated-banner.webp"
              width={600}
              height={400}
              className="lg:mr-[25px]"
            />
          </div>
        </div>
      </section>
      {/* Top rated app development End-------------------------------------------------------------------------- */}

      {/* Our Range Of start------------------------------------------------------------ */}
      <section className="sm:pb-10 sm:mx-10">
        <div className="title text-center items-center lg:my-9">
          <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            Our Range Of{" "}
            <span className="text-primary"> eCommerce App Development </span>{" "}
            Solutions
          </h1>
          <p className="my-4 text-center text-gray-600">
            We cater to all your e-commerce application development needs
          </p>
        </div>

        <div className="grid sm:grid-cols-3 sm:mt-8 mx-7 text-gray-600 gap-10">
          <div className="flex flex-col sm:min-h-[150px] lg:my-0 sm:my-9  items-left gap-2 box-border border-t-[2px] pt-3 border-primary">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">B2C</span>
            </h1>
            <p className="text-base lg:text-md">
              Our B2C experts ensure a rich customer experience through our
              eCommerce development services. Our B2C ECommerce solutions are
              based on a customer-centric strategy that comprehends the
              intricating needs of the end customers.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px] mt-5 items-left gap-2 box-border border-t-[2px] lg:mt-0 lg:ml-5 pt-3 border-primary">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">B2B</span>
            </h1>
            <p className="text-base lg:text-md">
              Pave the foundation of a result-oriented eCommerce development
              strategy for lucrative interaction between businesses having a
              buyer-seller interaction. We design and develop B2B app solutions
              considering the needs of diversified niches.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px] mt-5 items-left gap-2 box-border border-t-[2px] pt-3 lg:mt-0 lg:ml-5 border-primary">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">C2B</span>
            </h1>
            <p className="text-base lg:text-md">
              Streamlined implementation of C2B-based eCommerce app development
              strategy leads us to carve growth-oriented solutions. We ensure
              that both customers acting as sellers and businesses acting as
              buyers experience user-friendliness.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px]  items-left gap-2 box-border border-t-[2px] pt-3 border-primary">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">Multi-vendor Platform</span>
            </h1>
            <p className="text-base lg:text-md">
              We assist businesses to create eCommerce to operate the
              versatility of the audience. We provide them with a secure and
              robust environment to communicate with the customers and vendors
              more interactively.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px]  items-left gap-2 box-border border-t-[2px] lg:ml-5 pt-3 border-primary">
            <h1 className="font-bold text-lg text-heading">
              <span className="text-primary">White label</span>
            </h1>
            <p className="text-base lg:text-md">
              We consider the dynamic yet complex needs of customers, partners,
              businesses, and vendors and provide our ready-to-use,
              customizable, and feature-packed eCommerce app built through the
              agile development process.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px]  items-left gap-2 box-border border-t-[2px] lg:ml-5 pt-3 border-primary">
            <h1 className="font-bold text-lg text-heading text-left">
              <span className="text-primary">Third-Party Integration</span>
            </h1>
            <p className="text-base lg:text-md">
              Enhance the functionalities of your eCommerce apps by integrating
              third-party utilities such as marketing automation tools,
              chatbots, reports and analytics, BI tools, content management
              systems, and a lot more.
            </p>
          </div>
        </div>
        <div className="items-center flex flex-col mt-10">
          <Link href="/contact">
            <button className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Share Your Requirements
            </button>
          </Link>
        </div>
      </section>
      {/*Our Range Of End-------------------------------------------------------------------------- */}

      {/* Features start------------------------------------------------------------ */}
      <section className="homeAboutSection lg:mt-0 mt-10 pb-8">
        <div className="title text-center items-center my-3">
          <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            Explore Our{" "}
            <span className="text-primary">
              {" "}
              Feature-Rich E-Commerce Application
            </span>{" "}
            Panels
          </h1>
          <p className="my-4 text-center text-gray-600">
            Take your e-commerce delivery business to the next level with a
            complete suite of rich <br />
            and advanced features for customer, admin, and vendor panels.
          </p>
        </div>
        <div className="text-heading">
          <div className="">
            <ul className="flex justify-start pt-4 md:justify-center">
              <li
                onClick={() => setactive(1)}
                className={`hover:text-primary cursor-pointer border-primary inline mx-4 ${
                  active == 1 ? "border-b-2" : ""
                } `}
              >
                Customer App Panel
              </li>
              <li
                onClick={() => setactive(2)}
                className={`hover:text-primary cursor-pointer border-primary inline mx-4 ${
                  active == 2 ? "border-b-2" : ""
                } `}
              >
                Admin Panel
              </li>
              <li
                onClick={() => setactive(3)}
                className={`hover:text-primary cursor-pointer border-primary inline mx-4 ${
                  active == 3 ? "border-b-2" : ""
                } `}
              >
                Vendor Panel
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <div>
              {active == 1 && (
                <>
                  <div className="title lg:text-left lg:ml-[5.5rem] text-center py-3">
                    <h1 className="font-bold sm:leading-[45px] text-heading text-xl">
                      <span className="text-primary">Customer App Panel</span>
                    </h1>
                    <p className="text-center lg:text-left text-gray-600">
                      Our unique set of customer app features renders a seamless
                      experience.
                    </p>
                  </div>
                  <div className="grid gap-6 my-4 sm:grid-cols-4 sm:px-10 mx-7 md:grid-cols-4 lg:grid-cols-4">
                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Quick-Onboarding.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter.typeString("Quick Onboarding").start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        With direct social media profile integration, users can
                        easily register and log in to the app. This hassle-free
                        login process ensures smoother onboarding.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Social-Login-logout.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Social Login And Logout")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        We help ease the whole login and sharing process by
                        adding the comfort of Social Media integration to your
                        application.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Easy-product-filtering.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Easy Product Filtering")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        With advanced product search functionality, users can
                        easily search for a product with filters like price,
                        category, offers, promotions, and others.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Real-Time-Shipment-Tracking.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Real-Time Shipment Tracking")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Ensure transparency for your users with real-time
                        shipment tracking and notifications. Users can track
                        orders with real-time notifications with each milestone
                        achieved.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Multiple-payment-gateways.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Multiple Payment Gateways")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Users can make hassle-free payments with their own
                        choice of payment methods like debit cards, credit
                        cards, net banking, or any other secured payment apps.
                      </p>
                    </div>

                    <div className="flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Shipping-Details-Integration.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Shipping Details Integration")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        To keep your customers updated with how their product is
                        moving in real-time, we add integrations of some of the
                        top shipping providers: USPS, UPS, FedEx, Australian
                        Post, etc.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/quick-push-notifications.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Quick Push Notifications")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Inform users of the current status of their orders, new
                        offers, product promotions, or any other updates with
                        quick push notifications.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      {/* <div style={{ height: "40px", border: "1px solid red" }}> */}
                      <img
                        src="/icons/reviews-ratings.svg"
                        alt=""
                        // height={40}
                        // width={40}
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      {/* </div> */}
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Reviews and Ratings")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        This section allows your users to review and rate the
                        products that they have purchased from your ecommerce
                        app. With user feedback, you can work on the flaws.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {active == 2 && (
                <>
                  <div className="title lg:text-left lg:ml-[5.5rem] text-center py-3">
                    <h1 className="font-bold sm:leading-[45px] text-heading text-xl">
                      <span className="text-primary">Admin Panel</span>
                    </h1>
                    <p className="text-center lg:text-left text-gray-600">
                      A complete web panel that offers you the right set of
                      tools for managing your online e-commerce store smoothly.
                    </p>
                  </div>
                  <div className="grid gap-6 my-4 sm:grid-cols-3 sm:px-10 mx-7 md:grid-cols-3 lg:grid-cols-3">
                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/inventory-management.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Simplified Inventory Management")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Keep your inventory clean and up to date at all times
                        with an easy-to-use interface. The inventory management
                        dashboard comes with the ability to fetch inventory from
                        various third-party databases.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Easy-Product.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Easy Product Management")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Streamline your products by managing the categories with
                        an intuitive interface for adding photos, descriptions,
                        prices, etc. Admins will benefit from the flexibility by
                        adding and managing categories as per their own
                        requirements.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Real-Time-Notifications.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Real-Time Notifications")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Receive real-time notifications for the placed orders,
                        manage orders & payments, and inventory, across all your
                        systems for optimizing order fulfillment and delivering
                        orders in time.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Advanced-reporting.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter.typeString("Advanced Reporting").start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Track the performances of your sales, orders, and
                        delivery agents with AI-powered analytic tools. Generate
                        customized reports, and create various reports for
                        handling your sales, marketing, operations,
                        manufacturing, finance, and other areas.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/manage-users.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter.typeString("Manage Users").start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Being an admin, you will be able to manage your users by
                        giving them the right roles of manager, editor, or
                        co-admin. Restrict or offer access to different parts of
                        the app to your users thereby firmly remaining in
                        complete control of your app.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Manage-Promotions-rewards.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Manage Promotions & Rewards")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        As an admin, you can now create new offers for your
                        users and manage the offer and discounts of your
                        e-commerce app. In this section, your users can apply
                        promo codes and avail discounts as they purchase their
                        preferred products.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {active == 3 && (
                <>
                  <div className="title lg:text-left lg:ml-[5.5rem] text-center py-3">
                    <h1 className="font-bold sm:leading-[45px] text-heading text-xl">
                      <span className="text-primary">Vendor Panel</span>
                    </h1>
                    <p className="text-center lg:text-left text-gray-600">
                      Utilize the multi-vendor ecommerce marketplace software
                      and get a simple yet powerful vendor panel for managing
                      the order request effectively.
                    </p>
                  </div>

                  <div className="grid gap-6 my-4 sm:grid-cols-3 sm:px-10 mx-7 md:grid-cols-3 lg:grid-cols-3">
                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Order-mangment.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter.typeString("Order Management").start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        With the order management feature, the vendor can keep a
                        constant check on all the orders that are delivered to
                        the customers and those that are still in the queue.
                        With a seamless vendor panel dashboard, managing orders
                        has now become simpler.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Catalog-managment.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter.typeString("Catalog Management").start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Vendors can easily manage their products effectively
                        based on how they choose their featured products and
                        product categories. With proper management of products,
                        the vendors can attract the right target audience and
                        generate more sales.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Vendor-Membership.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Easy Vendor Membership")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        With a user-friendly interface, vendors cannot only view
                        the membership plans but also opt for an ideal one.
                        Membership can be renewed from the admin panel.
                        Additionally, they can also store and collect their
                        information like product limits, commission fees,
                        categories, and so on.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Delivery-Locations.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Manage Delivery Locations")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Customers get agitated when they choose a particular
                        product and find that it is undeliverable to their
                        location. This means that the product is not locally
                        available. With our solution, vendors can enable product
                        filtering and set their location so that the customers
                        can only see the nearby vendors.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Vendor-Membership.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Vendor Account Reports")
                              .start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Allow your vendor to view complete transaction details
                        of each order like commission amount, marketplace fee,
                        net payable amount, and shipping cost. In this way, the
                        vendors can manage their commission invoices for
                        tracking what they are paying to sell on your
                        marketplace.
                      </p>
                    </div>

                    <div className=" flex-col p-6 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left">
                      <img
                        src="/icons/Product-upload.svg"
                        alt=""
                        style={{
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <h1 className="font-bold text-lg text-heading mt-3 text-left">
                        <Typewriter
                          options={{ loop: false, delay: 50, autoStart: false }}
                          onInit={(typewriter) => {
                            typewriter.typeString("Product Upload").start();
                          }}
                        />
                      </h1>

                      <p className="text-base lg:text-md mt-3">
                        Uploading bulk products can be time-consuming for the
                        vendors. With our multi-vendor marketplace solution,
                        they can seamlessly upload product pictures and edit
                        product information while making changes to the offers
                        in real-time.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Features End-------------------------------------------------------------------------- */}

      {/* Custom start------------------------------------------------------------ */}
      <section className="sm:pt-3">
        <div className="title text-center items-center my-3">
          <h1 className="font-bold sm:leading-[45px] text-heading pt-5 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            Custom <span className="text-primary">E-commerce Applications</span>{" "}
            for <br />
            All <span className="text-primary">Businesses</span>
          </h1>
          <p className="my-4 text-center text-gray-600">
            Take your ecommerce delivery business to the next level with a
            complete suite of rich <br />
            and advanced features for customer, admin, and vendor panels.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 sm:mt-8 mx-7 sm:mx-20">
          <div className="flex flex-col portfolioSlideCard sm:min-h-[150px] items-center text-center gap-2 box-border border-[1px] p-5 rounded-[10px] border-primary">
            <img
              src="/icons/web-dev-icons/top-rated-ecomm-1.png"
              alt=""
              height={50}
              width={50}
            />
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              Traditional Businesses
            </h1>
            <p className="text-gray-600">
              Ready to take your brick-and-mortar store online? We can help you
              get started. Build a remarkable online presence and reach your
              mobile customers at all times.
            </p>
          </div>

          <div className="flex flex-col portfolioSlideCard sm:min-h-[150px] items-center mt-5 gap-2 box-border border-[1px] lg:mt-0 lg:ml-5 p-5 rounded-[10px] border-primary">
            <img
              src="/icons/web-dev-icons/top-rated-ecomm-2.png"
              alt=""
              height={50}
              width={50}
            />
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              Start-Ups
            </h1>
            <p className="text-gray-600">
              Looking to expand your e-commerce business territories? We can
              help you with our e-commerce app development services that will
              take your business to a whole new level.
            </p>
          </div>

          <div className="flex flex-col portfolioSlideCard sm:min-h-[150px] mt-5 items-center gap-2 box-border border-[1px] lg:mt-0 lg:ml-5 p-5 rounded-[10px] border-primary">
            <img
              src="/icons/web-dev-icons/top-rated-ecomm-3.png"
              alt=""
              height={50}
              width={50}
            />
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              Joint Ventures
            </h1>
            <p className="text-gray-600">
              Planning to level up your joint ventures? Our e-commerce app
              development services can give you a competitive edge in the
              market.
            </p>
          </div>
        </div>
        <div className="items-center flex flex-col">
          <Link href="/contact">
            <button className="mt-10 lg:mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Request a free consultant
            </button>
          </Link>
        </div>
      </section>
      {/* Custom End-------------------------------------------------------------------------- */}

      {/* Tech Stack STARTS */}
      <section className="bg-lightGray lg:mt-0 mt-10 pb-8">
        <div className=" pt-8 text-heading">
          <h1 className="text-center text-5xl text-heading">
            Technology <span className="text-primary"> Engagement </span>
          </h1>
          <div className="mt-4">
            <div>
              <ul className="flex justify-center gap-8 flex-wrap">
                <li>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src="/icons/woo-commerce.png" height={75} width={75} />{" "}
                    WooCommerce
                  </div>
                </li>
                <li>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src="/icons/shopify.png" height={75} width={75} />{" "}
                    Shopify
                  </div>
                </li>
                <li>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src="/icons/kentico.png" height={75} width={75} />{" "}
                    Kentico
                  </div>
                </li>
                <li>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src="/icons/nop-commerce.png" height={75} width={75} />{" "}
                    Nopcommerce
                  </div>
                </li>
                <li>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src="/icons/magento.png" height={75} width={75} />{" "}
                    Magento
                  </div>
                </li>
                <li>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src="/icons/bigcommerce.png" height={75} width={75} />{" "}
                    Big Commerce
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Stack ENDS */}

      {/* contact us START */}
      <QuickStart />
      {/* contact us ENDS */}
    </>
  );
};

export default Ecommerce;
