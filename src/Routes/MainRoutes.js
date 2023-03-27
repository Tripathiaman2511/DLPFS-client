import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/HomePage/Home'
import SelectLogin from '../pages/Login/SelectLogin'
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
            <Route path='/login' element={<SelectLogin/>}>
                <Route path='admin' element={<AdminLogin/>}/>
                <Route path='user' element={<UserLogin/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
           </Routes>
           </>
        )
    }
   

}

export default MainRoutes