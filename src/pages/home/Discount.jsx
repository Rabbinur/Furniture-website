import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className='discount py-32'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                <div>
                    <h1 className='text lg:text-[48px] pb-10 '><span className='text-red-500'>50% OFF </span> Interior Collection </h1>
                    <p className='text-[18px] lg:text-[22px] '>Free shipping over $125 for international orders</p>
                  <div className='pt-14 relative'>  <Link href="#_" className="relative rounded px-5 py-4 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
    {/* <span className="absolute right-0 w-8 h-12 -mt-4 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
    <span className="relative text-xl">Discover More</span>
</Link></div>
                </div>
                <div></div>
                </div>
                
            </Container>
        </div>
    );
};

export default Discount;