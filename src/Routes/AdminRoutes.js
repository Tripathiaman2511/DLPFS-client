import React from 'react'
import AddUser from '../pages/Admin/AddUser';
import Admin from '../pages/Admin/Admin';
import ManageUser from '../pages/Admin/ManageUser';
import NotFoundPage from '../pages/Misc/NotFoundPage';
import ErrorPage from '../pages/Misc/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Logout from '../pages/Login/Logout';

function AdminRoutes() {
  return (
    <>
    <Routes>
      
      <Route  path='/' element={<Admin/>} />
      <Route  path='/addUser' element={<AddUser/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route  path='/manage' element={<ManageUser/>}/>
       <Route path="/error" element={<ErrorPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>

    </Routes>
   
    
   
    </>
  )
}

export default AdminRoutes