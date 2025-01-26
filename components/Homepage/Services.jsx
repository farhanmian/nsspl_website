import React from "react";

const Services = () => {
  return (
    <div className="bg-lightGray flex justify-center sm:py-10 sm:px-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-4xl text-heading">
          Our <span className="text-primary"> Services </span>
        </h1>
        <p className="text-center text-[#7E7E7E] sm:px-10 md:px-40">
          Map a strategy, create a user friendly product experience, deliver
          reliable cross-platform solution with on-boarding and staff training.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 sm:mt-8">
          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/app-development.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              Application Development
            </h1>
            <p className="text-center text-sm  text-[#666666] hover:text-primary">
              We build and design creative mobile app. Our developers are
              experienced with both native and cross platform.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/web-development.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              Web Development
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Our exceptional designers can create stunning and intuitive
              websites or web apps for your business
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/ecommerce.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              E-commerce Solution{" "}
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Build your e-commerce solutions with our proven time-cost
              optimised approach.{" "}
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/blockchain.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              NFT and Blockchain{" "}
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Create NFTs For A Range of Physical & Digital Assets in Record
              Timelines.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/developer.svg" width={44} height={40} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              Staff Augmentation
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              NSSPL provides highly reliable dedicated development teams who
              have vast experience and expertise in latest web and mobile
              software development technologies required for any project.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/cloudcomputing.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              Cloud Services{" "}
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Explore cloud-based solutions with NSS that combine powerful
              infrastructure choices, a robust development platform{" "}
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/machinelearning.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              AI/ML{" "}
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Under the umbrella of our exceptional AI and ML Services, we craft
              powerful and innovative AI solutions with our software, mobile,
              and web development expertise.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/customer.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              Back office support
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Data Entry and Data mining are some of the basic tasks with
              Knowledge Processing activity
            </p>
          </div>
          <div className="flex flex-col sm:min-h-[250px]  items-center gap-4 ">
            <img src="/icons/digital marketing.svg" width={52} height={50} />
            <h1 className="font-bold text-2xl text-heading hover:text-primary text-center">
              Digital Marketing
            </h1>
            <p className="text-center text-sm text-[#666666] hover:text-primary">
              Discover the power of Digital Marketing and how it can help your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
