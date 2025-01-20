import React from "react";

function Ondemand() {
  return (
    <section className="container-fluid my-10">
      <div className="title text-center items-center my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
        <h1 className="font-bold sm:leading-[45px] text-heading ">
          Quick to <span className="text-primary">Market</span>
        </h1>
      </div>
      {/* <div className="title text-center text-4xl">
        <h1 className="text-center text-[42px] text-heading">
          Quick to <span className="text-primary">Market</span>
        </h1>
      </div> */}

      <div className="grid gap-7 my-4 mx-10 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" flex flex-col bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4 p-2 sm:p-8 hover:scale-105 hover:bg-white">
          <img src="/industries/food.png" alt="" height={300} width={300} />
          <h1 className="text-2xl text-center text-heading ">
            Food & Grocery Delivery
          </h1>
        </div>

        <div className="flex flex-col bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4 p-2 sm:p-8 hover:scale-105 hover:bg-white">
          <img src="/industries/doctor.png" alt="" height={300} width={300} />
          <h1 className="text-2xl text-center text-heading">
            Online Doctor Appointment
          </h1>
        </div>

        <div className=" flex flex-col bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4 p-2 sm:p-8 hover:scale-105 hover:bg-white">
          <img
            src="/industries/ecommerce.png"
            alt=""
            height={300}
            width={300}
          />
          <h1 className="text-2xl text-center text-heading">
            Ecommerce Multi-Vendor
          </h1>
        </div>

        <div className=" flex flex-col bg-lightGray rounded-xl shadow-lg justify-center items-center gap-4 p-2 sm:p-8 hover:scale-105 hover:bg-white">
          <img src="/industries/nft.png" alt="" height={300} width={300} />
          <h1 className="text-2xl text-center text-heading">
            NFT Market Place
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Ondemand;
