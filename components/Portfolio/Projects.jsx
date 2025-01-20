import React from 'react'
import { Mousewheel, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import PortfolioItem from './PortfolioItem';
import Link from 'next/link';


let data = [
    {
        id:1,
        heading:"We Truck",
        subheading:"Truck management software",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt iste nemo? Eos sint, modi ipsum nam sit dolor voluptatum in quos recusandae esse debitis rerum nihil dolorem laboriosam, tenetur excepturi hic iste quam. Perferendis aliquam itaque quidem molestiae, voluptatum aliquid inventore iste ipsa adipisci asperiores quasi cupiditate ducimus! Amet.",
        img:'temp.webp'
    },
    {
        id:2,
        heading:"Digital Saathi",
        subheading:"Digital friend",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt iste nemo? Eos sint, modi ipsum nam sit dolor voluptatum in quos recusandae esse debitis rerum nihil dolorem laboriosam, tenetur excepturi hic iste quam. Perferendis aliquam itaque quidem molestiae, voluptatum aliquid inventore iste ipsa adipisci asperiores quasi cupiditate ducimus! Amet.",
        img:'temp02.webp'
    },
    {
        id:3,
        heading:"Marwari horse",
        subheading:"bojack horseman",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt iste nemo? Eos sint, modi ipsum nam sit dolor voluptatum in quos recusandae esse debitis rerum nihil dolorem laboriosam, tenetur excepturi hic iste quam. Perferendis aliquam itaque quidem molestiae, voluptatum aliquid inventore iste ipsa adipisci asperiores quasi cupiditate ducimus! Amet.",
        img:'temp04.png'
    },
    {
        id:4,
        heading:"Rovera",
        subheading:"man's best friend",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt iste nemo? Eos sint, modi ipsum nam sit dolor voluptatum in quos recusandae esse debitis rerum nihil dolorem laboriosam, tenetur excepturi hic iste quam. Perferendis aliquam itaque quidem molestiae, voluptatum aliquid inventore iste ipsa adipisci asperiores quasi cupiditate ducimus! Amet.",
        img:'temp05.png'
    },

]

const Projects = () => {
  
  return (
   <div className=''>
        <div>
            <h1 className='text-[42px] text-center font-bold'>Our <span className='text-primary'> Projects</span></h1>
        </div>
        <div className='py-5 my-5 px-5 sm:py-10 gap-10'>
            <div className='block'>
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Mousewheel,Autoplay]}
                className="mySwiper"
            >
                {data.map(item=>{
                   return <SwiperSlide><PortfolioItem id={item.id} heading={item.heading} subheading={item.subheading} details={item.details}  img={item.img} /> </SwiperSlide>
                })}
            </Swiper>
            </div>
                <div className='flex justify-center'>
                    <button className='text-primary px-4 py-2 border-2 border-primary hover:bg-primary hover:text-white'> <Link href='/portfolio'>All Projects</Link> </button>
                </div>
        </div>
   </div>
  )
}

export default Projects