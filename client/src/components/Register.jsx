import React from "react";
import { GrCheckbox } from "react-icons/gr";

const Register = () => {
  return (
    <div className="Container">
      <div className="SignUpController">
        <form className="Form">
          <h1>Create Account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full name"
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input
            type="text"
            name="idNumber"
            id="idNumber"
            placeholder="Enter Username"
          />
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Enter Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <input
            type="password"
            name="cnfpassword"
            id="cnfpassword"
            placeholder="Confirm Password"
          />
          <button type="submit">Sign Up</button>
              </form>
              
        <div>
          <GrCheckbox />
          <p> I agree to all terms and conditions </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
