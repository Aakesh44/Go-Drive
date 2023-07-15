import React,{useEffect, useState} from 'react'
import Find from './Find'
import Assis from './Assis'
// import  Card  from './Card'
import AOS from 'aos';
// import {useSelector} from 'react-redux'

import 'aos/dist/aos.css'

import {animateScroll as scroll} from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa';


const Home = () => {
  // const order=useSelector(e=>e.cars.value)

  const [showScroll,setShowScroll]=useState(false)
  useEffect(() => {
    AOS.init({
      // Configure options here (optional)
    });

    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  }, []);



  const handleScroll=()=>{
    if (window.scrollY > window.innerHeight) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  const scrollToTop=()=>{
    scroll.scrollToTop();
  }

  return (
    <main style={{height:'85vh'}} className='relative w-full md:flex md:mt-7 bg-re d-500 '>
      <Assis/>
      
      <section data-aos='fade-right' data-aos-delay="300" data-aos-duration="1000" className='content  xl:pl-10  w-full h-full flex items-center justify-center md:w-1/2 md:h-full '>

          <div className='md:flex flex-col  mb-10  justify-start items-start   md:gap-7  md:py-20 w-5/6 sm:w-3/5 md:w-5/6 lg:w-4/6 xl:w-5/6 '>

              <h1 className='text-xl md:text-3xl'>Plan your trip now</h1>
              <h1 className='my-4 md:my-0 text-3xl md:text-5xl font-semibold'> Rent from <span className="text-green-600">Go Drive</span>, Trusted by millions</h1>
              <h1 className='text-xl md:text-2xl'>Self Drive Car Rental In Tamilnadu
                GoDrive Provides the best Car/Bike Rental Service in Tamilnadu.    </h1>
          </div>
      </section>
      {/* <Card/> */}
      {/* {order.order ? <>hii</>:<>byee</>} */}
    <section   className='hidden w-full md:w-1/2 md:h-full  md:flex items-center justify-center'>
        <Find/>
    </section>
{showScroll && (
  <div className="fixed bottom-20 right-6 md:right-12 h-7 w-7 md:w-10 md:h-10 bg-green-600 z-10 text-white flex items-center justify-center rounded-full cursor-pointer" onClick={scrollToTop}>
    <FaArrowUp />
  </div>
)}


    </main>
  )
}

export default Home