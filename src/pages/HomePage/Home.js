import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className=' m-2 flex flex-row text-xl pt-[5rem] '>
        <div className='w-1/2 flex flex-col justify-center '>
            <h1 className='font-semibold w-fit mx-auto text-3xl text'>DATA LEAKAGE PREVENTION</h1>
            <NavLink to='/login' className='w-60 py-2 px-4 text-center mx-auto mt-4 rounded-3xl bg-slate-700 text-white hover:bg-black'>Log In</NavLink>
        </div>
        <div className='w-1/2'>
            <h1 className='w-fit m-auto py-4 text-2xl'>About DLPS</h1>
            <p className='text-justify w-[29rem] m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
 </p>
        </div>
    </div>
    </>
  )
}

export default Home