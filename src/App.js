import React, { useContext, useState } from 'react'

import './App.css';

import Authenticate from './Auth/Authenticate';
import MainRoutes from './Routes/MainRoutes';

function App() {

  return(
    <>

      <Authenticate>
      <MainRoutes/>

      </Authenticate>

 
    </>
  )
}

export default App;
