import React from "react";

function Partners() {
  return (
    <div className=" bg-lightGray mt-14 mb-10 py-2 pb-5">
      <div className="title ">
        <h1 className="text-bold text-4xl text-center my-2 sm:text-4xl md:text-5xl lg:text-5xl text-heading">
          Our <span className="text-primary"> Partners</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5 items-center my-10 mx-5 sm: flex-col md:flex-row lg:flex-row">
        <div className="mx-2">
          <img src="/logo/touchbase.webp" alt="" height={200} width={200} />
        </div>

        <div className="mx-2">
          <img src="/logo/gols.png" alt="" height={180} width={180} />
        </div>

        <div className="mx-2">
          <img src="/logo/nbs-logo.png" alt="" height={24} width={250} />
        </div>
        <div className="mx-2">
          <img src="/logo/stallion.jpeg" alt="" height={24} width={100} />
        </div>
        <div className="mx-2">
          <img src="/logo/softtech.jpeg" alt="" height={180} width={180} />
        </div>
        <div className="mx-2">
          <img src="/logo/vueporteq.png" alt="" height={200} width={200} />
        </div>
        {/* <div className="mx-2">
          <h1 className="text-5xl italic text-heading">91 Soft Tech </h1>
        </div> */}
      </div>
    </div>
  );
}

export default Partners;
