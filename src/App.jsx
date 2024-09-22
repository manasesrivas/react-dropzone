import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import './App.css'

const App = () =>{

  // const [file, setFile] = useState()

  const onDrop = useCallback((acceptedFiles) => {

  },[])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDrop})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    acceptedFiles.forEach(element => {
      formData.append('file', element)
    });
    // formData.append('upload_preset', 'file')
    // formData.append('api_key', 'file')
    const res = await axios.post('http://localhost:8080/upload/picture', formData);
    console.log(res.data);
  }
  
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* <input type="text" name="" id="" /> */}
        {/* <input type="file" name="" id="" onChange={e=>setFile(e.target.files[0])}/> */}
        <div {...getRootProps()} className="dragArea">
          <input {...getInputProps()} />
          {isDragActive ? (<p>Drop the files here...</p>) : (<p>Drag 'n' drop some files here, or click to select files</p>)}
        </div>
        {acceptedFiles && ( acceptedFiles.map((element, index)=>(<img key={index} src={URL.createObjectURL(acceptedFiles[index])} alt="" className="img"/> )))}
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App