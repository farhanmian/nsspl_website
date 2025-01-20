import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../helper/data";
import { getHomeCaseStudy } from "../../helper/constant";

const PortfolioSlideNew = () => {
  const [allData, setAllData] = React.useState({
    caseStudyList: [],
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });
  React.useEffect(() => {
    fetchCaseStudyHome();
  }, []);

  function fetchCaseStudyHome() {
    const payload = {
      page: 1,
      limit: 10,
      isActive: true,
      isHome: true,
    };
    fetch(getHomeCaseStudy, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setAllData(data.data);
        }
      });
  }

  return (
    // w-4/5
    <div className="py-5 lg:mx-16 mx-7  customSlider">
      <div className="flex flex-col mb-5">
        <h1 className="text-center text-heading text-[42px] font-extrabold">
          <span className="text-standardGreen">Projects</span>
        </h1>
      </div>

      <div>
        <Swiper
          spaceBetween={2}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          // centeredSlides={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          className="mySwiper"
          loop={true}
          // slidesPerView={2}
          modules={[Navigation]}
        >
          {allData.caseStudyList.map((item, index) => (
            <SwiperSlide
              className={"sm:w-8/12 innerSlide gap-4"}
              key={index + 1}
            >
              <div
                className={`items-center bg-gray-100 rounded-3xl m-auto   py-8 px-4 mx-1  lg:gap-0 lg:grid-cols-2`}
              >
                <div className="flex items-center lg:items-start flex-col gap-2">
                  <h2 className="text-lg pb-3 w-full overflow-auto">
                    {item.projectType.map((tag) => (
                      <span
                        className={
                          "pr-5 text-sm  text-heading font-black uppercase"
                        }
                      >{`#${tag.project_type}`}</span>
                    ))}
                  </h2>
                  <div className="flex justify-evenly img-portfolio w-full bg-blue-200 py-3">
                    <img src={item.mainimg} />
                    <img src={item.flipimg} />
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <h1 className="text-md text-heading font-black uppercase">
                      {item.title}
                    </h1>
                    <span className="badge border-0 bg-[#2AA126] font-black uppercase">
                      {item.country}
                    </span>
                  </div>
                  {item.technology.length > 0 && (
                    <div className="flex gap-2 w-full flex-wrap text-elips">
                      {item.technology.map((tag) => (
                        // badge border-0 bg-[#2AA126]
                        <span className="text-heading font-black text-sm">
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-center text-lg w-full text-primary pt-3 font-black`}
                  >
                    <Link href={`/projects/${item._id}`}>
                      View Case Study
                      {/* <button className='p-2 rounded-xl bg-darkGray border-0'></button> */}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSlideNew;
