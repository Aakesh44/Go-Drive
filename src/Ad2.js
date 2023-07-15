import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import booking from '../src/Images/booking.png'


const Ad2 = () => {
  return (
    <main style={{height:'80vh'}} className='w-10/12 mt-16 relative bg-white flex flex-col'>
          <section className='w-full h-3/4 bg-red- 400 flex items-center justify-center py-14 md:py-0 relative '>
            <img src={booking} alt="" className='h-16 w-16 absolute top-1 lg:top-14' />
            <div className='w-5/6 lg:w-1/2 h-full flex items-center justify-center lg:justify-end'>
              <img src="https://img.freepik.com/free-vector/flat-design-transport-truck-delivery_23-2149146360.jpg?w=1060&t=st=1689076720~exp=1689077320~hmac=118fa042a24c45428e7a0190bdc921af94ca6dae0ac973e9ed87e79969799326" alt="" className='h-5/6'/>
            </div>
            <div className='hidden w-1/2 h-full lg:flex items-center justify-start'>
              <img src="https://img.freepik.com/free-vector/flat-design-transport-truck-delivery-illustration_23-2149146361.jpg?size=626&ext=jpg" alt="" className='h-5/6'/>
            </div>
          </section>
          <section className='w-full h-1/4 bg-green-300 mt-auto flex flex-col justify-around items-center md:gap-4'>
              <h1 className='text-2xl md:text-6xl font-semibold text-center'>Commercial vehicles</h1>
              <h1 className=' text-xl text-center flex items-center gap-1'>Contact <AiFillPhone/> 9876543210</h1>
          </section>
          
    </main>
  ) 
}

export default Ad2