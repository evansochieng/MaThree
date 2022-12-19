import React, { useState } from "react";
  
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
      body: JSON.stringify({ username,password,}),
    })}



  return (
    <div className="loginbox" id="grey">
      <br />
      <br />
      <div className="card" style={{ width: "48rem" }} id="loginbox">
        <form className="forms" onSubmit={handleSubmit}>
          <br></br>
          <br></br>
          <h1>MaThree</h1>
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
          />{" "}
          <br></br>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          
          
       
          
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
