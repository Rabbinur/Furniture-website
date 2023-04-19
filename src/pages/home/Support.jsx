import React from 'react';
import Container from '../../components/Container';
import {BsArrowRight} from 'react-icons/bs'
import tel from'../../assets/icons/phone.gif'
import truck from'../../assets/icons/delivery-truck.gif'
import refresh from'../../assets/icons/refresh.gif'
import image1 from '../../assets/banner/hl-sb-1.webp'
import image2 from '../../assets/banner/hl-sb-2.webp'
import { Link } from 'react-router-dom';
const Support = () => {
    return (
        <div className='pt-20'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 '>
                  <div className='flex gap-10 items-center'>
                    <img src={tel} alt="" className='w-16'/>
                    <div>
                        <h1 className='text-[25px]'>Support 24/7</h1>
                        <p>We are committed toserving you 24/7</p>
                    </div>
                  </div>
                  <div className='flex gap-10 items-center'>
                    <img src={truck} alt="" className='w-16'/>
                    <div>
                        <h1 className='text-[25px]'>Free Shipping</h1>
                        <p>Free shipping international transport</p>
                    </div>
                  </div>
                  <div className='flex gap-10 items-center'>
                    <img src={refresh} alt="" className='w-16'/>
                    <div>
                        <h1 className='text-[25px]'>Free Returns</h1>
                        <p>You can return the item within 30 days.</p>
                    </div>
                  </div>
                  
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-20 hidden md:block'>
                    <div className="overflow-hidden relative group">
                       <Link>
                       <img src={image1} alt="" className='w-full group-hover:scale-105 duration-300' />
                       </Link>
                       <div className='absolute z-50 top-14 left-10'>
                          <h3 className='text-[45px] mb-1 group-hover:text-green-700 duration-300'>
                          <Link>Ritchi Chair</Link>
                          </h3>
                          <h6 className='text-[24px] mb-20'>Chair Collection</h6>
                          <div>
                          <button className="bg-[#85b839] flex items-center gap-2  text-white rounded-md  px-8 py-3  font-bold mt-10  group-hover:bg-green-700 duration-300">
                  Shop Now  <BsArrowRight className='group-hover:translate-x-2 duration-300'/>
                </button>
                          </div>
                       </div>
                    </div>
                    <div className="overflow-hidden relative group">
                       <Link>
                       <img src={image2} alt="" className='w-full group-hover:scale-105 duration-300'/>
                       </Link>
                       <div className='absolute z-50 top-14 left-10'>
                          <h3 className='text-[45px] mb-1 group-hover:text-green-700 duration-300'>
                          <Link>Ritchi Chair</Link>
                          </h3>
                          <h6 className='text-[24px] mb-20'>Chair Collection</h6>
                          <div>
                          <button className="bg-[#85b839] flex items-center gap-2  text-white rounded-md  px-8 py-3  font-bold mt-10  group-hover:bg-green-700 duration-300">
                  Shop Now  <BsArrowRight className='group-hover:translate-x-2 duration-300'/>
                </button>
                          </div>
                       </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Support;