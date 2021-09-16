import React from 'react';
import './posts.css'
import Post from '../Post/post';
function Posts(props) {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
        </div>
    );
}

export default Posts;