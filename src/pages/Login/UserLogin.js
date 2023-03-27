import React,{ useState }  from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'
function UserLogin() {
  const navigate=useNavigate()

  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const userLogin=()=>{
    const data={
      username,password
    }
    axios.post('/login/user',data)
    .then(res=>{
      console.log(res.data)
      if(res.status===200){
        console.log("User Login Successful")
        Cookies.set('auth-token',res.data.token, { expires: 1 })
        Cookies.set('username',res.data.username, { expires: 1 })
        Cookies.set('name',res.data.name, { expires: 1 })
        
        navigate('/')
       window.location.reload()
      }
    })
  }
  return (
    <div className='w-fit m-auto flex flex-col mt-[12rem]'>
         <h1 className='w-fit mx-auto mb-[2rem] text-xl'>User Section</h1>
    <input type="text" placeholder='username' className='w-[25rem] border border-solid border-black p-2 mb-8' onChange={(e)=>{
      e.preventDefault()
      setUserName(e.target.value)
    }} />
    <input type="password" placeholder='password' className='w-[25rem] border border-solid border-black p-2' onChange={(e)=>{
     e.preventDefault()
      setPassword(e.target.value)
    }}/>
    <button className='bg-slate-500 text-white w-60 py-2 px-8 mx-auto mt-8 rounded-xl hover:bg-black  '  onClick={userLogin}>Log In</button>
</div>
  )
}

export default UserLogin