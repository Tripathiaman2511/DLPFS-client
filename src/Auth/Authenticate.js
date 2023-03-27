import Cookies from 'js-cookie';
import React, { useState,useEffect, createContext } from 'react'

import { useNavigate } from 'react-router-dom'
export const UserContext=createContext()

function Authenticate({children}) {
    const navigate=useNavigate();
  
    const[token,setToken]=useState('')
    const[username,setUsername]=useState('')
    const[name,setName]=useState('')
    const checkUserToken=()=>{
      const token=Cookies.get('auth-token')

      const username=Cookies.get('username')
      const name=Cookies.get('name') 
      if(!token || token==='undefined'){
        console.log('Not Logged In')
      
        return navigate('/')
      }
      console.log('Logged In')
      setUsername(username)
      setName(name)
      setToken(token)
    }
    useEffect(()=>{
      checkUserToken()
    },[])
return (
    
   <>
   <UserContext.Provider value={{token,username,name}}>

   {children}
   </UserContext.Provider>
   </>
   

  )
}

export default Authenticate