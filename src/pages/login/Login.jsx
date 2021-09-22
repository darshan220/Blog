import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"

function Login(props) {

    const [auth,setAuth] = useState({
        username:'',
        password: '',
    })

    const [loginData,setLoginData] = useState()

    const history = useHistory()

    const OnRegister = () => {
        history.push('/')
    }    

    const Onsubmit = (e) => {
        e.preventDefault()

        // const login = JSON.parse(localStorage.getItem('BlogUser'))
        // console.log(login);
        // const data = login.map((person)=> `${person.username}`)
        // console.log(data)

        axios.get(`http://localhost:3000/users?username=${auth.username}&password=${auth.password}`)
            
            .then((response)=> {
                console.log(response);
                const loginInfo = response.data
                setLoginData(loginInfo)

                if(response.data.length !== 0){
                    history.push('/Home')
                    toast("Welcome",{position: "top-right", type: "success"});
                    
                }
                else{
                    // alert("please enter valid username and password")
                    toast("please enter valid username and password",{position: "top-right", type: "warning"});
                    
                }
            })
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
                <ToastContainer />
            </form>
            <button className="loginRegisterButton" onClick={(e)=> OnRegister(e)}>
                REGISTER
            </button>
        </div>
    );
}

export default Login;