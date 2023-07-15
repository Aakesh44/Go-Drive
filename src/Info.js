import React from 'react'
import security from '../src/Images/security.png'
import check from '../src/Images/check.png'
import cashback from '../src/Images/cashback.png'


const Info = () => {
  return (
    <main style={{}} className='h mt-10 lg:w-10/12 md:w-10/12 w-10/12  flex flex-col lg:flex-row items-center justify-center'>
      <section className=' w-4/5 md:w-2/4 lg:w-1/3 lg:h-full  p-5 flex items-center justify-center'> 
        <div className='info py-16 bg-white h-full lg:w-11/12 xl:w-4/5 flex flex-col items-center justify-evenly gap-3'>
            <img src={security} alt="" className=' h-1/4 aspect-square w-1/4' />
            <h1 className='text-2xl font-semibold'>secure payment</h1>
            <h2 className='text-lg text-center'>Our Payment Partners are Industry Leaders</h2>
        </div>
      </section>
      <section className=' w-4/5 md:w-2/4 lg:w-1/3 lg:h-full  p-5 flex items-center justify-center'>
        <div className='info py-16 bg-white h-full lg:w-11/12 xl:w-4/5 flex flex-col items-center justify-evenly gap-3'>
            <img src={check} alt="" className=' h-1/4 aspect-square w-1/4' />
            <h1 className='text-2xl font-semibold'>verified dealers</h1>
            <h2 className='text-lg text-center'>Every  Dealer is Committed to Quality Service</h2>
        </div>
      </section>
      <section className=' w-4/5 md:w-2/4 lg:w-1/3 lg:h-full  p-5 flex items-center justify-center'>
        <div className='info py-16 bg-white h-full lg:w-11/12 xl:w-4/5 flex flex-col items-center justify-evenly gap-3'>
            <img src={cashback} alt="" className=' h-1/4 aspect-square w-1/4' />
            <h1 className='text-2xl font-semibold'>money back</h1>
            <h2 className='text-lg text-center'>Not Happy With Service, Take Your Money Back</h2>
        </div>
      </section>
    </main>  
  )
}

export default Info