import React from 'react';
import "./topbar.css"
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import userImg from '../../assect/topbar-userprofile.jpg'
import axios from 'axios';

function Topbar() {
    
    // const user = true;
    const history = useHistory()

    const OnHome = () => {
        history.push('/Home')
    }
    
    const OnWrite = () => {
        history.push('/Write')
    }

    const OnLogOut = () => {
        history.push('/')
    }

    const OnSettings = () => {
        history.push('/Settings')
    }

    function OnFacebook()  {
        window.location.href ='https://www.facebook.com'
    }

    function OnTwitter()  {
        window.location.href ='https://twitter.com'
    }
   
    function OnInstagram()  {
        window.location.href ='https://www.instagram.com'
    }
    return (
        <div className="top">
            <div className="topLeft">

            <div onClick={() =>  OnFacebook()}>
                <i className="topIcon fab fa-facebook" />
            </div>

            <div onClick={() =>  OnTwitter()}>
            <i className="topIcon fab fa-twitter"></i>
            </div>

            <div onClick={() =>  OnInstagram()}>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>

            </div>
            <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem" onClick={OnHome}>HOME</li>
                        <li className="topListItem" onClick={OnWrite}>WRITE</li>
                        <li className="topListItem" onClick={OnSettings}>SETTINGS</li>
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
                    
                    {/* {
                        axios.get(`http://localhost:3000/users?username`)
                        .then((response) =>{
                            console.log(response);
                            if(response.data.length !== 0)
                            {
                                <img src={userImg} className="topImg"></img>
                            }
                            else
                            {
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
                            }
                        })
                    } */}

                <img src={userImg} className="topImg"/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

export default Topbar;