import React, { useContext } from 'react'
import { UserContext } from '../../Auth/Authenticate'
import { NavLink } from 'react-router-dom'
function MainHome() {
  const {username,name}=useContext(UserContext)
  return (
    <div>
        <div className='w-fit font-bold mx-auto text-7xl mt-[15rem] '>Hello! <span className=' text-blue-700'>{name}</span></div>
        <div className='w-fit mx-auto text-xl text-slate-400 mt-2'>Hope you're doing fine.</div>
        
    </div>
  )
}

export default MainHome