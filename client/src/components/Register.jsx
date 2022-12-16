import React, { useState } from "react";
import { GrCheckbox } from "react-icons/gr";

const Register = () => {
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
    
    

  return (
    <div className="auth-form-container">
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
          <button type="submit">Sign Up</button>
        </form>

        <div className="conditions">
          <span>
            <GrCheckbox className="check" />
          </span>
          <p> I agree to all terms and conditions </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
