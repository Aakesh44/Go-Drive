import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Order } from './features/cars';
import {Link} from 'react-scroll'

const Choice = () => {

  const dispatch=useDispatch();

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

  const [num,setNum]=useState(0)



  // const cars=[
  //   "https://i.pinimg.com/564x/a0/25/29/a02529f875fc3991a191b81ff134ddd8.jpg",
  //   "https://i.pinimg.com/564x/08/54/06/0854066e5dfbba92e2fafbfacb4910fa.jpg",
  //   "https://i.pinimg.com/564x/ec/87/46/ec87468667159ea74f0eb0d728678dd2.jpg",
  //   "https://i.pinimg.com/564x/87/63/c0/8763c047fc8eccb08a8d5a65ac72f290.jpg",
  //   "https://i.pinimg.com/564x/48/61/ab/4861abee1e13c91a7c1777a7f9592d7d.jpg",
  //   "https://i.pinimg.com/564x/09/53/6f/09536ffdd4dbd83ed8d18170bdd70d5f.jpg"
  // ]
  return (
    <main className='Finding w-10/12 bg-white mt-16 flex flex-col gap-20 md:gap-5'>
      <section style={{height:'20vh'}} className=' w-full bg- red-300'>
          <h1 className=' text-4xl font-semibold text-center my-5'>TOP RENTAL PRODUCTS</h1>
          <h1 className='text-lg font-semibold text-gray-600 text-center my-5'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip or emergency</h1>
      </section>

      <section style={{}} className='w-full py-10  flex gap-4 justify-center lg:justify-between flex-wrap'>

        <div className='w-4/5 md:w-2/5 lg:w-1/4 gap-1 flex flex-col items-center justify-center '>
          <button  onClick={()=>setNum(0)} className={ `selectbtn w-3/4 text-center bg-green-300 text-xl md:text-2xl py-2 cursor-pointer  ${num===0 ? 'selectedbtn':''} `}>{vehicles[0].model}</button >
          <button  onClick={()=>setNum(1)} className={ `selectbtn w-3/4 text-center bg-green-300 text-xl md:text-2xl py-2 cursor-pointer  ${num===1 ? 'selectedbtn':''} `}>{vehicles[1].model}</button >
          <button  onClick={()=>setNum(2)} className={ `selectbtn w-3/4 text-center bg-green-300 text-xl md:text-2xl py-2 cursor-pointer  ${num===2 ? 'selectedbtn':''} `}>{vehicles[2].model}</button >
          <button  onClick={()=>setNum(3)} className={ `selectbtn w-3/4 text-center bg-green-300 text-xl md:text-2xl py-2 cursor-pointer  ${num===3 ? 'selectedbtn':''} `}>{vehicles[3].model}</button >
          <button  onClick={()=>setNum(4)} className={ `selectbtn w-3/4 text-center bg-green-300 text-xl md:text-2xl py-2 cursor-pointer  ${num===4 ? 'selectedbtn':''} `}>{vehicles[4].model}</button >
          <button  onClick={()=>setNum(5)} className={ `selectbtn w-3/4 text-center bg-green-300 text-xl md:text-2xl py-2 cursor-pointer  ${num===5 ? 'selectedbtn':''} `}>{vehicles[5].model}</button >
        </div>
        <div className=' w-3/5 md:w-1/2 lg:w-1/3  '>
          <img src={vehicles[num].link} alt="vechile" className='w-full  aspect-square'/>
        </div>
        <div className='w-3/5 md:w-1/2 lg:w-1/4 bg-green-300 flex flex-col'>
          <header className=' h-1/5 w-full bg-green-400 text-white font-semibold flex items-center justify-center'>
            <h1 className=' text-xl md:text-2xl'>{`${vehicles[num].rent} ₹ / Per day`}</h1>
          </header>
          <table className='w-full h-3/5 flex flex-col justify-between items-center'>
            <tbody className='w-full h-3/4'>
            <tr className=' border h-1/3 w-full flex items-center'>
              <td className='w-1/2 text-lg text-center border-r-2'>Model</td>
              <td className='w-1/2 text-lg text-center'>{vehicles[num].model}</td>
            </tr>
            <tr className=' border h-1/3 w-full flex items-center'>
              <td className='w-1/2 text-lg text-center border-r-2'>Year</td>
              <td className='w-1/2 text-lg text-center'>{vehicles[num].year}</td>
            </tr>
            <tr className=' border h-1/3 w-full flex items-center'>
              <td className='w-1/2 text-lg text-center border-r-2'>AC</td>
              <td className='w-1/2 text-lg text-center'>{vehicles[num].ac}</td>
            </tr>
            <tr className=' border h-1/3 w-full flex items-center'>
              <td className='w-1/2 text-lg text-center border-r-2'>Fuel</td>
              <td className='w-1/2 text-lg text-center'>{vehicles[num].fuel}</td>
            </tr>
            </tbody>
          </table>
          <Link 
            to="Find"
            smooth={true}
            duration={500}
            offset={-70}


            className='h-16 w-full lg:h-1/5 bg-green-400 text-green-700 mt-auto flex items-center justify-center'>
            <input 
              type="submit"  
              value={`Find your ${vehicles[num].type}`} 
              onClick={()=>
                dispatch(
                  Order({link:vehicles[num].link,type:vehicles[num].type,rent:vehicles[num].rent,model:vehicles[num].model,year:vehicles[num].year,ac:vehicles[num].ac,fuel:vehicles[num].fuel})
                )}
              className='last info h-4/6 w-3/5 md:w-1/2 lg:w-1/2 cursor-pointer bg-green-50 rounded-sm text-lg font-semibold' />
          </Link >

        </div>

      </section>
    </main>
  )
}

export default Choice