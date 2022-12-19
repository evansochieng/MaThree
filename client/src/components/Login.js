import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }

  return (
    <div className="auth-form-container" id="grey">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="app-title">MaThree</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
          className="form-group form-control"
          required
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="form-group form-control"
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div>
        Create an account <Link to='/signup' className="auth-route">Register</Link>
      </div>
    </div>
  );
}

export default Login;
