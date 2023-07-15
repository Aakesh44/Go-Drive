import React from 'react'
import man from '../src/Images/man.png'
import girl from '../src/Images/girl.png'
import appreciation from '../src/Images/appreciation.png'


const Testimonial = () => {
  return (
    <main style={{}} className='Testimonial w-10/12  mt-16 flex flex-wrap gap-2 md:gap-0 justify-center items-center xl:px-28'>
      <section className=' md:w-3/5 h-1/2 lg:w-1/2 lg:h-full md:p-10 '>
      <div className='info bg-white h-full w-full flex flex-col py-5 md:px-14'>
            <p className=' text-lg text-center my-14 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ducimus nemo deleniti, quo neque ad quam assumenda. Quasi dolorum asperiores facere, voluptatibus accusantium ullam.</p>
            <div className='flex mt-auto items-center justify-center md:justify-normal h-1/5 w-full '>
              <div  className=' h-20 rounded-full p-1 overflow-hidden  border-2 border-green-300 bg-green-300'>
                <img src={girl} alt="" className=' h-full '/>
              </div>
              <div className='text-xl mx-2'>name</div>
              <div className='hidden md:block ml-auto h-20 p-3'>
                <img src={appreciation} alt="" className='h-full'/>
              </div>
            </div>
        </div>
      </section>
      <section className=' md:w-3/5 h-1/2 lg:w-1/2 lg:h-full md:p-10 '>
        <div className='info bg-white h-full w-full flex flex-col py-5 md:px-14'>
            <p className=' text-lg text-center my-14 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ducimus nemo deleniti, quo neque ad quam assumenda. Quasi dolorum asperiores facere, voluptatibus accusantium ullam.</p>
            <div className='flex mt-auto items-center justify-center md:justify-normal h-1/5 w-full '>
              <div  className=' h-20 rounded-full p-1 overflow-hidden  border-2 border-green-300 bg-green-300'>
                <img src={man} alt="" className=' h-full '/>
              </div>
              <div className='text-xl mx-2'>name</div>
              <div className='hidden md:block ml-auto h-20 p-3'>
                <img src={appreciation} alt="" className='h-full'/>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Testimonial