import React from 'react';
import "./topbar.css"

function Topbar(props) {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">HOME</li>
                        <li className="topListItem">ABOUT</li>
                        <li className="topListItem">CONTACT</li>
                        <li className="topListItem">WRITE</li>
                        <li className="topListItem">LOGOUT</li>
                    </ul>
            </div>
            <div className="topRight">
                <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" className="topImg"></img>
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

export default Topbar;