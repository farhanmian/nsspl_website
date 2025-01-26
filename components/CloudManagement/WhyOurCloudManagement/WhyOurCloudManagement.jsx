import React from "react";
import TextHeading from "../../partials/TextHeading/TextHeading";
import Image from "next/image";

const data = [
  {
    icon: "/imgs/cloud-management/customization.svg",
    title: "Customization",
    description:
      "We tailor our services to meet the unique needs and goals of your business",
  },
  {
    icon: "/imgs/cloud-management/proactive-approach.svg",
    title: "Proactive Approach",
    description:
      "We continuously monitor and optimize your cloud environment to ensure peak performance.",
  },
  {
    icon: "/imgs/cloud-management/customer-support.svg",
    title: "Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any cloud-related issues.",
  },
  {
    icon: "/imgs/cloud-management/cost-effective-solutions.svg",
    title: "Cost-Effective Solutions",
    description:
      "We help you optimize your cloud spending without compromising on quality or security.",
  },
];

const WhyOurCloudManagement = () => {
  return (
    <section className="py-14 lg:pt-[92px] lg:pb-[109px] bg-[#F7F7F7]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:mx-10">
        <TextHeading
          heading="Why Choose Our Cloud Management Services?"
          text="Partner with us for a seamless cloud experience. Here’s why businesses trust us"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-x-11">
          {data.map((item, i) => (
            <div
              key={i}
              className="py-11 px-4 xl:px-10 w-full bg-white rounded-[10px] border-b-2 border-primary"
              style={{ boxShadow: "1px 4px 20px -2px #0000001A" }}
            >
              <Image
                src={item.icon}
                width={63}
                height={63}
                className="mb-[14px]"
              />
              <p className="text-lg font-semibold mb-1.5">{item.title}</p>
              <p className="text-xs font-normal text-[#666666] leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOurCloudManagement;
