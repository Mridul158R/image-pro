import React, { useState } from 'react'
import useStorage from '../hooks/useStorage';
// import { Form } from 'react-router-dom'

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {startUpload, progress} = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
      setSelectedFile(e.target.files[0]);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(selectedFile){
      startUpload(selectedFile)
    }
    setSelectedFile(null);
  }

  return (
    <div className=' text-center mt-10'>
        <form onSubmit={handleSubmit} className='flex items-center flex-col gap-8' >
            <input type="file" onChange={handleFileChange} className="file-input file-input-bordered w-full max-w-xs" />
            <button type='submit' className={`btn btn-neutral gap-3 ${Boolean(progress) && 'loading'}`} 
            disabled ={!selectedFile}>
              Upload 
              </button>
        </form>
    </div>
  )
}

export default UploadForm
