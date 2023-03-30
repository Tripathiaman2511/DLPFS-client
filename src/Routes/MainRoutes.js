import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/HomePage/Home'

import AdminLogin from '../pages/Login/AdminLogin'
import UserLogin from '../pages/Login/UserLogin'

import NotFoundPage from '../pages/Misc/NotFoundPage'

import { UserContext } from '../Auth/Authenticate'
import Navbar from '../components/Navbar'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
function MainRoutes() {
    const {token,username} =useContext(UserContext)

    if(token && username==='admin'){
        return(
            <>
            <Navbar/>
            <AdminRoutes/>
            </>
        )
    }
    else if(token  && username!=='admin'){
        return(
            <>
            <Navbar/>
            <UserRoutes/>
            </>
        )
    }
    else{
        return(
           <>
           <Navbar/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login/admin' element={<AdminLogin/>}/>
            <Route path='/login/user' element={<UserLogin/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
           </Routes>
           </>
        )
    }
   

}

export default MainRoutes