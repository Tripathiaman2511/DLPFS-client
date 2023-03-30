import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Auth/Authenticate'
function Navbar() {
const {token,username,name}=useContext(UserContext)


  if(token && username!=='admin'){
    return(
      <>
          <div className='sticky top-0 flex flex-row justify-between text-xl bg-gradient-to-r from-indigo-700 to-sky-600 text-white  '>
          <div className='ml-2 py-[1rem] italic font-bold'>{name}</div>
            <div className='w-[25rem] mr-4'>
            <ul className='flex flex-row justify-between py-[0.7rem] '>

                <li className='py-2'><Link className='p-2 font-bold hover:text-white hover:bg-blue-900 rounded-lg transition duration-400  hover:ease-in ' to="/">UPLOAD</Link> </li>
                <li className='py-2'><Link className='p-2 font-bold hover:text-white hover:bg-blue-900 rounded-lg transition duration-400  hover:ease-in ' to="/read">READ</Link> </li>
                <li className='py-2'><Link className='p-2 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition duration-400  hover:ease-in' to='/logout'>LOGOUT</Link></li>
                
            </ul>
        </div> 
          
    </div>
      </>
    )

  }
  if(token && username==='admin'){
    return(
      <>
          <div className='sticky top-0 flex flex-row justify-between text-xl bg-gradient-to-r from-indigo-700 to-sky-600 text-white  '>
          <div className='ml-2 py-[1rem] italic font-bold'>Admin</div>
            <div className='w-[25rem] mr-4'>
            <ul className='flex flex-row justify-between py-[0.7rem]'>
                <li  className='py-2'><Link className='p-2 font-bold hover:text-white hover:bg-blue-900 rounded-lg transition duration-400  hover:ease-in ' to="/">Home</Link></li>
                <li  className='py-2'><Link className='p-2 font-bold hover:text-white hover:bg-blue-900 rounded-lg transition duration-400  hover:ease-in '  to="/addUser">Add User</Link></li>
                <li  className='py-2'><Link className='p-2 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition duration-400  hover:ease-in' to='/logout'>Logout</Link></li>
            </ul>
        </div> 
          
    </div>
      
      </>
    )
  }

  return (
    <>
    
    <div className='sticky top-0 flex flex-row justify-between text-xl bg-gradient-to-r from-indigo-700 to-sky-600 text-white   '>
    <div className='ml-2 py-[1rem] italic font-bold'>Data Leakage Prevention</div>
        <div className='w-[15rem] mr-4'>
            <ul className='flex flex-row justify-between py-[0.7rem] '>
                <li className='py-2 '><Link className='p-2 font-bold hover:text-white hover:bg-blue-900 rounded-lg transition duration-400  hover:ease-in ' to="/">HOME</Link> </li>
                <li className='py-2'><Link className='p-2 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition duration-400  hover:ease-in' to='/login/user'>LOGIN</Link></li>
            </ul>
        </div> 
          
    </div>
    
    
    </>
  )
}

export default Navbar