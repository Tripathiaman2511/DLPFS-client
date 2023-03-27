import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function SelectLogin() {
    const [user,setUser]=useState(false)
    const [admin,setAdmin]=useState(false)
    return (
   <>
   <div className='m-2 flex flex-row'>
    <div className='w-1/2 mt-[10rem]'>
        <h1 className='w-fit mx-auto text-2xl'>Which one you are?</h1>
        <h1 className='w-fit mx-auto mb-[2rem]'>select one for login</h1>
        <div className='w-[32rem] mx-auto flex flex-row justify-between'>
            {user?(
                <NavLink className='px-[5rem] py-[5rem]  bg-blue-700 text-white text-2xl ' to='/login/user'>USER</NavLink>
            ):(
                <NavLink className='px-[5rem] py-[5rem] border border-solid border-slate-400 text-2xl ' onClick={()=>{
                    setUser(true)
                    setAdmin(false)}} to='/login/user'>USER</NavLink>
                )   
            }
            {admin?(
                <NavLink className='px-[5rem] py-[5rem]  bg-blue-700 text-white text-2xl ' to='/login/admin'>ADMIN</NavLink>
            ):(
                <NavLink className='px-[5rem] py-[5rem] border border-solid border-slate-400 text-2xl ' onClick={()=>{
                    setAdmin(true)
                    setUser(false)
                }} to='/login/admin'>ADMIN</NavLink>
            )}
            
            
        </div>
    </div>
    <div className='w-1/2'>
        {(user || admin)?(<Outlet/>):(<div className="w-fit ml-[12rem] mt-[16rem] text-3xl bg-slate-700 cursor-not-allowed p-4 text-white">No user Selected</div>)}
    
    </div>
    
   </div>
   </>
  )
}

export default SelectLogin