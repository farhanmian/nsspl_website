import React from "react";

const Aboutinfo = () => {
  return (
    <div className="grid gap-4 sm:gap-0 sm:grid-cols-2 px-10 py-10 items-center">
      <div className="px-4">
        <h1 className="text-3xl text-heading">
          As one of the leading{" "}
          <span className="text-primary font-bold">Information</span> Technology
          consulting companies,{" "}
          <span className="text-primary font-bold">NSS Private Limited</span>{" "}
          delivers{" "}
          <span className="text-primary font-bold">tailored IT solutions </span>{" "}
          to organizations globally.{" "}
        </h1>
      </div>
      <div className="text-base leading-9">
        <h1>
          With NSS as your partner, we can heap your organization forward with
          highly effective IT strategies and implement innovative Cloud
          solutions. NSS is focused on developing highly secure and scalable
          Mobile and Web based cloud solutions for our Global Clients with{" "}
          <span className="text-primary font-bold">
            {" "}
            complete vertical support.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Aboutinfo;
