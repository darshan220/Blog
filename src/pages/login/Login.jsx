import React, { useState } from 'react';
import "./Login.css"
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'

function Login(props) {

    const [auth,setAuth] = useState({
        username:'',
        password: '',
    })
    const history = useHistory()

    const OnRegister = () => {
        history.push('/')
    }

    const Onsubmit = (e) => {
        e.preventDefault()
        const login = JSON.parse(localStorage.getItem('BlogUser'))
        console.log(login);
        // const data = login.map((person)=> `${person.username}`)
        // console.log(data)
        if (auth.username === login.username)
        {
            setAuth(history.push('/Home'))
        }
        else{
            alert("you have not registered yet..go to registration page")
            history.push('/')
        }

       
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label>UserName</label>
                <input 
                    className="loginInput" 
                    type="text" 
                    placeholder="Enter your email..." 
                    value={auth.username}
                    onChange={(e)=> setAuth({...auth,username: e.target.value})}/>

                <label>Password</label>
                <input 
                    className="loginInput" 
                    type="password" 
                    placeholder="Enter your password..." 
                    value={auth.password}
                    onChange={(e)=> setAuth({...auth,password: e.target.value})}/>

                <button className="loginButton" onClick={(e)=> Onsubmit(e)}>LOGIN</button>
            </form>
            <button className="loginRegisterButton" onClick={(e)=> OnRegister(e)}>
                REGISTER
            </button>
        </div>
    );
}

export default Login;