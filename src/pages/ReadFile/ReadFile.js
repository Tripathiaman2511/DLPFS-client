import React, { useContext, Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import ViewEachFile from './ViewEachFile'
import { UserContext } from '../../Auth/Authenticate'
function ReadFile() {

  const [data,setData]=useState([])
  const[fetched,setFetched]=useState(true)
  const [fileName,setFileName]=useState()
  const[textData,setTextData]=useState('')
  const[loading,setLoading]=useState(true)
  const{username}=useContext(UserContext)
  const[allowed,setAllowed]=useState(false)
  const[dataLoaded,setDataLoaded]=useState(false)
  useEffect(()=>{
    checkRead(callFile)
  },[])
  
  const checkRead=async(clbk)=>{
    await axios.post('/getUser/read',{username})
    .then(res=>{
      setAllowed(res.data)
      setLoading(false)
    })
    clbk()
  }

  const callFile=()=>{
    axios.get('/read',{})

  .then(res=>{
    setData(res.data)
    setFetched(false)
  }
    
  )

  }
  const preview=(value)=>{
   
    setFileName(value.fileName)
    
    axios.get(`/read/preview/api`,{params:value})
    .then(res=>{
        setTextData(res.data)
    })
    
    
}

return(<>
  {
    loading?(<div className='w-fit font-bold mx-auto text-7xl mt-[15rem] text-blue-600 '>Loading...</div>):
      (allowed?
        (fetched? 
          (<h1 className='w-fit mt-[17rem] text-3xl mx-auto bg-slate-200 p-2 text-slate-500'>Fetching Data...</h1>):
          (data.length!==0?
            (
        <div className=' m-2 flex flex-row '>
      <div className='w-1/2 mt-4 mr-[8rem]  h-[85vh] overflow-y-scroll py-4 '>
        {data.map(value=>{
          return (
          <Fragment key={value.fileName}>
            <div className='w-[30rem] flex flex-row justify-between mx-auto   border border-solid border-black mb-4 p-2'>
            <h1 >{value.fileName}</h1> 
            <button className='bg-black text-white py-1 px-6 focus:outline-none  focus:bg-blue-500' onClick={()=>{
              setTextData('')
              setDataLoaded(true)
            preview(value)
            }}>View</button>
          
            </div>
          </Fragment>
          )
          })
        }        
      </div>
      <div className='w-1/2'>
      <ViewEachFile loading={dataLoaded} selectFile={textData} fileName={fileName}/>
      </div>
      
            </div>):
            (<h1 className='w-fit mt-[17rem] text-3xl mx-auto bg-slate-200 p-2 text-slate-500'>OOPS! Nothing to Read</h1>)
          )
        ):
        (
        <div>
          <div className='w-fit font-bold mx-auto text-7xl mt-[15rem] text-red-600 '>Permission Denied!</div>
          <div className='w-fit mx-auto text-xl text-slate-400 mt-2'>Ask your admin to give read permission.</div>
        </div>
        )
      )
  }
</>)


}


export default ReadFile