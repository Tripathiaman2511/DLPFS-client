import React, { useContext, Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import ViewEachFile from './ViewEachFile'
import { UserContext } from '../../Auth/Authenticate'
import oops from '../../assets/oops.svg'
import loadingImage from '../../assets/Loading.svg'
import fetchingImage from '../../assets/fetching.svg'
function ReadFile() {
  const{username}=useContext(UserContext)

  const [data,setData]=useState([])
  const[fetched,setFetched]=useState(true)
  const [fileName,setFileName]=useState('')

  const[textData,setTextData]=useState('')
  const[loading,setLoading]=useState(true)
 const[selected,setSelected]=useState(false)
  const[allowed,setAllowed]=useState(false)
  const[dataLoaded,setDataLoaded]=useState(false)
  useEffect(()=>{
    checkRead(callFile)
    var date=new Date()
    console.log(typeof Date.now())
    console.log(date.toLocaleDateString())
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
   console.log(value)
   setSelected(true)
    setFileName(value.fileName.split('-')[2])
   
    axios.get(`/read/preview/api`,{params:value})
    .then(res=>{
        setTextData(res.data)
    })
    
    
}
const closeButton=()=>{
  setSelected(false)
}

return(<>
  {
    loading?(<img className='mx-auto mt-[15rem] animate-spin' src={loadingImage} alt="" />):
      (allowed?
        (fetched? 
          (<h1 className='w-fit  text-3xl mt-[2rem] mx-auto animate-pulse p-2 text-slate-500'><img src={fetchingImage} alt="" /></h1>):
          (data.length!==0?
            (
        
     <div className='static'>
      <div className=' table-auto w-[80rem] mx-auto  text-center mt-4 border-collapse b'>
          <div className='table-header-group  '>
                  <div className='table-row  bg-slate-900 text-slate-200 '>
                    <div className='table-cell w-[20rem] py-[0.5rem]'>Name</div>
                    <div className='table-cell w-[20rem] '>Uploaded By</div>
                    <div className='table-cell w-[20rem] '>Date</div>
                    <div className='table-cell w-[20rem] '>Time</div>
                  </div>
          </div>
          <div className='table-row-group'>
          {data.map(value=>{
            return (
            <Fragment key={value.fileName}>
              <div  className='select-none table-row    bg-slate-200 text-slate-900 '>
              <h1 onClick={()=>{setTextData('');setDataLoaded(true);preview(value)}} className='table-cell  py-[0.5rem] hover:font-semibold ' >{value.fileName.split('-')[2]}</h1> 
              <h1 className='table-cell  py-[0.5rem]' >{value.fileName.split('-')[1]===username?'You':value.fileName.split('-')[1]}</h1>
              <h1 className='table-cell  py-[0.5rem]' >{new Date(parseInt( value.fileName.split('-')[0])).toLocaleDateString()}</h1>
              <h1 className='table-cell  py-[0.5rem]' >{new Date(parseInt( value.fileName.split('-')[0])).toLocaleTimeString()}</h1>
              </div>
            </Fragment>
            )
            })
          }        
          </div>

        </div>
        {selected?dataLoaded?(
          <div className='absolute top-[10rem] left-[14rem] bg-white text-black drop-shadow-2xl rounded-md  border-black '>
          <ViewEachFile selectFile={textData} fileName={fileName} handleChange={closeButton} />
          </div>
        ):(<></>):(<></>)}
        
     
     </div>
        
        
     
      
          ):
            (<><img className='w-[25rem] mx-auto mt-[10rem]' src={oops} alt="" /> </> )
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