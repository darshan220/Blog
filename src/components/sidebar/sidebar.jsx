import React from 'react';
import './sidebar.css'
import sideBar from '../../assect/sidebar-profile.jpeg'

function sidebar(props) {
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
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src={sideBar} alt=""/>

                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </p> 
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>

            </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <div onClick={() =>  OnFacebook()}>
                        <i className="sidebarIcon  fab fa-facebook" />
                    </div>

                    <div onClick={() =>  OnTwitter()}>
                        <i className="sidebarIcon  fab fa-twitter"></i>
                    </div>

                    <div onClick={() =>  OnInstagram()}>
                        <i className="sidebarIcon  fab fa-instagram-square"></i>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default sidebar;