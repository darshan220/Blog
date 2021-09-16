import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import './Settings.css'
function Settings(props) {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>

                <form className="settingsForm">

                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn.pixabay.com/photo/2016/12/01/07/30/music-1874621_960_720.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>

                    <label htmlFor="">UserName</label>
                        <input type="text" placeholder="Enter your name..." />
                    <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter your email..."/>
                    <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter your Password..."/>
                    <button className="settingsSubmit" >Update</button>

                </form>
                </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;