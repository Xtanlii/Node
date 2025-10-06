import axios from "axios";
import { useState } from "react";



function FileUpload() {
  const [file, setFile] = useState(null);
  const formData = new FormData()
  formData.append("myfile", file)
  const submitfile = () => {
    try {
      axios.post('/api/upload', {
        formData
      })
    } catch (err) {
      console.log(err)
    }
  }
  

  const filePath = async(event) => {
    await setFile(event.target.files[0]);
    // console.log("File name:", file.name);
    // // console.log("File type:", file.type);
    // // console.log("File size:", file.size);
  }
  return (
    <form
      action="/upload"
      method="post"
      enctype="multipart/form-data"
      className="max-w-sm mx-auto mt-10 p-6 bg-gray-900 text-white rounded-2xl shadow-lg space-y-4"
    >
      <div>
        <label
          for="fileUpload"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Choose a file
        </label>
        <input
          type="file"
          id="fileUpload"
          name="myFile"
          onChange={filePath}
          className="block w-full text-sm text-gray-300 
             file:mr-4 file:py-2 file:px-4 
             file:rounded-lg file:border-0 
             file:text-sm file:font-semibold 
             file:bg-indigo-600 file:text-white 
             hover:file:bg-indigo-500 cursor-pointer"
        />
      </div>

      <button
        type="submit"
        onClick={submitfile}
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 
           rounded-lg font-semibold text-white transition"
      >
        Upload
      </button>
    </form>

  );
}

export default FileUpload;