import React, { useEffect, useState } from 'react';
import "./Register.css"
// import Login from '../login/Login';
import {useHistory} from 'react-router-dom'

function Register() {

    const [user,setUser] = useState({
        username: '',
        email: '',
        password: '',
    })
    
    const history = useHistory()

    // const [storeUser,setStoreUser] = useState([])
    
    const OnSubmit = (e) => {   
  
        e.preventDefault();
        console.log(user);
        const newUser = Object.entries(user)

        // setStoreUser(Object.entries(newUser),...storeUser)
        localStorage.setItem("BlogUser",JSON.stringify(user))

        var a = document.forms['form']['u_name'].value;
        var b = document.forms['form']['email'].value;
        var c = document.forms['form']['password'].value;

        if (a === null || a === "", b === null || b === "", c === null || c === "")
        {
            alert("Enter your information....")
        }
        else{
            alert(`Thank you for registration: ${user.username}`)
            history.push('/Login')
           
        }
    }

    const OnLogin = () => {
        history.push('/Login')
    }

    return (
        <div>
            <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm" name="form">

                <label>UserName</label>
                <input 
                    name="u_name" 
                    id="user_name" 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your username..." 
                    value={user.username}
                    // onChange={handleChange}
                    onChange={(e)=> setUser({...user,username: e.target.value})}/>
                    

                <label>Email</label>
                <input 
                    name="email" 
                    id="em" 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your email..." 
                    value={user.email}
                    // onChange={handleChange}
                    onChange={(e)=> setUser({...user,email: e.target.value})}/>

                <label>Password</label>
                <input 
                    name="password" 
                    id="pass" 
                    className="registerInput" 
                    type="password" 
                    placeholder="Enter your password..." 
                    value={user.password}
                    // onChange={handleChange}
                    onChange={(e)=> setUser({...user,password: e.target.value})}/>

                <button className="registerButton" type="submit" onClick={(e)=> OnSubmit(e,user)}> 
                    REGISTER
                </button>
                
            </form>
            <button className="registerLoginButton" onClick={OnLogin}> 
                LOGIN
            </button>
        </div>
        </div>
    );
}

export default Register;