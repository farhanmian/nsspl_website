import React from "react";

const Industries = () => {
  return (
    <div className="homeOurPartners py-10">
      <div>
        <h1 className="text-heading text-[42px] font-bold text-center">
          Industry <span className="text-primary"> Verticals</span>
        </h1>
      </div>
      <div className="grid items-center justify-items-center sm:grid-cols-2 gap-10 py-4 px-10 lg:grid-cols-5 xl:px-32 justify-center text-heading">
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/fintech.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Fintech</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/blockchain.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Blockchain/NFT</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/social.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Social Media</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/health.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Health</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/education.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Ed-Tech</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/entertainment.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Media</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/transport.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Transport</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/construction.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Construction</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/ecommerce.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">E-commerce</h1>
        </div>
        <div className="bg-white min-h-[200px] min-w-[200px]  shadow-md rounded flex flex-col justify-center items-center gap-4 p-4">
          <div className="h-[75px] w-[75px] flex justify-center">
            <img src="/industries/startup.svg" height="75%" width="75%" />
          </div>
          <h1 className="text-2xl sm:text-lg">Startup Solutions</h1>
        </div>
      </div>
    </div>
  );
};

export default Industries;
