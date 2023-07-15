import React from 'react'

import { AiFillGift } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";

const Ad = () => {
  return (
    <section style={{height:'30vh'}} className='w-full mt-10 flex flex-col items-center justify-center gap-4  bg-green-300 relative'>
        <h1 className=' text-2xl md:text-6xl font-semibold text-center'>Save big with our cheap car rental!</h1>
        <h1 className=' text-xl text-center'>Top Airports. Local Suppliers. 24/7 Support</h1>
        <AiFillGift className=' absolute bottom-5 left-5 h-7 w-7 animate-bounce'/>
        <FaMotorcycle className=' absolute bottom-5 right-5 h-7 w-7 animate-bounce'/>
    </section>
  )
}

export default Ad