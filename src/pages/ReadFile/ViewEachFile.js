
import axios from "axios"
import { UserContext } from "../../Auth/Authenticate"
import { useContext } from "react"
import closeButton from '../../assets/close2.svg'
import loadingImage from '../../assets/Loading.svg'
function ViewEachFile({selectFile,fileName,handleChange}) {
 
  const {username}=useContext(UserContext)
  
    if(selectFile){
      const download=async()=>{
        await axios.post('/updateUser/review',{username,fileName})
        .then(res=>{console.log(res)})
        
        const text=selectFile
        const blob=new Blob([text],{type:'text/plain'})
        const url=URL.createObjectURL(blob)
        const link=document.createElement('a')
        link.href=url
        link.download=fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
        
        return(<>
        <div className='w-[70rem]  rounded-md flex flex-col'>
          <div className="text-lg text-white py-[1rem] rounded-md bg-slate-900">
            <h1 className='ml-2'>File Name:<span className="text-slate-300 italic ml-2"> {fileName}</span></h1>
            
          </div>
            <div className='mt-4 select-none bg-slate-200 w-[60rem] mx-auto text-justify p-2 overflow-y-auto h-[20rem] '>
           {selectFile}
            </div>
          

            <button className='bg-indigo-500 text-xl text-white mx-auto my-4 py-2 w-[12rem] rounded-md hover:bg-blue-600 transition duration-400 hover:ease-in-out  ' onClick={download}>Download</button>
        <button onClick={handleChange} className="absolute -top-4 -right-4"><img className="w-[3rem]" src={closeButton} alt="" /></button>  
        </div>
        
        
        </>)
    }

}

export default ViewEachFile