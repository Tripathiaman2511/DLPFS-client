import React from 'react'
import edit from '../../assets/edit.svg'
import dustbin from '../../assets/dustbin.svg'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
const User=({user}) =>{
  const navigate=useNavigate()
 
  
  const editUser=(user)=>{
    if(user){
      navigate('/manage',{state:user})
    }
  }
  
  return (
    <>
   
    <div className='table-row ' key={user}>
      <div className='table-cell  w-[30rem]'> {user.name}</div>
     <div className='table-cell  w-[7rem]'> {user.upload.fileName.length}</div>
      <div className='table-cell  w-[7rem]'>{user.review.fileName.length}</div>
      <div className='table-cell  text-end w-[10rem]' > 
      <button className='w-[2.5rem] p-2 text-white' onClick={()=>editUser(user)}><img src={edit} alt="" /></button>
      {/* <button className='w-[2.2rem] p-2 text-white'  ><img src={dustbin} alt="" /></button> */}
      </div>
    
      </div>
    
   
   
    
    
    </>
    
  )
}

export default User