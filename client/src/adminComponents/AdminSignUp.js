import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const AdminSignUp = () => {

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        name: '',
        password: '',
        email: '',
    })

    function handleChange(e) {
        setLoginData({
            ...loginData, [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/admin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }).then(res => {
            if (res.ok) {
                setLoginData({
                    name: "",
                    password: "",
                    email: "",
                })
                return navigate('/adminLogin')
            }
            else {

            }
        })

    }


    return (
        <div>
            <div className="auth-form-container">

                <h2>Sign Up</h2>

                <form className="login-form" onSubmit={handleSubmit}>

                    <label htmlFor="username">username</label>
                    <input
                        id="username"
                        name="name"
                        type="text"
                        value={loginData.name}
                        onChange={handleChange}
                        placeholder="your username"
                        required='required'
                    />

                    <label htmlFor="email">email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={loginData.email}
                        onChange={handleChange}
                        placeholder="your email"
                        required='required'
                    />

                    <label htmlFor="password">password</label>
                    <input
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Enter password"
                        required='required'
                    />

                    <button type="submit">Sign Up</button>

                </form>
                <Link to="/adminLogin" className="link-btn" >Already have an account? Sign In</Link>

            </div>
        </div>
    )
}

export default AdminSignUp