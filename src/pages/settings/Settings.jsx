import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import './Settings.css'
function Settings() {

    const [newUser,setNewUser] = useState({
        newUsername: '',
        newEmail: '',
        newPassword: '',
    })
    
     
    const OnSubmit = async (e) => {
        e.preventDefault()

        const local = JSON.parse(localStorage.getItem('blogUser'));
        console.log(local);
        
        if(newUser.newUsername === local.username)
        {
            axios.put(`http://localhost:3000/users/${local.id}?${newUser.newUsername}`,{
                 
                username: `${newUser.newUsername}`,
                email: `${newUser.newEmail}`,
                password: `${newUser.newPassword}`,
            })
            .then(function (response){
                console.log(response);
                console.log("data successfully updated");
            })
        }
        else{
            alert("Please Enter valid username")
        }
        
    }

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
                        <input 
                            type="text" 
                            placeholder="Enter your name..." 
                            value={newUser.newUsername}
                            onChange={(e)=> {setNewUser({...newUser, newUsername: e.target.value})}}
                            />

                    <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email..."
                            value={newUser.newEmail}
                            onChange={(e)=> {setNewUser({...newUser, newEmail: e.target.value})}}
                            />

                    <label htmlFor="">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your Password..."
                            value={newUser.newPassword}
                            onChange={(e)=> {setNewUser({...newUser, newPassword: e.target.value})}}
                            />

                    <button className="settingsSubmit" onClick={OnSubmit}>Update</button>

                </form>
                </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;