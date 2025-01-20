import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const PortfolioItemRight = ({ item, key }) => {
  let [hovered, sethovered] = useState(false);
  let router = useRouter();

  return (
    <>
      <div
        key={key}
        className="flex flex-col sm:flex-row sm:px-10 sm:pl-20 mb-10"
      >
        <div className=" flex-1 flex mb-5 sm:hidden">
          <div className="w-full flex img-portfolio-list py-3 justify-evenly">
            <img src={item.mainimg} className="companyWrapper1" />
            <img src={item.flipimg} className="companyWrapper1" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 sm:pl-0 px-10">
          <div>
            <h2 className="flex text-lg pb-3 flex-wrap">
              {item.projectType.map((tag) => (
                <span
                  className={"pr-5 text-2xl text-heading font-black uppercase"}
                >{`#${tag.project_type}`}</span>
              ))}
            </h2>
            <h1 className="text-2xl text-heading font-black uppercase">
              {item.title}
            </h1>
          </div>
          <div className="flex gap-2 w-full flex-wrap">
            {item.technology.map((tag) => (
              // badge border-0 bg-[#2AA126]
              <span className="text-heading text-xl font-black">
                #{tag.name}
              </span>
            ))}
          </div>
          <div
            className=" font-medium text-md text-lg mb-3 text-para"
            dangerouslySetInnerHTML={{ __html: item.detail }}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col max-w-sm">
              <div className={"flex"}>
                <div className={"mr-2 flex"}>
                  <img
                    src={"/globe-svgrepo-com.svg"}
                    className={"m-auto height-35"}
                    object-fit="cover"
                  />
                </div>
                <div>
                  <h1 className="font-extrabold text-primary text-xl">
                    Country:
                  </h1>
                  <h1 className="text-lg font-bold">{item.country}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-sm">
              <div className={"flex"}>
                <div className={"mr-2 flex"}>
                  <img
                    src={"/time-svgrepo-com.svg"}
                    className={"m-auto height-35"}
                    object-fit="cover"
                  />
                </div>
                <div>
                  <h1 className="font-extrabold text-primary text-xl">
                    Duration:
                  </h1>
                  <h1 className="text-lg font-bold">{item.duration}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {item.tags?.map(tag => (
                        <div className="badge bg-[#2AA126] border-0">{tag}</div>
                    ))}
                </div> */}
          <div
            className={`text-center w-full text-primary text-lg pt-3 font-black`}
          >
            <Link href={`/projects/${item._id}`}>
              View Case Study
              {/* <button className='p-2 rounded-xl bg-darkGray border-0'></button> */}
            </Link>
          </div>
        </div>

        <div className=" flex-1 flex hidden sm:block">
          <div className="w-full flex img-portfolio-list py-3 justify-evenly">
            <img src={item.mainimg} className="companyWrapper1" />
            <img src={item.flipimg} className="companyWrapper1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItemRight;
