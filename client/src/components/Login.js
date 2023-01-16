import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login( {onLogin, isLoggedIn} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // set state for error
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  //console error
  console.log(error);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    //handle authentication errors
    .then( res => {
      if (res.ok) {
        res.json().then( user => {
          onLogin(user);
          isLoggedIn(true);
        });
        alert("Login successful")
        return navigate('/home')
      } else {
        res.json().then( err => {
          setError(err.error);
        })
      }
    })
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
        {/* render authentication error */}
        {error.map( (err) => (
          <h5 key={err} style={{color: 'red'}}>
            {err}!
          </h5>
        ))}

        <button type="submit" className="login-btn">Login</button>
      </form>
      <div>
        Create an account <Link to='/signup' className="auth-route">Register</Link>
      </div>
    </div>
  );
}

export default Login;
