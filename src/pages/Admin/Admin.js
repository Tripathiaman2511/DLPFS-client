import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import loadingImage from '../../assets/Loading.svg'


function Admin() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    getUser()
  },[])

  const getUser=()=>{
    
    axios.get('/getUser')
    .then(res=>{
      setData(res.data)      
      setLoading(false)
    })
    
  }



  return (
   <>
   
    {loading?(<img className='mx-auto mt-[15rem] animate-spin' src={loadingImage} alt="" />):(
      <>{data && data.length!==0?
        (<>
        <div className='m-2 flex flex-row '>
            <div className='table-auto border mx-auto '>
              <div className='table-header-group   bg-black text-white text-xl '>
                <div className='table-row '>
                  <div className='table-cell py-[0.5rem]'>Name</div>
                  <div className='table-cell py-[0.5rem]'>Upload</div>
                  <div className='table-cell py-[0.5rem]'>Read</div>
                  <div className='table-cell py-[0.5rem]'></div>
                </div>
              </div>
              <div className='table-row-group bg-slate-200 text-xl'>
                {data.map(value=>{
                return (<Fragment key={value.username}>
                  <User user={value}/>
                 
                  </Fragment>)
    
                  })}
              </div>
            </div>
            </div>
        </>):(<> 
        <div >
          <div className='w-fit mx-auto text-5xl mt-[15rem] font-semibold'>No User Found</div>
          <div className='w-fit mx-auto text-lg mt-2'>Create user now.</div>
        </div>
        
        </>)}</>
    )}
    


   
   </>
  )
}

export default Admin