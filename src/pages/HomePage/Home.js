import React from 'react'
import { NavLink } from 'react-router-dom'
import background from '../../assets/background.svg'
function Home() {
  return (
    <>
   <div className='static'>
    <h1 className='absolute top-[19rem] left-[9rem]   text-center text-8xl '>DATA LEAKAGE PREVENTION</h1>
    <img className=' w-[40rem]   m-auto z-0' src={background} alt="" />
    <h1 className='absolute bottom-2 left-[30rem]'>Secure File Sharing by removing PII data from the documents. <span className='text-blue-500'>Learn more</span> </h1>
   </div>

  

    </>
  )
}

export default Home