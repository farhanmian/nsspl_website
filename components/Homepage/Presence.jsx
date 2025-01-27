import React from "react";
import ProgressBar from "../ProgressBar";
import RadialBar from "../RadialBar";
import Image from "next/image";

const Presence = () => {
  return (
    <section className=" py-2 flex flex-col items-center xl:px-20 mb-16">
      <h1 className=" text-[42px] font-bold text-heading text-center">
        Our <span className="text-primary"> Presence</span>
      </h1>
      <p className="text-para text-lg py-10 text-center">
        We offer a full development cycle - a one stop shop for all of your
        software development needs.
      </p>

      <div className="grid  xl:grid-cols-2 lg:justify-around gap-16 py-2">
        <div className="shadow-lg rounded-lg flex flex-col px-5 py-4 sm:min-w-[500px]">
          <div className=" ">
            <h1 className="text-heading text-4xl font-extrabold">
              Our <span className="text-primary">Global Reach</span>
            </h1>
            <div className="mt-10 text-[#666666] text-md flex flex-col gap-6">
              <ProgressBar title={"USA"} percent={75} />
              <ProgressBar title={"India"} percent={25} />
              <ProgressBar title={"Europe"} percent={60} />
              <ProgressBar title={"Asia"} percent={60} />
            </div>
          </div>
        </div>

        {/* <div className="shadow-lg rounded-lg flex flex-col px-5 py-4 sm:min-w-[500px]">
          <div className=" ">
            <h1 className="text-heading text-4xl font-extrabold">
              Solutions <span className="text-primary">Delivered</span>
            </h1>
            <div className="mt-10 text-[#666666] text-md flex flex-col gap-6">
              <ProgressBar title={"Mobile / Web"} percent={60} />
              <ProgressBar title={"E-Commerce "} percent={10} />
              <ProgressBar title={"NFT / Blockchain"} percent={3} />
              <ProgressBar title={"Staff Augmentation"} percent={15} />
              <ProgressBar title={"Cloud Computation"} percent={10} />
              <ProgressBar title={"AI / ML"} percent={2} />
            </div>
          </div>
        </div> */}

        {/* <div className="shadow-lg rounded-lg flex flex-col px-5 py-4 sm:min-w-[500px]">
        </div> */}
        <div className="hidden xl:block">
          <Image
            src={"/imgs/our-presence.jpg"}
            width={500}
            height={300}
            className="w-[200px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Presence;
