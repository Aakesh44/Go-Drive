import React,{ useEffect, useState} from 'react'
import car from "../src/Images/car.png"
import motorcycle from "../src/Images/motorcycle.png"
import {useDispatch} from 'react-redux'
import {Order} from './features/cars'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 



const Find = () => {

const carSelect=useSelector(state=>state.cars.value)


const dispatch=useDispatch()

const [vehicle,setVehicle]=useState('car')

const [pickUpPlace,setPickUpPlace]=useState(false)
const [pickUpDate,setPickUpDate]=useState(false)
const [dropOfPlace,setDropOfPlace]=useState(false)
const [dropOfDate,setDropOfDate]=useState(false)

const [allInfo,setAllInfo]=useState(true)

const [success,setSuccess]=useState(true)

useEffect(()=>{
  if (pickUpPlace === false || pickUpPlace === 'false' || pickUpDate === false  || pickUpDate === '' || dropOfDate === false || dropOfDate === '' || dropOfPlace === false || dropOfPlace === 'false' ? false :true) {
    setAllInfo(false)
  }

  if (allInfo || (pickUpPlace === 'false') || (dropOfPlace === 'false') || ( pickUpDate === '') || (dropOfDate === '') ) {
    setSuccess(true)
  }
  else{setSuccess(false)}
  // console.log(pickUpPlace,pickUpDate,dropOfPlace,dropOfDate);

},[pickUpDate,pickUpPlace,dropOfDate,dropOfPlace,allInfo])


const place=["Chennai","Bengaluru","Thiruvananthapuram","Kovai"]

const handleSub=(e)=>{
  e.preventDefault();

  console.log(pickUpPlace,pickUpDate,dropOfPlace,dropOfDate);

}


  return (
    <section className='Find info md:flex flex-col h-5/6 w-4/5 sm:w-3/5 md:w-5/6 lg:w-4/6 xl:w-1/2 bg-green-100'>
        <header className='h-1/5 flex gap-1 w-full'>
          <div 
            onClick={()=>setVehicle('car')} 
            style={vehicle === 'car' ? { borderBottom: '2px solid green' } : {}}
            className=' w-1/2 h-full flex items-center justify-center cursor-pointer'>
            <img src={car} alt="" className='h-4/6'/>
          </div>
          <div 
            onClick={()=>setVehicle('bike')} 
            style={vehicle === 'bike' ? { borderBottom: '2px solid green' } : {}}
            className='w-1/2 h-full  flex items-center justify-center cursor-pointer'>
            <img src={motorcycle} alt="" className=' h-4/6'/>
          </div>
        </header>

        <form className=' w-full h-4/5 flex mt-1 flex-col gap-1 bg-green-100'>

          <div className=' w-full h-1/5  flex flex-col pl-10 gap-1'>
            <label className='block' htmlFor='pickupplace'>pick up*</label>
            <select 
              id="pickupplace" 
              value={pickUpPlace}
              onChange={(e)=>setPickUpPlace(e.target.value)}
              required 
              // defaultValue={false}
              className='w-4/5 h-3/5 outline-none border-2 border-green-500'>
                <option value={false}>select</option>
                <option value={place[0]} htmlFor='pickupplace'>Chennai</option>
                <option value={place[1]} >Bengaluru</option>
                <option value={place[2]} >Thiruvananthapuram</option>
                <option value={place[3]} >Kovai</option>
            </select>
          </div>

          <div className=' w-full h-1/5  flex flex-col pl-10 gap-1'>
            <label className='block'>pick up*</label>
            <input 
              type="date" 
              required
              // defaultValue={false}
              value={pickUpDate}
              onChange={(e)=>{const selectedDate = e.target.value;
              setPickUpDate(selectedDate !== '' ? selectedDate : '');}}
              className='w-4/5 h-3/5  outline-none border-2 border-green-500'/>
          </div>
          <div className=' w-full h-1/5  flex flex-col pl-10 gap-1'>
            <label className='block' htmlFor='dropofplace'>drop off*</label>
            <select 
              id="dropofplace" 
              required 
              // defaultValue={false}
              value={dropOfPlace}
              onChange={(e)=>setDropOfPlace(e.target.value)}
              className='w-4/5 h-3/5 outline-none border-2 border-green-500'>
                <option value={false}>select</option>
                <option value={place[0]}>Chennai</option>
                <option value={place[1]} >Bengaluru</option>
                <option value={place[2]} >Thiruvananthapuram</option>
                <option value={place[3]} >Kovai</option>
            </select>          </div>
          <div className=' w-full h-1/5  flex flex-col pl-10 gap-1'>
            <label className='block'>drop off*</label>
            <input 
              type="date" 
              required 
              // defaultValue={false}
              value={dropOfDate}
              onChange={(e)=>{let selectedDateb = e.target.value;
              setDropOfDate(selectedDateb !== '' ? selectedDateb : '');}}
              className='w-4/5 h-3/5  outline-none border-2 border-green-500'/>
          </div>


          <Link to='/Card' className=' w-full h-1/5  flex items-center justify-center'>
            
              <input 
                type="submit"
                onSubmit={handleSub}
                disabled={success ? true : false }
                onClick={()=>  
                  dispatch(Order(
                  {
                    vehicle:vehicle,
                    pickUpPlace:pickUpPlace,
                    pickUpDate:pickUpDate,
                    dropOfPlace:dropOfPlace,
                    dropOfDate:dropOfDate,
                    link:carSelect.link,
                    type:carSelect.type,
                    rent:carSelect.rent,
                    model:carSelect.model,
                    year:carSelect.year,
                    ac:carSelect.ac,
                    fuel:carSelect.fuel,

                  }
                  ))
                }
                value={success ? `Fill all the colums`:  `Find your ${vehicle}`} 
                className=' h-4/6 w-fit px-3 cursor-pointer bg-green-400 rounded-sm text-lg font-semibold' />
              
          </Link>
        </form>


    </section>
  )
}

export default Find