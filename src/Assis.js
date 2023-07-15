import React,{useState} from 'react'
import assis from '../src/Images/assis.png'
import { IoSendSharp } from "react-icons/io5";

const Assis = () => {

    const [toggle,setToggle]=useState(false)
    const [bswitch,setBswitch]=useState(false)
    const checktext=(e)=>{
        (e.target.value) ? setBswitch(true) : setBswitch(false)
    }

    const time=new Date()
    const hour=time.getHours().toString()
    const min=time.getMinutes().toString()
    const curtime=`${hour}:${min}`



  return (
    <div className="mainas hidden md: h-14 w-14 bg-white border-amber-300 border z-10  rounded-full  lg:flex flex-col items-center justify-center gap-2   fixed left-3 " >
    <div className="assistant p-1" >
        <img src={assis} alt="" className="w-full h-full" onClick={()=>setToggle(!toggle)}/>

        {toggle && 
                <div className='action bg-green-100 border-2 border-green-500 rounded-md flex-col p-1'>
                    <header className='mb-auto bg-white cursor-default h-8 w-full flex  items-center'>
                        <h1 
                        className=' text-green-800 font-semibold mr-auto'>
                        GoDrive</h1>
                        <h1 className='ml-auto'>{curtime}</h1>
                    </header>
                    <footer className='h-12 w-full flex mt-auto bg-green-400'>
                    <textarea  
                    onChange={checktext}
                    style={{ resize: 'none', overflowY: 'hidden' }} name="" id="" cols="30" rows="3"
                     className='h-full w-4/5 py-2 outline-none border-b-2 border-green-500 bg-green-400'>

                    </textarea>

                    <button 
                    style={bswitch===true ? {backgroundColor:'whitesmoke',color:'green'}:{}}
                    className='h-full p-3 w-1/5'>
                        <IoSendSharp className='h-full w-full '/>
                    </button>
                    </footer>
            </div>
        }

    </div>
</div>
  )
}

export default Assis