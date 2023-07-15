import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineEnvironment } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { Link } from 'react-router-dom';
import {Link as Links} from 'react-scroll'
import Form from './Form';
import { IoCloseSharp } from "react-icons/io5";


const Card = () => {
    const carOrder=useSelector(state=>state.cars.value)
    const vehicles=[

      {
        id:0,
        link:"https://i.pinimg.com/564x/a0/25/29/a02529f875fc3991a191b81ff134ddd8.jpg",
        type:'car',
        rent:'3000',
        model:'swift',
        year:'2016',
        ac:'yes',
        fuel:'petrol'
      },
      {
        id:1,
        link:"https://i.pinimg.com/564x/08/54/06/0854066e5dfbba92e2fafbfacb4910fa.jpg",
        type:'car',
        rent:'3200',
        model:'avante',
        year:'2019',
        ac:'yes',
        fuel:'petrol'
      },
      {
        id:2,
        link:"https://i.pinimg.com/564x/ec/87/46/ec87468667159ea74f0eb0d728678dd2.jpg",
        type:'car',
        rent:'2800',
        model:'gatson',
        year:'2016',
        ac:'yes',
        fuel:'diesel'
      },
      {
        id:3,
        link:"https://i.pinimg.com/564x/87/63/c0/8763c047fc8eccb08a8d5a65ac72f290.jpg",
        type:'bike',
        rent:'1100',
        model:'wego',
        year:'2015',
        ac:'-',
        fuel:'petrol'
      },
      {
        id:4,
        link:"https://i.pinimg.com/564x/48/61/ab/4861abee1e13c91a7c1777a7f9592d7d.jpg",
        type:'bike',
        rent:'1300',
        model:'splender',
        year:'2018',
        ac:'-',
        fuel:'petrol'
      },
      {
        id:5,
        link:"https://i.pinimg.com/564x/09/53/6f/09536ffdd4dbd83ed8d18170bdd70d5f.jpg",
        type:'bike',
        rent:'1500',
        model:'passion',
        year:'2019',
        ac:'-',
        fuel:'petrol'
      }
    ]

    const [popup,setPopup]=useState(false)

    // useEffect(()=>{
    //   console.log('hey');
    //   return(
    //     carOrder.vehicle = 'no',
    //   carOrder.pickUpPlace= 'no',
    //   carOrder.pickUpDate= 'no',
    //   carOrder.dropOfPlace= 'no',
    //   carOrder.dropOfDate= 'no',
    //   carOrder.link= 'no',
    //   carOrder.type= 'no',
    //   carOrder.rent= 'no',
    //   carOrder.model= 'no',
    //   carOrder.year= 'no',
    //   carOrder.ac= 'no',
    //   carOrder.fuel= 'no'
    //   )
    // })
  return (
    
    <>
      <div style={popup ? {display:'flex'}:{display:'none'}} className=' FormUp w-full pt-80 md:pt-52 lg:pt-32 absolute flex items-center justify-center bg-slate-800 opacity- z-10'>
        <IoCloseSharp onClick={()=>setPopup(!popup)}  className=' absolute top-10 bg-white h-6 w-6 right-10'/>
        <Form/>
      </div>
      {/* <div style={popup ? {display:'flex'}:{display:'none'}} className=' FormUp w-full  absolute flex items-center justify-center bg-slate-800 opacity- z-10'>
        <h1>Your order placed.check email for furthor updates</h1>
      </div> */}
      <main style={ (carOrder.type === 'no' && carOrder.pickUpDate === 'no') ? {height:'80vh'} : carOrder.type === 'no'?{height:'200vh'}:{height:'90vh'}} className=' mt-14 flex flex-col items-center w-10/12 md:w-4/6'>


  {carOrder.pickUpDate === 'no' || carOrder.type ===undefined ? 
            
            <>
              <section style={{height:'55vh'}} className='w-full bg-white flex flex-col items-center justify-center'>
                  <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1689263979~exp=1689264579~hmac=60668c01623d1f80636091e2c142ceee605a6b0af547f646000b772a2e34eca1" alt="" className='h-5/6' />
                  <Link to='/' className='text-xl mt-2 font-semibold cursor-pointer'>Go back home</Link>
              </section>
            </>:
            <>

            <header style={{height:'8vh'}} className='w-full text-2xl flex items-center justify-center  bg-green-500 text-white'>
              Reservation section
            </header>
            <header style={{height:'16vh'}} className='hidden mt-2 sm:flex w-full bg-gray-100  items-center justify-evenly'>
                <h1 className='info xl:px-2 hidden lg:flex w-1/6 bg-gray-300 h-full  text-lg items-center justify-around text-center'>{`Rent a ${carOrder.type === 'no' ? (carOrder.vehicle):carOrder.type } in ${carOrder.pickUpPlace}`}</h1>

                <div className=' bg-white h-full w-1/4 md:w-1/5 xl:min-w-fit px-2 flex flex-col justify-center items-center'>
                  <h1 className='flex text-xs xl:text-base  '><MdOutlineDateRange className='hidden xl:inline h-5 w-5 text-center '/> <span>Pick-Up</span> <span className='hidden lg:inline'>Date & Time</span> </h1>
                  <h1 className=' text-xs xl:text-base flex flex-col lg:flex-row' >{carOrder.pickUpDate} <span className='hidden lg:inline'>/</span> <input type="time" className='inline cursor-pointer' /><span className='text-red-600 text-xl hidden lg:inline'>*</span> </h1>
                </div>
                <div className=' bg-white h-full w-1/4 md:w-1/5 xl:min-w-fit px-2 flex flex-col justify-center items-center'>
                  <h1 className='flex text-xs xl:text-base'><MdOutlineDateRange className='hidden xl:inline h-5 w-5 text-center'/> Drop-Off <span className='hidden lg:inline'>Date & Time</span></h1>
                  <h1 className='text-xs xl:text-base flex flex-col lg:flex-row'>{carOrder.dropOfDate} <span className='hidden lg:inline'>/</span> <input type="time" className='inline cursor-pointer' /><span className='text-red-600 text-xl hidden lg:inline'>*</span></h1>
                </div>
                <div className=' bg-white h-full w-1/4 md:w-1/5 xl:min-w-fit px-2 flex flex-col justify-center items-center'>
                  <h1 className='flex text-xs xl:text-base'><AiOutlineEnvironment className='inline h-5 w-5 text-center'/> Pick-Up <span className='hidden lg:inline'>Location</span></h1>
                  <h1 className='text-xs xl:text-base'>{carOrder.pickUpPlace}</h1>
                </div>
                <div className=' bg-white h-full w-1/4 md:w-1/5 xl:min-w-fit px-2 flex flex-col justify-center items-center'>
                  <h1 className='flex text-xs xl:text-base'><AiOutlineEnvironment className='inline h-5 w-5 text-center'/>Drop-Off <span className='hidden lg:inline'>Location</span></h1>
                  <h1 className='text-xs xl:text-base'>{carOrder.dropOfPlace}</h1>
                </div>
            </header>


            {carOrder.type === 'no' ?
              <>
                <section style={{MinHeight:'100vh'}} className='w-full mt-5 border-2 border-gray-300  bg-gray-300 flex flex-col'>

                  <header className='hidden sm:flex  md:text-xl  items-center w-full h-12 bg-white'>
                    <h1>available {(carOrder.vehicle).toUpperCase()}s for your preferences </h1>
                  </header>

                  <section  className='w-full  bg-slate-50 p-1 sm:p-5 flex flex-col items-center justify-center gap-5'>
                    
                    {vehicles.map(vandi => vandi.type === carOrder.vehicle ?
                      <div id={vandi.id} style={{height:'45vh'}} className='md:w-full lg:w-4/5 bg-white flex gap-1'>
                          <aside className='w-1/2 h-full bg-white flex flex-col items-center'>
                            <img src={vandi.link} alt="" className='h-5/6'/>
                            <h1 className='h-1/6 w-full bg-green-300 flex items-center justify-center text-lg md:text-2xl font-semibold'>{vandi.model}</h1>
                          </aside>
                          <aside className=' text-xs md:text-base w-1/2 h-full flex flex-col justify-around gap-1 bg-white'>
                              <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>Rent per day</div>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{vandi.rent}₹ </div>
                              </div>
                              <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>Year  </div>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{vandi.year}</div>
                              </div>
                              {vandi.type === 'car' ?
                                <>
                                  <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>AC </div>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{vandi.ac}</div>
                                  </div>
                                  <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>Fuel  </div>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{vandi.fuel}</div>
                                  </div>
                                </>:
                                <>
                                  <div style={{height:'20%'}} className=' w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>We provide a helmet</div>
                                </>
                              }

                              <div style={vandi.vehicle === 'car' ? {height:'20%'} : {height:'20%'}} className=' bg-white w-full flex gap-1'>
                                <div className='bg-gray-200 flex items-center justify-center h-full w-1/2'>{`${vandi.vehicle ==='car' ? 'Deposit ₹800 only' :'No deposit amount'}  `}</div>
                                <div className='bg-gray-200 h-full w-1/2 flex items-center justify-center'> <span className=' cursor-pointer'><GrNotes className='inline'/> Terms</span></div>
                              </div>

                              <div style={vandi.vehicle === 'car' ? {height:'20%'} : {height:'20%'}} className=' bg-white w-full flex gap-1'>
                                <button className='h-full w-1/2 bg-green-400 lg:text-xl '>Contact</button>
                                <button onClick={()=>setPopup(!popup)}  className='h-full w-1/2 bg-green-400 lg:text-xl flex items-center justify-center'>Order</button >
                              </div>
                          </aside>
                      </div>
                    :<></>)}



                  </section>
                </section>
              </>:
              <>
                <section style={{height:'66vh'}} className=' bg-gray-100 w-full flex justify-center items-center'>
                    
                <div  style={{height:'45vh'}} className='info md:w-full lg:w-4/5 bg-white flex gap-1'>
                          <aside className='w-1/2 h-full bg-white flex flex-col items-center'>
                            <img src={carOrder.link} alt="" className='h-5/6'/>
                            <h1 className='h-1/6 w-full bg-green-300 flex items-center justify-center text-lg md:text-2xl font-semibold'>{carOrder.model}</h1>
                          </aside>
                          <aside className=' text-xs md:text-base w-1/2 h-full flex flex-col justify-around gap-1 bg-white'>
                              <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>Rent per day</div>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{carOrder.rent}₹ </div>
                              </div>
                              <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>Year  </div>
                                <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{carOrder.year}</div>
                              </div>
                              {carOrder.type === 'car' ?
                                <>
                                  <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>AC </div>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{carOrder.ac}</div>
                                  </div>
                                  <div className='h-1/6 w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>Fuel  </div>
                                    <div className=' flex items-center justify-start h-full w-1/2 lg:pl-10'>{carOrder.fuel}</div>
                                  </div>
                                </>:
                                <>
                                  <div style={{height:'20%'}} className=' w-full bg-gray-200 flex items-center justify-center  text-xs md:text-base xl:text-xl'>We provide a helmet</div>
                                </>
                              }

                              <div style={carOrder.type === 'car' ? {height:'20%'} : {height:'20%'}} className=' bg-white w-full flex gap-1'>
                                <div className='bg-gray-200 flex items-center justify-center h-full w-1/2'>{`${carOrder.vehicle ==='car' ? 'Deposit ₹800 only' :'No deposit amount'}  `}</div>
                                <div className='bg-gray-200 h-full w-1/2 flex items-center justify-center'> <span className=' cursor-pointer'><GrNotes className='inline'/> Terms</span></div>
                              </div>

                              <div style={carOrder.type === 'car' ? {height:'20%'} : {height:'20%'}} className=' bg-gray-200 w-full flex gap-1'>
                                <Links 
                                      className='h-full w-1/2 bg-green-400 lg:text-xl flex items-center justify-center cursor-pointer'
                                      to='Footer'
                                      smooth={true}
                                      offset={-70}
                                      duration={500}>
                                    Contact
                                  
                                    
                                  </Links>
                                <button onClick={()=>setPopup(!popup)}   className='h-full w-1/2 bg-green-400 lg:text-xl flex items-center justify-center'>Order</button>
                              </div>
                          </aside>
                      </div>
                </section>
              </>
            }

  </>}

          {/* <div>
              {carOrder.vehicle}</h1>
                {carOrder.pickUpPlace}</h1>
              {carOrder.pickUpDate}</h1>
              {carOrder.dropOfPlace}</h1>
              {carOrder.dropOfDate}</h1>
              {carOrder.link}</h1>
              {carOrder.type}</h1>
              {carOrder.rent}</h1>
              {carOrder.model}</h1>
              {carOrder.year}</h1>
              {carOrder.ac}</h1>
              {carOrder.fuel}</h1>


          </div>   */}
      </main>
    </>
)
}

export default Card