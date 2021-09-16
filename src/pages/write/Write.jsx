import React from 'react';
import "./Write.css"
function Write(props) {
    return (
        <div className="write">
            <img className="writeImg" src="https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80" alt=""/>
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    {/* <i className=" writeIcon fas fa-plus-square"></i> */}
                    <i className=" writeIcon fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="writeInput"  autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell something..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Post</button>
            </form>
        </div>
    );
}

export default Write;