import React from "react";
import Link from "next/link";

const QuickStart = () => {
  return (
    <>
      <div className=" bg-primary flex flex-col h-40 justify-center">
        <div className="flex justify-center pt-2">
          <h1 className="text-white font-bold text-4xl ">Start Your Project</h1>
        </div>
        <div className="flex justify-center mt-5">
          <button className="border-solid border-2 border-white bg-white text-primary font-sm py-2 px-4 rounded hover:shadow-md duration-200 active:shadow-sm">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuickStart;
