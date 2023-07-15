import React from 'react'
import key from '../src/Images/gold-key.png'
import placeholder from '../src/Images/placeholder.png'
import map from '../src/Images/maps.png'

const How = () => {
  return (
    <>
      <section style={{height:'20vh'}} className='mt-10 w-full bg- red-300'>
          <h1 className=' text-4xl font-semibold text-center my-5'>HOW TO USE</h1>
          <h1 className='text-lg font-semibold text-gray-600 text-center my-5'>Quick & easy car rental</h1>
      </section>
    <main style={{}} className='h mt-10 lg:w-10/12 md:w-10/12 w-10/12  flex flex-col lg:flex-row items-center justify-center'>
      <section className=' w-4/5 md:w-2/4 lg:w-1/3 lg:h-full  p-5 flex items-center justify-center'> 
        <div className='info py-16 bg-white h-full lg:w-11/12 xl:w-4/5 flex flex-col items-center justify-evenly gap-3'>
            <img src={key} alt="" className=' h-1/4 aspect-square w-1/4' />
            <h1 className='text-2xl font-semibold'>Select Vehicle</h1>
            <h2 className='text-lg text-center'> We have the perfect vehicle to meet your needs</h2>
        </div>
      </section>
      <section className=' w-4/5 md:w-2/4 lg:w-1/3 lg:h-full  p-5 flex items-center justify-center'>
        <div className='info py-16 bg-white h-full lg:w-11/12 xl:w-4/5 flex flex-col items-center justify-evenly gap-3'>
            <img src={placeholder} alt="" className=' h-1/4 aspect-square w-1/4' />
            <h1 className='text-2xl font-semibold'>Pick Your Product</h1>
            <h2 className='text-lg text-center'>Find the pickup location and pick a product</h2>
        </div>
      </section>
      <section className=' w-4/5 md:w-2/4 lg:w-1/3 lg:h-full  p-5 flex items-center justify-center'>
        <div className='info py-16 bg-white h-full lg:w-11/12 xl:w-4/5 flex flex-col items-center justify-evenly gap-3'>
            <img src={map} alt="" className=' h-1/4 aspect-square w-1/4' />
            <h1 className='text-2xl font-semibold'>Ride Anywhere</h1>
            <h2 className='text-lg text-center'>Find the pickup location and pick a product</h2>
        </div>
      </section>
    </main> 
    </>
  )
}

export default How