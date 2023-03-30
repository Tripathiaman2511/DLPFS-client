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
    <div className='w-fit m-auto flex flex-col mt-[6rem] py-[2rem] px-[4rem] bg-slate-100 drop-shadow-xl  '>
       
        
    <h1 className='w-fit mb-[0.7rem] text-4xl'>Add User</h1>
  
        <form className='flex flex-col w-fit mx-auto mt-10' onSubmit={addUser}>
        <input type="text" placeholder='name' className='w-[25rem] rounded-md placeholder-shown:italic drop-shadow-lg border-black p-2 mb-8'   onChange={(event)=>{
            setName(event.target.value)
        }} />
        <input type="text" placeholder='Unique Id' className='w-[25rem]  rounded-md placeholder-shown:italic drop-shadow-lg border-black p-2 mb-8'  onChange={(event)=>{
            setUsername(event.target.value)
        }}/>
        <input type="text" placeholder='password' className='w-[25rem] rounded-md placeholder-shown:italic drop-shadow-lg border-black p-2 mb-8' onChange={(event)=>{
            setPassword(event.target.value)
        }} />
        
        <input type="submit" value="Create" className='transition duration-500 hover:ease-in-out bg-blue-500 text-white w-full  py-2 px-8 mx-auto  rounded-xl hover:bg-indigo-700 '/>
        </form>
    
   </div>
  )
}

export default AddUser