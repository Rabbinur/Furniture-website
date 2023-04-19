import React from "react";
import Conteck from "../pages/conteck/Contact";
import Container from "./Container";
import img from '../assets/app-store.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pb-20">
          <div className="flex items-center justify-center lg:justify-start">
            <h1 className="lg:text-[22px]"> <span className="text-md lg:text-[25px] font-bold">Hours:</span> 9.30am-6.30pm Monday to Friday</h1>
          </div>
          <div className="flex justify-center flex-col items-center lg:items-start">
            <img src={img} alt="" className="w-32 py-2" />
           <p> <span className="text-md font-bold ">Shopping App: </span >Try our View in Your Room feature, manage registries and save payment info.</p>
          </div>
          
        </div>
        <hr className="pb-10"/>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 ">
          <div className=" border-r border-gray-300 flex flex-col lg:items-start items-center">
            <h3 className="text-xl font-semibold  pb-2 capitalize">Do you need help ?</h3>
            <hr className="w-40 border-2 mb-4" />
           <p className="py-3 text-center lg:text-start">Mollura & C. SpA
S.S. 114 Km 6,400 98128 Tremestieri
Messina – Italy</p>
<h2>info@example.com</h2>
<h2>+39 0906258945</h2>
          </div>

          <div className="pl-5 flex flex-col lg:items-start items-center">
            <h3 className="text-xl font-semibold  pb-2  text-[#8fbb3f]">SERVICES</h3>
            <hr className="w-40 border-2 mb-4" />
            <div>Returns</div>
            <div>Support</div>
            <div>Site Map</div>
            <div>Leave a Complain</div>
            <div>Appointment Booking</div>
          </div>

          <div className=" flex flex-col lg:items-start items-center">
            <h3 className="text-xl font-semibold  pb-2 ">Be Inspired</h3>
            <hr className="w-40 border-2 mb-4" />
            <div>Catalog</div>
            <div>Inspire Me</div>
            <div>Brand News</div>
            <div>Furnob Magazine</div>
            <div>Browse by Designers</div>
          </div>

          <div className="  ">
           <div className="flex flex-col lg:items-start items-center">
           <h3 className="text-xl font-semibold  pb-2">Our Company</h3>
            <hr className="w-40 border-2 mb-4" />
           </div>
            <ul className="flex flex-col lg:items-start items-center">
              <li>About Us</li>
              <li>Careers for Furnob</li>
              <li>Social Responsibility</li>
              <li>Store Locations and Events</li>
            </ul>
           
          </div>
        </div>
        <hr className="mt-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-black pt-10 items-center">
         <div className="flex justify-center lg:justify-start">            <h1 className="md:logo lg:text-[40px] text-[35px] md:text-[40px]"><Link to='/'><span className="text-[#85b839]">Furni</span>ture</Link></h1>
</div>
         <div className="lg:col-span-2 col-span-1 order-2 lg:order-1">
          <p className="text-[13px] lg:text-[16px] text-center lg:text-start mb-2">Copyright 2023 © Furniture. All right reserved. <span className="lg:inline-block hidden">Designed by Weero Digital.</span> </p>
          <span className="text-center lg:text-start lg:hidden block">Designed by Weero Digital.</span>
         </div>
         <div className="lg:col-span-2 col-span-1 order-1 lg:order-2">
           <ul className="flex flex-col lg:flex-row gap-3 justify-center items-center lg:justify-end">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund and Returns Policy</li>
           </ul>
         </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
