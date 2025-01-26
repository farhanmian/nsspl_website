import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";
import styles from "./LatestTechnologies.module.css";
import Link from "next/link";

const cardData = [
  {
    img: "/imgs/services/app-development.png",
    title: "App Development",
    link: "/services/appdev/",
  },
  {
    img: "/imgs/services/web-development.jpg",
    title: "Web Development",
    link: "/services/webdev",
  },
  {
    img: "/imgs/services/e-commerce.jpg",
    title: "Ecommerce Solutions",
    link: "/services/enterprise",
  },
  {
    img: "/imgs/services/nft-blockchain.jpg",
    title: "NFT & Blockchain",
    link: "/services/blockchain",
  },

  {
    img: "/imgs/services/staff-augmentation.png",
    title: "Staff Augmentation",
    link: "/services/contract-developer",
  },
  {
    img: "/imgs/services/cloud-support.png",
    title: "Cloud Support",
    link: "/services/",
  },
  {
    img: "/imgs/services/aiml.png",
    title: "AL/ML",
    link: "/services/",
  },
  {
    img: "/imgs/services/digital-marketing.jpg",
    title: "Digital Marketing",
    link: "/services/",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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
      <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl max-w-2xl">
        <h1 className="font-bold sm:leading-[45px]">
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
                <Link href={item.link}>Learn More</Link>
                {<div className={styles.imgOverlay} />}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LatestTechnologies;
