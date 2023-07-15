import React from 'react'
import {useDispatch} from 'react-redux'
import {Order} from './features/cars'
// import {useSelector}  from 'react-redux'
import { Link } from 'react-router-dom'
const Form = () => {
    const dispatch=useDispatch()
    // const last=useSelector(state=>state.cars.value)

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <main style={{}} className='FormPop bg-white flex flex-col'>
        <header style={{height:'8vh'}} className='bg-green-200 w-full flex items-center justify-start'>
            <h1 className='tetx-xl md:text-2xl '>Personal information</h1>
        </header>

        <form action="" onSubmit={handleSubmit} className='flex flex-col h-full w-full border-2'>

            <div className=' lg:flex   w-full h-2/6 lg:h-1/6 '>
                <div className='w-full h-1/2 lg:h-auto  lg:w-1/2 flex flex-col justify-center px-12'>
                    <h1 htmlFor="" className=''>first name <span className='text-red-600'>*</span></h1>
                    <input type="text" className='w-4/5 h-1/3 border-2 border-gray-400'/>
                </div>
                <div className='w-full h-1/2 lg:h-auto  lg:w-1/2 flex flex-col justify-center px-12'>
                    <h1 htmlFor="">last name<span className='text-red-600'>*</span></h1>
                    <input type="text" className='w-4/5 h-1/3 border-2 border-gray-400'/>
                </div>            
            </div>
            <div className='lg:flex   h-2/6 lg:h-1/6  '>
                <div  className='lg:w-1/2 w-full h-1/2 lg:h-auto flex flex-col justify-center px-12'>
                    <h1 htmlFor="">phone number<span className='text-red-600'>*</span></h1>
                    <input type="text" className='w-4/5 h-1/3 border-2 border-gray-400'/>
                </div>
                <div className='lg:w-1/2 w-full h-1/2 lg:h-auto flex flex-col justify-center px-12'>
                    <h1 htmlFor="">age<span className='text-red-600'>*</span></h1>
                    <input type="text" className='w-4/5 h-1/3 border-2 border-gray-400'/>
                </div>            
            </div>

            <div className=' h-2/6 lg:h-1/6 px-12 w-full lg:flex'>
                <div className='lg:w-1/2 w-full h-1/2 lg:h-auto flex flex-col justify-center pr-12'>
                    <h1 htmlFor="" className=''>email <span className='text-red-600'>*</span></h1>
                    <input type="text" className='w-4/5 h-1/3 border-2 border-gray-400'/>
                </div>
                <div className=' lg:h-full lg:w-1/2 w-full h-1/2   sm:flex items-center justify-evenly'>            
                    <h1 htmlFor=""className=''>nationality<span className='text-red-600'>*</span></h1>
                    <div>
                            <input type="radio" name="nationality" />indian
                    </div>
                    <div>
                            <input type="radio" name="nationality" /> Foreigner
                    </div>
                </div>
            </div>



            <div className='lg:flex   h-2/6 lg:h-1/6 w-full  border-gray-400 '>
                <div className='lg:w-1/2 w-full h-1/2 lg:h-auto flex flex-col justify-center px-12'>
                    <h1 htmlFor="" className=''>Indians - address<span className='text-red-600'>*</span></h1>
                    <input type="text" className='w-4/5 h-1/3 border-2 border-gray-400'/>
                </div>
                <div className='w-full h-1/2 lg:h-full lg:w-1/2 px-12 flex flex-col justify-center'>
                    <h1 htmlFor="">forigners - passport copy<span className='text-red-600'>*</span></h1>
                    <input type="file" name="" id="" />
                </div>            
            </div>

            <div className='w-full h-2/6 lg:h-1/6 lg:flex '>
                <div className='lg:w-1/2 w-full h-1/2  lg:h-full flex items-center justify-center'>
                    <input type="checkbox" className='h-5 w-5'/> <label htmlFor="">Re-checked</label>                   
                </div>
                <div  className='lg:w-1/2 w-full h-1/2  lg:h-full flex items-center justify-center '>
                    <Link to='/' className='h-1/2 w-1/3 lg:w-1/4 lg:h-1/4  flex items-center justify-center'>
                        <input  
                            onClick={()=>
                                dispatch(Order({
                                    order:true
                                }))}
                            type="submit" 
                            value="submit" 
                            className='w-full h-full bg-white border-2 border-green-600 info cursor-pointer' />
                    </Link>
                    
                    {/* {last.order ? <>won{last.order}</>:<>lost{last.order}</>} */}
                </div>
            </div>



        </form>
    </main>
  )
}

export default Form