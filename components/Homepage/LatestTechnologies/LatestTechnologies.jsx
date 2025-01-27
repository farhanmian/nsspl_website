import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";
import styles from "./LatestTechnologies.module.css";
import Link from "next/link";
import OurServicesIcon1 from "../../icons/OurServicesIcon1";
import { ArrowForwardIos } from "@mui/icons-material";

const cardData = [
  {
    img: "/imgs/services/app-development.png",
    title: "App Development",
    link: "/services/appdev/",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "AD",
  },
  {
    img: "/imgs/services/web-development.jpg",
    title: "Web Development",
    link: "/services/webdev",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "WD",
  },
  {
    img: "/imgs/services/e-commerce.jpg",
    title: "Ecommerce Solutions",
    link: "/services/enterprise",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "ES",
  },
  {
    img: "/imgs/services/nft-blockchain.jpg",
    title: "NFT & Blockchain",
    link: "/services/blockchain",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "NB",
  },

  {
    img: "/imgs/services/staff-augmentation.png",
    title: "Staff Augmentation",
    link: "/services/contract-developer",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "SA",
  },
  {
    img: "/imgs/services/cloud-support.png",
    title: "Cloud Support",
    link: "/services/",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "CS",
  },
  {
    img: "/imgs/services/aiml.png",
    title: "AL/ML",
    link: "/services/",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "AL",
  },
  {
    img: "/imgs/services/digital-marketing.jpg",
    title: "Digital Marketing",
    link: "/services/",
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    icon: "DM",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: (
    <button id="sliderBtn">
      <ArrowRight />
    </button>
  ),
  prevArrow: (
    <button id="sliderBtn">
      <ArrowLeft />
    </button>
  ),
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const LatestTechnologies = () => {
  return (
    <section
      id="sliderContainer"
      className="px-5 lg:px-12 lg:mx-10 mt-20 mb-14"
    >
      <div className="max-w-[1436px] mx-auto">
        <div className="title lg:text-left my-3 lg:my-9 text-2xl mx-auto sm:text-3xl md:text-4xl lg:text-4xl max-w-[750px]">
          <h1 className="font-bold sm:leading-[45px] text-center mx-auto">
            We Leverage the{" "}
            <span className="text-primary">Latest Technologies </span>
            to Create
            <span className="text-primary"> Flexible Solutions</span>
          </h1>
        </div>

        <Slider {...settings}>
          {cardData.map((item, i) => (
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.bgimg}>
                  <img src={item.img} alt="" className={styles.imgCard} />
                  <p className={styles.title}>{item.title}</p>
                  <div className={styles.imgOverlay} />
                </div>
                <div className={styles.textPay}>
                  <p className="heading2 caption">{item.heading}</p>
                  <div className={styles.bordertop}></div>
                  <div className={styles.iconPart}>
                    <div
                      className={`${styles.bgblueColor} text-white font-bold`}
                    >
                      {item.icon}
                    </div>
                    <Link href={item.link}>
                      <button className={styles.btn}>
                        READ MORE <ArrowForwardIos />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LatestTechnologies;
