import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './login.module.css';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  

  return (
    <div className="login-container">
      <div className="login-left">
        <img 
          src="file:///C:/Users/lenovo/Downloads/restoran-1.0.0/restoran-1.0.0/img/video.jpg" 
          alt="Restaurant" 
          className="login-image"
        />
      </div>
      <div className="login-right">
        <div className="login-content">
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <div>
              <label>Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Your Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
