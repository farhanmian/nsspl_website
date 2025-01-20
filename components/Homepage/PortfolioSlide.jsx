import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../helper/data";

const PortfolioSlide = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col mb-5">
        <h1 className="text-center text-heading text-[42px] font-extrabold">
          <span className="text-standardGreen">Projects</span> Showcase
        </h1>
      </div>

      <div>
        <Swiper
          spaceBetween={1}
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
              slidesPerView: 2,
            },
          }}
          //   centeredSlides={true}
          //  navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          slidesPerView={"auto"}
          modules={[Navigation, Pagination]}
        >
          {data.map((item) => (
            <SwiperSlide>
              <div className="grid items-center gap-6 lg:gap-0 lg:grid-cols-2 py-10">
                <div>
                  <img src={item.mainimg} />
                </div>

                <div className="flex items-center lg:items-start flex-col gap-5">
                  <div>
                    <h2 className="text-xl">{"Category"}</h2>
                    <h1 className="text-4xl">{item.title}</h1>
                  </div>
                  <p className="pr-2 text-center lg:text-left">{item.detail}</p>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span className="badge border-0 bg-[#2AA126]">{tag}</span>
                    ))}
                  </div>
                  <div>
                    <Link href={`/projects/${item.id}`}>
                      <button className="p-2 rounded-xl bg-darkGray border-0">
                        View Case Study
                      </button>
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

export default PortfolioSlide;
