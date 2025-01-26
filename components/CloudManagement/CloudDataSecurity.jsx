import Image from "next/image";
import React from "react";
import Link from "next/link";

const CloudDataSecurity = () => {
  return (
    <section className="py-14 lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 max-w-[1453px] mx-auto px-5 sm:mx-10">
        <div className="max-w-[761px] lg:w-1/2">
          <h3 className={"textFlexCard-heading"}>
            Data Security and Compliance
          </h3>

          <p className="text-sm font-normal leading-7 mb-[30px] text-[#666666]">
            Safeguard your data with our robust security and compliance
            services. Our solutions include encryption, access control, and
            regular audits to protect your sensitive information. Stay compliant
            with industry standards and regulations, and mitigate risks with our
            proactive security measures.
          </p>

          <Link href={"/contact"}>
            <button className={`btnPrimary ${"textFlexCard-btn"}`}>
              Get Started
            </button>
          </Link>
        </div>

        <div className="w-[554px] hidden lg:inline-block">
          <Image
            src={"/imgs/data-security.jpg"}
            alt="cloud-img"
            width={687}
            height={381}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudDataSecurity;
