import axios from 'axios'
import React, { useState } from 'react'



function AddUser() {
   
    const [username,setUsername]=useState()
    const [name,setName]=useState()
    const [password,setPassword]=useState()
 


    const addUser=()=>{
        if(username && name && password){
            axios.post('createUser',{username,name,password})
            .then(res=>console.log(res))
            .finally(setName(''),setPassword(''),setUsername(''))
        }
        else{
            alert("Please add ")
        }


    }

  return (
    <div className='m-2  py-[6rem]'>
       
        
    <h1 className='w-fit m-auto text-xl'>Add User</h1>
  
        <form className='flex flex-col w-fit mx-auto mt-10' onSubmit={addUser}>
        <input type="text" placeholder='name' className='w-[25rem] border border-solid border-black p-2 mb-8'   onChange={(event)=>{
            setName(event.target.value)
        }} />
        <input type="text" placeholder='Unique Id' className='w-[25rem] border border-solid border-black p-2 mb-8'  onChange={(event)=>{
            setUsername(event.target.value)
        }}/>
        <input type="text" placeholder='password' className='w-[25rem] border border-solid border-black p-2 mb-8' onChange={(event)=>{
            setPassword(event.target.value)
        }} />
        
        <input type="submit" value="Create" className='bg-black text-white w-60 py-2 px-4 mx-auto'/>
        </form>
    
   </div>
  )
}

export default AddUser