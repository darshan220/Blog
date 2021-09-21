import React, { useEffect, useState } from "react";
import "./post.css";
import {useHistory} from 'react-router-dom'

function Post() {
  const axios = require("axios");
  const history = useHistory()
  const [showPost, setShowPost] = useState([]);

  const getPost = () => {
    axios.get("http://localhost:3000/data").then((response) => {
      console.log(response);
      setShowPost(response.data);
      const img = URL.revokeObjectURL("blob:http://localhost:3000/7a5d3246-92a9-4629-b7b9-4b2fdfd65459")
      console.log(img); 
    });
   
  };

  useEffect(() => getPost(), []);

  const OnTitle = () => {
    history.push('/post')
  }
  
  return (
    <>
      {showPost.map((blog) => {
        return (
          <div className="post">
            <img className="postImg" src={blog.imgUrl}></img>
            <div className="postInfo">
              <span className="postTitle" onClick={OnTitle}>{blog.mainHead}</span>
              <span className="postDate">{blog.timing}</span>
            </div>
            <p className="postDesc">{blog.desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default Post;
