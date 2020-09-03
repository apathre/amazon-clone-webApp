import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase';

function Login() {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const history=useHistory();

const login= (event) =>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        history.push("/");

    })
    .catch((e)=>alert(e.message))
}

const register = (event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        history.push("/");

    })
    .catch((e)=>alert(e.message))
}
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" 
                alt="amazon_logo"/>
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type="text"
                    value={email}
                    onChange={event=>setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input 
                    type="text"
                    value={password}
                    onChange={event=>setPassword(event.target.value)}/>
                    <button 
                    className="login_signInButton"
                    onClick={login}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <button 
                className="login_createAccButton"
                onClick={register}>Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
