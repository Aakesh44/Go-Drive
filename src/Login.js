import React,{useEffect, useRef} from 'react'
import google from '../src/Images/google.png'
import facebook from '../src/Images/facebook.png'
import {useNavigate} from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";

const Login = () => {
  const isActive=useRef(true)

  useEffect(()=>{
      const handleScroll=()=>{
          if (isActive) {
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
  },[isActive])

  const logcheck=(e)=>{
    e.preventDefault()
  }

  const history=useNavigate();
  const handleGoBack=()=>{
    history(-1)
  }
  return (
    <main style={{height:'100vh',}} className='Loginmain z-10 w-full flex items-center justify-center  absolute '>
      
      <section className='info md:w-3/5 lg:w-2/5 xl:w-1/3 h-4/5 pt-14 pb-6 px-10  bg-white flex flex-col '>
          <div className=' h-1/4 w-full  flex flex-col justify-between items-center'>
              <h1 className=' text-2xl my-auto'>LOGIN</h1>
              <div className='flex items-center justify-around w-full h-3/5'>
                <button onClick={handleGoBack} className='flex items-center justify-evenly p-2 md:p-1 w-2/5 h-2/3 rounded-sm bg-white info'>
                  <img src={google} alt="" className=' w-1/5 h-full ' /><span className='text-xs md:text-base'> <span className='hidden md:inline'>with</span> google</span>
                </button>
                <button onClick={handleGoBack} className='flex items-center justify-evenly p-2 md:p-1 w-2/5 h-2/3 rounded-sm bg-white info'>
                  <img src={facebook} alt="" className=' w-1/5 h-full ' /><span className='text-xs md:text-base'> <span className='hidden md:inline'>with</span> facebook</span>
                </button>
              </div>
          </div>
          <div className=' w-full  flex items-center ju h-1 mt-3'>
            <div className='w-3/5 h-1/2 bg-gray-300'></div>
            <span className='mx-5 text-center mb-2'>or</span>
            <div className='w-3/5 h-1/2 bg-gray-300'></div>
          </div>
          <form onClick={(e)=>logcheck(e)} className='h-3/6 my-12 md:my-0 md:h-3/4 w-full  flex flex-col justify-evenly'>
            <input type="text" required placeholder='user name'    className='h-1/6 w-4/6 mx-auto outline-none border-2 border-gray-600 placeholder:text-center px-8'/>
            <input type="email" required placeholder='Email address'   className='h-1/6 w-4/6 mx-auto outline-none border-2 border-gray-600 placeholder:text-center px-8'/>
            <input type="password" required placeholder='password' className='h-1/6 w-4/6 mx-auto outline-none border-2 border-gray-600 placeholder:text-center px-8'/> 

            <div className='h-1/6 w-5/6 mx-auto flex bg-red -400 justify-evenly items-center'>
              <input type="checkbox" id='check'/>
              <label htmlFor="check" className='mr-auto text-sm md:text-base'>Remember Me</label>
              <h1 className='text-green-600 cursor-pointer text-sm md:text-base'>Forgot Password?</h1>
            </div>  

            <button onClick={handleGoBack} className='h-1/6  w-1/3 mx-auto cursor-pointer bg-green-400 rounded-sm text-lg font-semibold'>
              Login
            </button>
          </form>
      </section>
      <section className='hidden lg:flex items-center justify-center  lg:w-2/5 xl:w-1/3 h-4/5 b g-red-200 relative'>
        <p onClick={handleGoBack} className=' absolute top-2 right-4  flex items-center hover:bg-green-400 rounded-md cursor-pointer p-1'>
        <IoCloseSharp className='h-5 w-5'/>
        <span>Go Back</span>
        </p>
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-232.jpg?w=740&t=st=1689144901~exp=1689145501~hmac=d0ba988a45d65e0fcaada1a8bdb40fdce1b9ba43ccab296a35f4d0f45eb72ce8" alt="" className='h-5/6 ' />
      </section>
    </main>
  )
}

export default Login