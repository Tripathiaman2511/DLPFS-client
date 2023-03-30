import React, { useState } from 'react'
import axios from 'axios'
import {NavLink, useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
function AdminLogin() {
  const navigate=useNavigate()
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  
  const adminLogin=()=>{
    const data={
      username,password
    }
    axios.post('/login/admin',data)
    .then(res=>{
      
      
      if(res.status===200){
        console.log("Admin Login Successful")
        Cookies.set('auth-token',res.data.token, { expires: 1 })
        Cookies.set('username',res.data.username, { expires: 1 })
        Cookies.set('name',res.data.name, { expires: 1 })
        
        navigate('/')
        window.location.reload()
      }
    })
  }
  return (
    <>
    <div className='w-fit m-auto flex flex-col mt-[6rem] py-[2rem] px-[4rem] bg-slate-100 drop-shadow-xl '>
    <h1 className='w-fit mb-[0.7rem] text-5xl'>Login</h1>
        <h1 className='mb-[2rem]'>Welcome back! Admin.</h1>
    <input type="text" placeholder='username' className='w-[20rem] rounded-md placeholder-shown:italic border-black p-2 mb-8 drop-shadow-lg' onChange={(e)=>{
      e.preventDefault()
      setUserName(e.target.value)
    }} />
    <input type="password" placeholder='password' className='w-[20rem] rounded-md placeholder-shown:italic border-black p-2 drop-shadow-lg' onChange={(e)=>{
     e.preventDefault()
      setPassword(e.target.value)
    }}/>
    <button className='transition duration-500 hover:ease-in-out bg-blue-500 text-white w-full drop-shadow-md  py-2 px-8 mx-auto mt-[4rem] rounded-xl hover:bg-indigo-700  ' onClick={adminLogin}>Login</button>
<NavLink className='transition duration-500 hover:ease-in-out mt-2 text-center py-2 px-10 bg-white drop-shadow-md text-slate-400 rounded-xl hover:bg-slate-500 hover:text-white' to='/login/user'>Sign with User</NavLink>
</div>

    
    </>
    
  )
}

export default AdminLogin