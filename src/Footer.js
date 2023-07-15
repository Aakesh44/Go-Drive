import React from 'react'
import { AiFillPhone,AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <main className='Footer  w-10/12 py-20 mt-15 bg-white flex flex-wrap justify-center'>

      <section className='p-10 w-2/3 md:w-1/2 lg:w-1/4'>
        <div>
          <h1 className=' text-3xl font-semibold'>CONTACT</h1>
          <p className=' text-lg my-5'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
          <h1 className='flex items-center text-base cursor-pointer hover:text-green-500'>
            <AiFillPhone className=' text-green-600'/> 9876543210</h1>
          <h1 className='flex items-center text-base my-3 cursor-pointer hover:text-green-500'>
            <AiOutlineMail className=' text-green-700'/> godrive@gmail.com</h1>
        </div>
      </section>

      <section className='p-10 w-2/3 md:w-1/2 lg:w-1/4 text-lg'>
        <div>
          <h1 className=' text-3xl font-semibold'>COMPANY</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Chennai</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Thiruvananthapuram</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Bengaluru</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Kovai</h1>

        </div>
      </section>

      <section className='p-10 w-2/3 md:w-1/2 lg:w-1/4 text-lg'>
        <div>
          <h1 className=' text-3xl font-semibold'>WORKING HOURS</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Mon - Fri: 9:00AM - 9:00PM</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Sat: 9:00AM - 7:00PM</h1>
          <h1 className='my-3 cursor-pointer hover:text-green-500'>Sun: Closed</h1>
        </div>
      </section>

      <section className='p-10 w-2/3 md:w-1/2 lg:w-1/4'>
        <div>
          <h1 className=' text-3xl font-semibold'>GET IN TOUCH WITH US</h1>
          <h1 className='text-lg my-5'>Subscribe your Email address for latest news & updates </h1>
          <input type="email"  className=' h-10 w-11/12 bg-gray-100 my-1 outline-none border-2 border-green-400 placeholder-teal-500 ' placeholder='email '/>
          <input type="submit" className=' h-10 w-11/12 bg-green-400 my-1 rounded-sm text-lg font-semibold'/>
        </div>
      </section>
    </main>
  )
}

export default Footer