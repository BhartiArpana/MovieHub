import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form autoComplete="off">
          <Input 
          type={"email"} 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          placeholder={"Email"} 
          autoComplete="username"
          />
          <Input 
          type={"password"} 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          placeholder="Password" 
          autoComplete="new-password"
          />
          <button type="submit">Login</button>
        </form>
        <p className="switch-signup">
          Don't have an account? <span><Link to="/signup">Sign Up</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Login;