import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
function ManageUser() {
    const location =useLocation()
    const [user,setUser]=useState(location.state)
    const navigate=useNavigate()

    const updateUser=()=>{
        axios.post('/updateUser',user)
        .then(navigate(-1))
    }
  
  return (
   <>
   <div className='m-2 text-xl '>
    
    <table className='table-auto w-[33rem] border-separate border-spacing-y-8 border-spacing-x-3 mb-[6rem] '>
        <tbody>
            <tr >
                <td className='font-semibold'>Name:</td>
                <td className='text-slate-500'>{user.name}</td>
            </tr>
            <tr>
                <td className='font-semibold'>Unique Id:</td>
                <td className='text-slate-500'>{user.username}</td>
            </tr>

            <tr>
                <td className='font-semibold'>Upload Access:</td>
                <td className='flex flex-row justify-between'>
                    {user.upload.access?(<>
                        <button defaultChecked className=' py-1 px-6  text-white bg-indigo-500 '>True</button>
                    <button className=' py-1 px-6 bg-slate-600 text-white' onClick={()=>{
                        setUser({
                            ...user,
                            upload:{
                                access:false,
                                fileName:user.upload.fileName
                            }
                        })

                       
                    }}>False</button>
                    </>):(<>
                        <button className=' py-1 px-6 bg-slate-600 text-white' onClick={()=>{
                        setUser({
                            ...user,
                            upload:{
                                access:true,
                                fileName:user.upload.fileName
                            }
                        })                            
                           
                        }}>True</button>
                    <button defaultChecked className=' py-1 px-6  text-white bg-indigo-500'>False</button>
                    </>)}
                    
                    </td>
            </tr>
            <tr>
                <td></td>

                <td>
                {user.upload.fileName.length===0?(<></>):(
                <select className="bg-slate-700 text-white p-2 ">
                {user.upload.fileName.map(value=>{return (<option key={value}>{value}</option>)})}
                </select>)}
                
                    
                  
                
                </td>
            </tr>
            <tr>
                <td className='font-semibold'>Read Access:</td>
                <td className='flex flex-row justify-between'>
                    {user.review.access?(<><button defaultChecked className=' py-1 px-6  text-white bg-indigo-500 '>True</button>
                    <button className=' py-1 px-6 bg-slate-600 text-white' onClick={()=>{
                        setUser({
                            ...user,
                            review:{
                                access:false,
                                fileName:user.review.fileName
                            }
                        })
                       
                    }}>False</button>
                    
                    </>):(<>
                        <button className=' py-1 px-6 bg-slate-600 text-white' onClick={()=>{
                        setUser({
                            ...user,
                            review:{
                                access:true,
                                fileName:user.review.fileName

                            }
                        })
                        
                        }}>True</button>
                    <button defaultChecked className=' py-1 px-6  text-white bg-indigo-500'>False</button>
                    </>)} 
                
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                {user.review.fileName.length===0?(<></>):(
                <select className="bg-slate-700 text-white p-2 ">
                {user.review.fileName.map(value=>{return (<option key={value}>{value}</option>)})}
                </select>)}
                </td>
            </tr>
        </tbody>
    </table>
    <div className='flex flex-row justify-end'>
        <button className='transition duration-400 hover:ease-in-out mr-10 py-1 px-6 bg-slate-600 text-white hover:bg-indigo-700 hover:text-white' onClick={updateUser}>Update</button>
        <button className=' transition duration-400 hover:ease-in-out mr-10 py-1 px-6 bg-white text-black border border-solid border-black hover:bg-black hover:text-white' onClick={()=>navigate(-1)}>Go Back</button>
    </div>
   </div>
   </>
  )
}

export default ManageUser