import React, { useState } from "react";
import axios from "axios";
// component

//constants
import { data } from "../../data.js";
//css
import "./Write.css";

function Write() {
  const [file, setFile] = useState();

  const [info, setInfo] = useState([]);
  
  const imageUpload = (e) => {
    console.log(e);
    console.log(e.target.files, "event");
    setFile(URL.createObjectURL(e.target.files[0]));
    
  };
  
  console.log(file);
  const handleClick = ()=>{
    axios.post('http://localhost:3004/data', {
      "mainHead": ` ${info.title}`,
      "desc": ` ${info.description}`
     })
     .then(function (response){
       console.log(response);
     })
    }

  return (
    <div className="write">
      <img className="writeImg" src={file} alt="" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            {/* <i className=" writeIcon fas fa-plus-square"></i> */}
            {/* <i className=" writeIcon fas fa-plus-circle"></i> */}
          </label>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            multiple={false}
            onChange={imageUpload}
          />
        </div>
        <div >
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            value={info.title}
            className="writeInput writeText"
            onChange={(e) => setInfo({...info,title: e.target.value})}
          />

          <textarea
            placeholder="Tell something..."
            type="text"
            value={info.description}
            onChange={(e) => setInfo({ ...info, description: e.target.value })}
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit" onClick={handleClick}>
          Post
        </button>
      </form>
    </div>
  );
} 

export default Write;