import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const AdminSignUp = () => {

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        name: '',
        password: '',
        email: '',
        passwordcnf: ''
    })

    //errors
    const [error, setError] = useState([]);

    function handleChange(e) {
        setLoginData({
            ...loginData, [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginData)
        fetch('/admins', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify({
                username: loginData.name,
                email: loginData.email,
                password: loginData.password,
                password_confirmation: loginData.passwordcnf
            })
        }).then(res => {
            if (res.ok) {
                setLoginData({
                    name: "",
                    password: "",
                    email: "",
                    passwordcnf: ""
                })
                return navigate('/adminLogin')
            }
            else {
                res.json().then( err => {
                    console.log(err.errors);
                    setError(err.errors);
                })
            }
        })

    }


    return (
      <div>
        <div className="auth-form-container">
          <h2>Sign Up</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="name"
              type="text"
              value={loginData.name}
              onChange={handleChange}
              placeholder="your username"
              required="required"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="your email"
              required="required"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              required="required"
            />

            <label htmlFor="passwordcnf">Confirm Password</label>
            <input
              id="passwordcnf"
              name="passwordcnf"
              value={loginData.passwordcnf}
              onChange={handleChange}
              type="password"
              placeholder="Reenter password"
              required="required"
            />

            {/* render error(s) */}
            {error.map((e) => (
              <h5 key={e} style={{ color: "red" }}>
                {e}!
              </h5>
            ))}

            <button type="submit">Sign Up</button>
          </form>
          <Link to="/adminLogin" className="link-btn">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    );
}

export default AdminSignUp