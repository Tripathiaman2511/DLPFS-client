import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
function Logout() {
    const navigate=useNavigate()
useEffect(async()=>{

removeCookies(logout)

},[])
const removeCookies=(clbk)=>{
  Cookies.remove('auth-token')
  Cookies.remove('name')
  Cookies.remove('username')
  clbk()
  
}

const logout=()=>{

      console.log("User Logged Out")
      navigate('/')
      window.location.reload()
    
}
  return (
   <></>
  )
}

export default Logout