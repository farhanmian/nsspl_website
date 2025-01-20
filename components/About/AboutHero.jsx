import React from "react";

const AboutHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" mx-auto flex px-5 py-10 sm:mx-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-center sm:text-left text-[70px] font-bold mb-4 text-gray-900">
            About <span className="text-primary"> Us </span>
          </h1>
          <p className="sm:mb-8 text-center text-2xl md:text-left leading-relaxed">
            We are experts in Business process improvements by leveraging the
            next generation technologies !
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
