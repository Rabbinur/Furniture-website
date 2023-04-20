import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Container from "./Container";
import phoneGif from '../assets/phone.gif'
import ScrollToTop from "react-scroll-to-top";
const Header = () => {
 
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
 <div className=" bg-white z-[9999999] top-0 sticky py-2">   <nav >
 <Container>
 <nav class="navbar ">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/book">Booking</Link></li>
                <li><Link to="/about">About</Link></li>
               
              
                <li><Link to="/contact">Contact</Link></li>
                <li className="md:hidden block"><a href="tel:123456789" className="capitalize font-medium  flex  gap-1 hover:text-[#fd9d3e] duration-300"> <>
			                		<img src={phoneGif} alt="" className="w-8 
                          " />
			                		<div class="link-text md:text-lg">+91 123 456 789</div>
			                	</> </a></li>
                      
              
            </ul>
            <div className="menu-items "> 
            <div className="md:hidden xl:block">
            <li ><a href="tel:123456789" className="capitalize font-medium   flex  gap-1  duration-300"> <>
			                		<img src={phoneGif} alt="" className="w-8 
                          " />
			                		<div class="link-text text-[20px]">+91 123 456 789</div>
			                	</> </a></li>
            </div>
            <div>
            <li ><Link><AiOutlineShoppingCart className="text-3xl"/></Link></li>
            </div>
            
           </div>
           
            <h1 className="logo lg:text-4xl sm:text-[25px] md:text-[30px]"><Link to='/'><span className="text-[#85b839]">Furni</span>ture</Link></h1>
        </div>
    </nav>
   
   <div className="share bg-black hover:bg-[#85b839] py-2 rounded">
   <Link><AiOutlineShoppingCart className="Cart text-[40px]"/></Link>
   </div>
   <ScrollToTop smooth color="#6f00ff" className="px-2" />
 </Container>
</nav></div>
 
  );
};

export default Header;
