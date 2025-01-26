import Image from "next/image";
import Link from "next/link";
import React from "react";

const CloudManagementAbout = () => {
  return (
    <section className=" mb-14 md:mb-16 lg:mb-[100px] py-14 lg:py-[116px] border-b border-[#E7E7E7]">
      <div className="flex flex-col-reverse lg:flex-row max-w-[1572px] mx-auto px-5 sm:mx-10 justify-between gap-10 xl:items-center">
        <div className="max-w-[718px] lg:w-1/2">
          <h3 className={"textFlexCard-heading"}>
            Empower Your Business with Comprehensive Cloud Management Services
          </h3>

          <p className="text-sm font-normal leading-7 mb-[30px] text-[#666666]">
            Our company provides end-to-end cloud management solutions designed
            to help businesses harness the full potential of cloud computing.
            From initial setup to ongoing management and optimization, our team
            of experts ensures your cloud infrastructure is secure, efficient,
            and scalable
          </p>

          <Link href={"/contact"}>
            <button className={`btnPrimary ${"textFlexCard-btn"}`}>
              Get Started
            </button>
          </Link>
        </div>

        <div className="w-[550px] hidden lg:inline-block xl:w-[687px]">
          <Image
            src={"/imgs/cloud-page-about.png"}
            alt="cloud-img"
            width={687}
            height={341}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudManagementAbout;
