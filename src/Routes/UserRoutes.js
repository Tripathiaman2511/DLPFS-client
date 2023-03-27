import React from 'react'
import ReadFile from '../pages/ReadFile/ReadFile';
import Upload from '../pages/UploadFile/Upload';
import NotFoundPage from '../pages/Misc/NotFoundPage';
import ErrorPage from '../pages/Misc/ErrorPage';
import{Routes,Route} from 'react-router-dom'
import MainHome from '../pages/HomePage/MainHome';
import Logout from '../pages/Login/Logout';
function UserRoutes() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainHome/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/read' element={<ReadFile/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path="/error" element={<ErrorPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    
    </Routes>
    
    </>
  )
}

export default UserRoutes