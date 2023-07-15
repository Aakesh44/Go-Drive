import React,{useEffect} from 'react'

import Home from './Home'
import Info from './Info'
import Choice from './Choice'
import Finding from './Finding'
// import { IoCloseSharp } from "react-icons/io5";


import {useSelector} from 'react-redux'

const Landing = () => {
  const final=useSelector(e=>e.cars.value)
  const handleRefresh = () => {
    window.location.reload();
  };
  // const [isActive]=useState(true)

  useEffect(()=>{
      const handleScroll=()=>{
          if (final.order) {
              document.documentElement.style.overflow='hidden'
              document.body.style.overflow = 'hidden';
            } else {
              document.documentElement.style.overflow = 'auto';
              document.body.style.overflow = 'auto';              
          }
      }
      handleScroll();
      window.addEventListener('scroll',handleScroll)
      
      return()=>{
          window.removeEventListener('scroll',handleScroll);
          document.documentElement.style.overflow = 'auto';
          document.body.style.overflow = 'auto';
      }
  },[final.order])

  return (
    <div className='flex flex-col items-center'>
        {final.order ? 
        <div className='OrderUp absolute z-10 p-10 pt-2 bg-green-300 w-full h-full text-lg lg:text-2xl flex justify-center items-center flex-col lg:flex-row'>
          <div className='flex flex-col gap-5 items-center justify-center bg-white w-full lg:w-1/2 h-full  p-10'>
            your order has been placed.Check your email for further updates. If you have any queries, please contact us.
            <button className=' ml-4 h-12 w-32 border-2 border-green-500' onClick={handleRefresh}> Done</button>
          </div>
          <div className='flex items-center justify-center bg-white w-full h-1/2 lg:w-1/2 lg:h-full p-10' >
           <img src="https://img.freepik.com/free-vector/sedan-car-concept-illustration_114360-12264.jpg?size=626&ext=jpg&uid=R107810290&ga=GA1.1.935296291.1680001946&semt=ais" alt="" className='h-4/5'/>
          </div>
        </div>:
        <></>}
        <Home/>
        <div className='lg:hidden w-full'>
          <Finding/>
        </div>
        <Info/>
        <Choice/>

    </div>
  )
}

export default Landing