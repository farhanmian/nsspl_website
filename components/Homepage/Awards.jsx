import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Awards = () => {
  return (
    <div className="sm:px-10 bg-lightGray py-10">
      <div className="flex flex-col mb-5">
        <h1 className="text-center text-heading text-[42px] font-extrabold">
          We are <span className="text-standardGreen">Listed on</span>
        </h1>
      </div>
      <div className="pointer-events-none">
        <Swiper
          spaceBetween={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          //   centeredSlides={true}
          navigation={true}
          loop={true}
          slidesPerView={"auto"}
          modules={[Navigation, Pagination]}
          className="mySwiper-awards "
        >
          <SwiperSlide className=" flex justify-center">
            <a
              href="https://www.appfutura.com/companies/nss-private-limited"
              target="_blank"
            >
              <div className="h-[150px] w-[200px] flex justify-center">
                <img src="/awards/appfutura.png" className="img-fluid" alt="" />
              </div>
            </a>
          </SwiperSlide>
          {/* <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/business.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/topdeveloper.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide> */}
          <SwiperSlide className=" flex justify-center">
            <a
              href="https://www.goodfirms.co/company/nss-private-limited"
              target="_blank"
            >
              <div className="h-[150px] w-[200px] flex justify-center">
                <img
                  src="/awards/goodfirms02.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <a
              href="https://clutch.co/profile/nss-private/#summary"
              target="_blank"
            >
              <div className="h-[150px] w-[200px] flex justify-center">
                <img src="/awards/clutch02.png" className="img-fluid" alt="" />
              </div>
            </a>
          </SwiperSlide>
          {/* <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/topmobile.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/expertise.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/digitalbest.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/selectedfirms.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex justify-center">
                <div className="h-[150px] w-[200px] flex justify-center">
                <img src='/awards/topcompany.png' className="img-fluid" alt="" />
                </div>
            </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Awards;
