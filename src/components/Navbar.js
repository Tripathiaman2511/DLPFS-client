import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { UserContext } from '../Auth/Authenticate'
function Navbar() {
const {token,username}=useContext(UserContext)


  if(token && username!=='admin'){
    return(
      <>
          <div className='sticky top-0 flex flex-row justify-between m- text-xl bg-slate-900 text-white py-4 '>
    <div className='w-60 ml-2'>Data Leakage Prevention</div>
        <div className='mr-2 w-96'>
            <ul className='flex flex-row justify-around'>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/upload">Upload</Link> </li>
                <li><Link to="/read">Read</Link> </li>
                <li><Link to='/logout'>Logout</Link></li>
                
            </ul>
        </div> 
          
    </div>
      </>
    )

  }
  if(token && username==='admin'){
    return(
      <>
          <div className='sticky top-0 flex flex-row justify-between m- text-xl bg-slate-900 text-white py-4 '>
          <div className='w-60 ml-2'>Admin</div>
            <div className='mr-2 w-96'>
            <ul className='flex flex-row justify-around'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addUser">Add User</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
        </div> 
          
    </div>
      
      </>
    )
  }

  return (
    <>
    
    <div className='sticky top-0 flex flex-row justify-between m- text-xl bg-slate-900 text-white py-4 '>
    <div className='w-60 ml-2'>Data Leakage Prevention</div>
        <div className='mr-2 w-96'>
            <ul className='flex flex-row justify-around'>
                <li><Link to="/">Home</Link> </li>
                
                <li><Link to='/login'>Log In</Link></li>
            </ul>
        </div> 
          
    </div>
    
    
    </>
  )
}

export default Navbar