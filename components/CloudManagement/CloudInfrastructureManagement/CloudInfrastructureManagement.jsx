import Image from "next/image";
import React from "react";
import Link from "next/link";

const CloudInfrastructureManagement = () => {
  return (
    <section className="py-14 lg:py-[100px]">
      <div className="flex justify-between items-center gap-x-10 max-w-[1453px] mx-auto px-5 sm:mx-10">
        <div className="w-[554px] hidden lg:inline-block">
          <Image
            src={"/imgs/cloud-infrastructure-management.jpg"}
            alt="cloud-img"
            width={687}
            height={381}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-[761px] lg:w-1/2">
          <h3 className={"textFlexCard-heading"}>
            Cloud Infrastructure Management
          </h3>

          <p className="text-sm font-normal leading-7 mb-[30px] text-[#666666]">
            Efficiently manage your cloud resources with our comprehensive
            infrastructure management solutions. We provide seamless
            integration, automated scaling, and real-time monitoring to ensure
            your cloud environment runs smoothly and efficiently. Optimize
            performance and reduce costs with our advanced tools and expert
            support.
          </p>

          <Link href={"/contact"}>
            <button className={`btnPrimary ${"textFlexCard-btn"}`}>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CloudInfrastructureManagement;
