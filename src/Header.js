import React,{useState} from 'react'
import car from "../src/Images/car-wash.png"
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import {Link} from 'react-scroll'
import {Link as Linkr} from 'react-router-dom'
const Header = () => {

    const [active,setActive]=useState(false)
    console.log(active);

  return (
    <main className='Header  h-16 flex mt-5 lg:w-10/12 md:w-10/12 w-10/12'>

        <section className=' h-full w-2/5 md:w-1/5 lg:w-1/4 flex items-center justify-start gap-1 cursor-pointer'>
            <img src={car} alt="logo" className='h-3/4' />
            <div className='h-5/6 w-1/5 flex flex-col items-start justify-center'>
                <h1 className='lg:text-3xl md:text-2xl font-bold'>Go</h1>
                <h1 className='lg:text-xl  font-semibold'>Drive</h1>
            </div>
        </section>

        <section className=' hidden  h-full  md:w-3/5 lg:w-1/2 md:flex justify-center items-center'>
            <ul className='w-full flex justify-evenly lg:text-lg text-lg font-semibold '>
                <Linkr to='/'  className='cursor-pointer'>Home</Linkr>   

              <li className='cursor-pointer'>About</li>

              <Link 
            //   activeClass='active'
              to='Finding'
              // spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=' cursor-pointer'
              >Vehicle
            </Link> 
            <Link 
              activeClass='active'
              to='Testimonial'
              // spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
              className=' cursor-pointer'
              >Testimonial
            </Link>      
            <Link 
                to='Footer'
                smooth={true}
                offset={-70}
                duration={2000}
                className='flex items-center cursor-pointer'>
                <AiFillPhone/>9876543210
            </Link>
            </ul>
        </section>

        <section className='md:hidden h-full bg-yell ow-400 w-1/5 ml-auto flex items-center justify-center cursor-pointer'>
            <FiMenu className='h-5 w-5' data-aos="fade-right" data-aos-duration="1000" onClick={()=>setActive(!active)}/>
        </section>

        {active &&
        <section 
        className=' z-10 md:hidden mt-2 flex items-center justify-center bg-green-100 py-4 absolute w-full top-0 left-0'
        data-aos="fade-right" data-aos-duration="4000">
        <IoCloseSharp className='h-5 w-5 text-green-500 absolute top-2 right-2 cursor-pointer' onClick={()=>setActive(!active)}/>
        <ul className=' text-green-500 text-center flex flex-col '>
        <li className=' mb-3 text-lg cursor-pointer'>
            Home
        </li>
        <li className=' mb-3 text-lg cursor-pointer'>
            About
        </li>
        <Link 
            
              to='Finding'
              smooth={true}
              offset={-70}
              duration={500} 
              className=' mb-3 text-lg cursor-pointer'>
            Vehicle
        </Link>
        <Link 
              activeClass='active'
              to='Testimonial'
              smooth={true}
              offset={-70}
              duration={500} className=' mb-3 text-lg cursor-pointer'>
            Testimonial
        </Link>
        <Link 
            to='Footer'
            smooth={true}
            offset={-70}
            duration={500}
            className=' mb-3 text-lg cursor-pointer'>
            <span className='flex items-center justify-center'><AiFillPhone/>9876543210</span>
        </Link>
        <li className='bg-green-500 text-white  rounded  cursor-pointer text-lg ' data-aos='fade-up'>
            {/* <a href={RESUME1} target="_blank" rel="noopener noreferrer"></a> */}

            <Linkr to='/Login' className=' px-2 py-1'>
                Login
            </Linkr>
            
        </li>
        </ul>
    
</section>}
        

        <section className=' hidden  h-full w-1/5 lg:w-1/4 md:flex justify-center  lg:justify-end gap-1 items-center'>
            <Linkr to='/Login' className=' w-1/2 flex items-center justify-center lg:w-1/3 bg-green-400 h-4/5 text-lg rounded-sm hover:shadow-md cursor-pointer'>
                Login
                
            </Linkr>
            <button className='hidden lg:block w-1/3 bg-blue-300 h-4/5 text-lg rounded-sm hover:shadow-md cursor-pointer'>
                Order
            </button>
        </section>
    </main>
  )
}

export default Header