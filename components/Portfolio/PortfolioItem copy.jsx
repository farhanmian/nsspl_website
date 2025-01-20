import { useRouter } from "next/router";
import { useState } from "react";

const PortfolioItem = ({ item, key }) => {
  let [hovered, sethovered] = useState(false);
  let router = useRouter();
  const navto = () => {
    router.push(`/projects/${item._id}`);
  };

  return (
    <>
      <div
        key={key}
        className="grid mx-2 gap-5  py-5 rounded-lg shadow-lg  items-center text-center sm:text-left lg:grid-cols-[4fr_6fr] sm:mx-10 sm:px-10 sm:gap-20 md:gap-32"
      >
        <div
          onMouseEnter={() => sethovered(true)}
          onMouseLeave={() => sethovered(false)}
          className=" flex-1 flex justify-center "
        >
          <div className="relative">
            <img
              src={item.mainimg}
              className={`absolute h-[356px] w-[422px] object-contain ${
                hovered ? "flipped" : "flip-img"
              }`}
            />
            <img
              src={item.flipimg}
              className={`h-[356px] w-[422px] object-contain ${
                hovered ? "flip-img" : "flipped"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h1 className="text-xl font-extrabold uppercase">{"Category"} </h1>
            <h1 className="text-3xl font-extrabold uppercase">{item.title} </h1>
          </div>
          <div className=" font-medium text-lg text-para">
            <p>{item.detail}</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {item.tags?.map((tag) => (
              <div className="badge bg-[#2AA126] border-0">{tag}</div>
            ))}
          </div>
          <div>
            <button
              onClick={navto}
              className="bg-darkGray p-2 rounded-lg hover:scale-105 transition-all"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
