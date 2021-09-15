import React from 'react';
import './post.css'

function post(props) {

    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"></img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postcat">Music</span>
                    <span className="postcat">Life</span>

                </div>
            </div>
        </div>
    );
}

export default post;