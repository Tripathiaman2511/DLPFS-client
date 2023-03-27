
import axios from "axios"
import { UserContext } from "../../Auth/Authenticate"
import { useContext } from "react"
function ViewEachFile({loading,selectFile,fileName}) {
  const {username}=useContext(UserContext)
    if(selectFile==='' && loading)return (<div className="w-fit ml-[12rem] mt-[16rem] text-3xl bg-slate-700 cursor-not-allowed p-4 text-white">Loading...</div>)
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
        <div className='flex flex-col w-fit m-auto '>
            <h1 className='text-xl font-semibold bg-black text-white py-2 px-6  '>{fileName}</h1>
            <div className=' text-justify select-none bg-slate-700 text-white p-2 w-[40rem] h-[28rem] overflow-y-scroll '>
           {selectFile}
            </div>
           
            <button className='w-[22rem] mx-auto mt-[2rem] bg-black text-2xl text-white px-6 py-4 rounded-full  hover:bg-blue-700 ' onClick={download}>Download</button>
        </div>
        
        
        </>)
    }
  return (
    <div className="w-fit ml-[12rem] mt-[16rem] text-3xl bg-slate-700 cursor-not-allowed p-4 text-white">Select file to view</div>
  )
}

export default ViewEachFile