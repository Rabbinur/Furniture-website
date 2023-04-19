import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Navigation, Autoplay, Pagination } from "swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import banner from "../assets/115-removebg-preview.png";
import banner1 from "../assets/3957-removebg-preview.png";
import Container from "./Container";
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className=" pt-32 md:pt-0 md:h-[80vh] bg-[#f7f2ed]  ">
    <div className="max-w-screen-2xl mx-auto ">
  <div className="flex items-center md:h-[80vh]">
  <Swiper
          className="relative group "
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={true}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          style={{ zIndex: "-9999999999px", overflow: "hidden" }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
        >
          <SwiperSlide>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
              <motion.div 
              initial={{ opacity: 0, y:"200px" }}
              whileInView={{ opacity: 1, y:"0px" }}
              transition={{ duration: 0.5 }}
              viewport={true}
              className="px-5 md:px-0">
               <div className="md:text-[68px] text-[40px] text-center  md:text-start   text-[#3e516a]">
                  <h1 >Leave  the season in
             
                  Furnob style </h1>
                </div>
                <p className="text-md py-5 text-justify text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  veritatis ab tenetur soluta, commodi officiis, similique omnis
                  corrupti eaque quidem labore dolore aut dignissimos nam sunt
                  ipsum?
                </p>
               <div className="flex justify-center md:justify-start">
               <button className="bg-[#85b839] text-white rounded-md  px-10 py-3  font-bold mt-10 hover:bg-green-700 duration-300">
                  Shop Now
                </button>
               </div>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={true}
              
              className="">
                <img src={banner1} alt="" className="w-full z-20" />
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             viewport={true}
            
              className="px-5 md:px-0">
                 <div className="md:text-[68px] text-[40px] text-center  md:text-start   text-[#3e516a]">
                  <h1 >Leave  the season in
             
                  Furnob style </h1>
                </div>
                <p className=" text-md py-5 text-justify text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  veritatis ab tenetur soluta, commodi officiis, similique omnis
                  corrupti eaque quidem labore dolore aut dignissimos nam sunt
                  ipsum?
                </p>
                <div className="flex justify-center md:justify-start">
               <button className="bg-[#85b839] text-white rounded-md  px-10 py-3  font-bold mt-10 hover:bg-green-700 duration-300">
                  Shop Now
                </button>
               </div>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={true}
              className="">
                <img src={banner} alt="" className="w-full z-20" />
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               viewport={true}
               className="px-5 md:px-0">
                 <div className="md:text-[68px] text-[40px] text-center  md:text-start   text-[#3e516a]">
                  <h1 >Make Your Comfort is your Happiness </h1>
                </div>
                
                <p className=" text-md py-5 text-justify text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  veritatis ab tenetur soluta, commodi officiis, similique omnis
                  corrupti eaque quidem labore dolore aut dignissimos nam sunt
                  ipsum?
                </p>
                <div className="flex justify-center md:justify-start">
               <button className="bg-[#85b839] text-white rounded-md  px-10 py-3  font-bold mt-10 hover:bg-green-700 duration-300">
                  Shop Now
                </button>
               </div>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={true}
              className="">
                <img src={banner1} alt="" className="w-full z-20" />
              </motion.div>
            </div>
          </SwiperSlide>

          <div className="button-next-slide top-[40%] absolute z-10 w-[40px] h-[40px] bg-black group-hover:left-0 -left-[500px] duration-300 cursor-pointer text-white grid place-items-center">
          <FaArrowRight />
          </div>
          <div className="button-prev-slide top-[40%] absolute z-10  w-[40px] h-[40px] bg-black group-hover:right-0 -right-[500px] duration-300 cursor-pointer text-white grid place-items-center">
          <FaArrowLeft />
          </div>
        </Swiper>
  </div>
    </div>
       
     
    </div>
  );
};

export default Banner;
