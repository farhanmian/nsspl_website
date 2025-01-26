import React from "react";

const AboutHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" mx-auto flex px-5 py-10 sm:mx-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mr-auto title-font sm:text-left text-[54px] font-bold mb-3 text-gray-900">
            About <span className="text-primary"> Us </span>
          </h1>
          <p className="mb-4 text-justify text-sm leading-relaxed">
            NSS Pvt. Ltd. was established in 2005. NSS has a band of 100+ highly
            qualified and trained professionals championing the global cause of
            digitization and digitalization. We are proud to have delivered 850+
            projects across 30+ countries in the diverse fields of education,
            healthcare, banking, hospitality, entertainment, eCommerce, travel,
            etc.
          </p>

          <p className="mb-4 text-justify text-sm leading-relaxed">
            NSS provides a reasonably complex result that would suit your
            requirements and your business signature. We provide a development
            solution with which you can help your business reach a new level.
            Our beguiling services make you comfortable with the emerging
            technology, and we strive to provide a solution that will bring
            satisfaction and retention to your brand.
          </p>

          <p className="mb-4 text-justify text-sm leading-relaxed">
            We enable businesses across the globe to scale, transform, and gain
            a competitive advantage. As a leading custom app development
            services provider, we are acknowledged in the industry owing to our
            client-centric approach.
          </p>
        </div>

        <div className="">
          <img
            className="object-contain object-center rounded max-h-[500px]"
            alt="hero"
            src="/backgrounds/banner15.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
