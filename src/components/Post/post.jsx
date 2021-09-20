import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "axios";

function Post() {
  const axios = require("axios");

  const [showPost, setShowPost] = useState([]);

  const getPost = () => {
    axios.get("http://localhost:3004/data").then((response) => {
      console.log(response);
      const myPost = response.data;
      setShowPost(myPost);
    });
  };

  useEffect(() => getPost(), []);
  return (
    <>
      {showPost.map((blog) => {
        return (
          <div className="post">
            <img className="postImg" src={blog.imgUrl}></img>
            <div className="postInfo">
              <span className="postTitle">{blog.mainHead}</span>
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
