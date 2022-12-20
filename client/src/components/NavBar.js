import React from "react";
import { NavLink } from 'react-router-dom'
import mathreeLogo from "../mathreelogo.png"

//define styles for nav linls
const linkStyles = {
  display: "inline-block",
  width: "100px",
  fontSize: "18px",
  fontWeight: "bold",
  padding: "10px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
};

const NavBar = () => {
    return (
      <div>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#B9B7BD",
            width: "1000px",
          }}
        >
          <div>
            <img
              src={mathreeLogo}
              alt="mathree-logo"
              style={{ height: "50px", width: "100px", float: "left" }}
            />
          </div>
          <div
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              float: "right",
            }}
          >
            <NavLink to="/" exact="true" style={linkStyles}>
              Home
            </NavLink>
            <NavLink to="/about" exact="true" style={linkStyles}>
              About
            </NavLink>
            <NavLink to="/book" exact="true" style={linkStyles}>
              Book
            </NavLink>
            <NavLink to="/contact" exact="true" style={linkStyles}>
              Contact
            </NavLink>
            <NavLink to="/signup" exact="true" style={linkStyles}>
              Signup
            </NavLink>
            <NavLink to="/login" exact="true" style={linkStyles}>
              Login
            </NavLink>
            <NavLink to="/logout" exact="true" style={linkStyles}>
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    );
}

export default NavBar;