import React,{ useContext, useRef, useState,useEffect}from 'react'
import axios from 'axios'
import fileImage from '../../assets/Group 132.svg'
import { UserContext } from '../../Auth/Authenticate'
import loadingImage from '../../assets/Loading.svg'

function Upload() {
  
  const[file,setFile]=useState('')
  const[otherData,setOtherData]=useState({write:false,read:false,operation:{masked:false,replacement:false}})
  const[selected,setSelected]=useState(false)
  const[writeSelect,setWriteSelect]=useState(false)
  const[readSelect,setReadSelect]=useState(false)
  const[maskedSelect,setMaskedSelect]=useState(false)
  const[replacementSelect,setReplacementSelect]=useState(false)
  
  const[allowed,setAllowed]=useState(false)
  const[isHide,setIsHide]=useState(false)
  const [loading,setLoading]=useState(true)
  const inputRef=useRef();
  const{username}=useContext(UserContext)

  useEffect(() => {
    checkUpload()
  }, [])
  
  const displayNext=()=>{
    setIsHide(true)
  }

  const upload= async ()=>{
    let formData=new FormData()
    
    formData.append('file',file)
    formData.append('otherData',JSON.stringify(otherData))
    formData.append('username',username)
    
    otherData.write?(axios.post('/upload/temp',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))):
    (axios.post('/upload/',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err)))
    
    setIsHide(false)
    window.location.reload()
    
  }

  const handleDrag=(event)=>{
    event.preventDefault();
  }

  const handleDrop=(event)=>{
    event.preventDefault()
    const file=event.dataTransfer.files[0]
    setFile(file)
    file?setSelected(true):setSelected(false)
    
  }

  const checkUpload=async()=>{
    await axios.post('/getUser/upload',{username})
    .then(res=>{
      setAllowed(res.data)
      setLoading(false)

    })

  }

 
return(
 <>
 {loading?(<img className='mx-auto mt-[15rem] animate-spin' src={loadingImage} alt="" />):(allowed?(
   <>
   <div className='m-2' >
   {selected?isHide?(
     <div className='flex flex-row w-[50rem] justify-between border border-solid mx-auto my-[7rem]'>
     <div className='  w-[18rem] border border-solid   py-[6rem]'>
       <img className='w-12 mx-auto' src={fileImage} alt='' />
       <h1 className='w-fit mx-auto text-xl '>{file.name}</h1>
     
     </div>
     <div className='w-[32rem] border border-solid flex flex-col justify-between'>
     <div className='m-2 flex flex-row justify-between'>
     {maskedSelect? (<button className='border-2 border-solid py-[5rem] px-[5rem] bg-blue-100 font-semibold  border-blue-700 '>Masked</button>):
     (<button className='py-[5rem] px-[5rem] border-2  bg-slate-100 font-semibold' onClick={()=>{
           setOtherData({
             ...otherData,
             operation:{
               masked:true,
               replacement:false
             } 
           })
           setMaskedSelect(true)
           setReplacementSelect(false)
         }}>Masked</button>)}
         {replacementSelect? (<button className='border-2 border-solid py-[5rem] px-[4rem] bg-blue-100 font-semibold  border-blue-700 '>Replacement</button>):
         (<button className='py-[5rem] px-[4rem] border-2  bg-slate-100 font-semibold' onClick={()=>{
           setOtherData({
             ...otherData,
             operation:{
               masked:false,
               replacement:true
             } 
           })
           setReplacementSelect(true)
           setMaskedSelect(false)
         }}>Replacement</button>)}
       
 
     </div>
     {
      (otherData.operation.masked || otherData.operation.replacement)?(  <button className=' py-[1rem] px-full mx-2 my-[1rem] bg-blue-600 text-white' onClick={upload}>Upload</button>):
      (<button disabled className='  py-[1rem] px-full mx-2 my-[1rem] bg-slate-400 text-white cursor-not-allowed' >Upload</button>)
     }
   
     
   
     </div>
     
   </div>
   ):(
 
       <div className='flex flex-row w-[50rem] justify-between border border-solid mx-auto my-[7rem]'>
         <div className='  w-[18rem] border border-solid   py-[6rem]'>
           <img className='w-12 mx-auto' src={fileImage} alt="File Image" />
           <h1 className='w-fit mx-auto text-xl '>{file.name}</h1>
         
         </div>
         <div className='w-[32rem] border border-solid flex flex-col justify-between'>
         <div className='m-2 flex flex-row justify-between'>
           
           {writeSelect?(<button   className='border-2 border-solid py-[5rem] px-[6rem] bg-blue-100 font-semibold  border-blue-700 '>Write</button>):(
               <button  className='py-[5rem] px-[6rem] border-2  bg-slate-100 font-semibold'  onClick={(e)=>{
                 setOtherData({
                   ...otherData,
                   write:true,
                   read:false
                 })
                 setWriteSelect(true)
                 setReadSelect(false)
               }}>Write</button>
             )}
             {readSelect?(<button  className='border-2 border-solid py-[5rem] px-[6rem] bg-blue-100 font-semibold  border-blue-700 '>Read</button>):(
               <button  className='py-[5rem] px-[6rem] border-2  bg-slate-100 font-semibold' onClick={(e)=>{
                 setOtherData({
                   ...otherData,
                   write:false,
                   read:true
                 })
                 setWriteSelect(false)
                 setReadSelect(true)
               }}>Read</button>
             )}
 
         </div>
         {
          ( readSelect || writeSelect)?(  <button className=' py-[1rem] px-full mx-2 my-[1rem] bg-blue-600 text-white' onClick={displayNext}>Next</button>):
          (<button disabled className='  py-[1rem] px-full mx-2 my-[1rem] bg-slate-400 text-white cursor-not-allowed' >Next</button>)
         }
       
         
       
         </div>
         
       </div>
      
     
     ):(
      <>
      <div onDragOver={handleDrag} onDrop={handleDrop} className='w-[60rem] flex flex-col mx-auto my-[5rem]  py-[10rem] ring bg-blue-700 ring-blue-600 text-white   ring-offset-2 '>
         <h1 className='w-fit mx-auto text-3xl '>Drag and Drop File to Upload</h1>
 
         <input hidden ref={inputRef} type='file' name='file' onChange={(e)=>{
           const file=e.target.files[0] 
          const newFile=new File([file],username+'-'+file.name)
          console.log(newFile)
          console.log(file)
           setFile(newFile)
           file?setSelected(true):setSelected(false)
         }}/>
         <button className=' ring-offset-2 w-fit mx-auto mt-4  text-2xl font-semibold  bg-white text-blue-700 py-2 px-[6rem]' onClick={()=>inputRef.current.click()}>Upload File</button>
       </div>
       
      
      </>
       
      
     )
   }
   </div>
   </>
 ):(
  <div>
        <div className='w-fit font-bold mx-auto text-7xl mt-[15rem] text-red-600 '>Permission Denied!</div>
        <div className='w-fit mx-auto text-xl text-slate-400 mt-2'>Ask your admin to give upload permission.</div>
        
    </div>

 ))}
 </>
)
}


export default Upload