import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css"

function Topbar(props) {
    
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                        <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                        <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                        <li className="topListItem"><Link className="link" to="/Write">WRITE</Link></li>
                        <li className="topListItem">{user && "LOGOUT"}</li>
                    </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/06/world-music-day-1624241072.jpg" className="topImg"></img>
                    ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/Login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/Register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                    )
                }
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

export default Topbar;