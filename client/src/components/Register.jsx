import React, { useState } from "react";
import { GrCheckbox } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = ({ onAddUser }) => {

  //define navigation variable
  const navigate = useNavigate();

  //define state for errors in signing up
  const [error, setError] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    idNumber: "",
    mobileNumber: "",
    password: "",
    cnfpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      ...formData
    }

    console.log(JSON.stringify(newUser));

    fetch('/commuters', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: newUser.name,
        username: newUser.username,
        id_number: newUser.idNumber,
        phone_number: newUser.mobileNumber,
        password: newUser.password,
        password_confirmation: newUser.cnfpassword
      }),
    })
    //handle errors
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          onAddUser(data)
        })
        alert("Signup Successful!")
        return navigate('/login')
      } else {
        res.json().then( err => {
          console.log(err.errors)
          setError(err.errors)
        })
      }
    })
    // .then((data) => {
      setFormData({
        name: "",
        username: "",
        idNumber: "",
        mobileNumber: "",
        password: "",
        cnfpassword: "",
      });
    //   onAddUser(data)
    // })

    //navigate('/login')
  }



  return (
    <div className="auth-form-container">
      <h1 className="app-title">Mathree</h1>
      <div className="SignUpController">
        <form className="register-form">
          <h1>Create Account</h1>
          <label htmlFor="name">Full name</label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full name"
          />
          <label htmlFor="name">Username</label>
          <input
            value={formData.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <label htmlFor="name">ID Number</label>
          <input
            value={formData.idNumber}
            onChange={handleChange}
            type="number"
            name="idNumber"
            id="idNumber"
            placeholder="Enter ID Number"
          />
          <label htmlFor="name">Mobile Number</label>
          <input
            value={formData.mobileNumber}
            onChange={handleChange}
            type="mobile"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Enter Mobile Number"
          />
          <label htmlFor="name">Password</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <label htmlFor="name">Confirm Password</label>
          <input
            value={formData.cnfpassword}
            onChange={handleChange}
            type="password"
            name="cnfpassword"
            id="cnfpassword"
            placeholder="Confirm Password"
          />

          {/* render error(s) */}
          {error.map( (e) => (
          <h5 key={e} style={{color: 'red'}}>
            {e}!
          </h5>
        ))}
        
          <button
          onClick={handleSubmit}
           type="submit">Sign Up</button>
        </form>

        <div className="conditions">
          <span>
            <GrCheckbox className="check" />
          </span>
          <p> I agree to all terms and conditions </p>
        </div>
      </div>
      <div>
        <p>Already have an account? <Link to='/login' className="auth-route">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
