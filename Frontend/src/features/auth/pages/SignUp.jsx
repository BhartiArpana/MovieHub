import React, { useState } from "react";
import "../styles/signup.scss";
import {Link, useNavigate} from 'react-router-dom'
import Input from "../components/Input";
import { userAuth } from "../hooks/userAuth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading,handleUserRegister} = userAuth()
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    await handleUserRegister(name,email,password)
    navigate('/')
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
           <Input 
          type={"text"} 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          placeholder="Name" 
          autoComplete="new-password"
          />
          <Input 
          type={"email"} 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          placeholder="Email" 
          autoComplete="new-password"
          />
           <Input 
          type={"password"} 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          placeholder="Password" 
          autoComplete="new-password"
          />
          
          <button type="submit">Sign Up</button>
        </form>
        <p className="switch-login">
          Already have an account? <span><Link to={'/login'}>Login</Link></span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;