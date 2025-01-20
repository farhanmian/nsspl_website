import React from "react";

const Management = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-[42px] text-heading">
        Our <span className="text-primary">Management</span>
      </h1>
      <div className="flex flex-col sm:flex-row gap-20 items-center justify-center mt-10">
        {/* first */}
        <div className="rounded-xl shadow-lg cursor-pointer flex flex-col w-40">
          <img src="/team/anupam.jpeg" className="h-40 w-40 " />
          <div className="p-5">
            <h1 className="uppercase text-heading">Anupam Shrivastava</h1>
            <h4 className="uppercase text-para text-sm">CEO/Director</h4>
          </div>
        </div>

        <div className="rounded-xl shadow-lg cursor-pointer flex flex-col w-40">
          <img src="/team/santosh.jpeg" className="h-40 w-40" />
          <div className="p-5">
            <h1 className="uppercase text-heading"> santosh khare</h1>
            <h4 className="uppercase text-para text-sm">cto/director</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
