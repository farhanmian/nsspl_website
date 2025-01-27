import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
const Hero = () => {
  return (
    // <section className="text-heading  h-[65vh] bg-[url('/backgrounds/banner023.png')] bg-right  bg-no-repeat">
    <section className="text-heading">
      <div className="max-w-screen-2xl mx-auto flex px-5 py-2 mt-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-12 flex flex-col md:items-start md:text-left md:mb-0 items-center max-w-[800px]">
          <h1 className=" sm:text-[60px] leading-[57px] text-3xl sm:mt-10 font-bold text-heading">
            {" "}
            We Believe
          </h1>
          <div className="min-h-[150px] sm:mt-6">
            <h1 className="lg:hidden text-center md:text-left title-font sm:text-[40px] leading-[57px] text-2xl mb-8 font-bold text-primary">
              TECHNOLOGY IS INSPIRED BY VISION.... WITHOUT THAT THERE IS NO
              USEFUL SOLUTION!!
            </h1>
            <h1 className="hidden lg:block text-center md:text-left title-font sm:text-[40px] leading-[57px] text-2xl mb-8 font-bold text-primary">
              TECHNOLOGY IS INSPIRED BY VISION.... WITHOUT THAT THERE IS NO
              USEFUL SOLUTION!!
              {/* <Typewriter
                options={{ loop: false, delay: 50, autoStart: false }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "TECHNOLOGY IS INSPIRED BY VISION.... WITHOUT THAT THERE IS NO USEFUL SOLUTION!! "
                    )
                    .start();
                }}
              /> */}
            </h1>
          </div>
          <button className=" text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold rounded-full">
            <Link href="/contact">Get Started</Link>
          </button>
        </div>
        <div className="relative">
          <div
            className="absolute w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right,#ffffff90 0.5%, transparent 8%)",
            }}
          />
          <Image
            src="/imgs/home-heade.gif"
            width={700}
            height={400}
            className="object-contain object-center rounded sm:h-[400px] w-auto"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
