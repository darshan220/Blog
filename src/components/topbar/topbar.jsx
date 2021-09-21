import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css"
import {useHistory} from 'react-router-dom'
import userImg from './topbar-user.jpg'
function Topbar(props) {
    
    // const user = true;
    const history = useHistory()

    const OnHome = () => {
        history.push('/Home')
    }
    const OnAbout = () => {
        history.push('/Home')
    }
    const OnContact = () => {
        history.push('/Home')
    }
    const OnWrite = () => {
        history.push('/Write')
    }
    const OnLogOut = () => {
        history.push('/')
    }
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
                        <li className="topListItem" onClick={OnHome}>HOME</li>
                        <li className="topListItem" onClick={OnAbout}>ABOUT</li>
                        <li className="topListItem" onClick={OnContact}>CONTACT</li>
                        <li className="topListItem" onClick={OnWrite}>WRITE</li>
                        {/* <li className="topListItem">{user && "LOGOUT"}</li> */}
                        <li className="topListItem" onClick={OnLogOut}>LOGOUT</li>
                    </ul>
            </div>
            
            {/* <div className="topRight">
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
                } */}

                <div className="topRight">
                <img src={userImg} className="topImg"></img>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

export default Topbar;