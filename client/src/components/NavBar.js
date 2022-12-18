import React from "react";
import { NavLink } from 'react-router-dom'
import mathreeLogo from "../mathreelogo.png"

const NavBar = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#B9B7BD",
            width: "1000px",
          }}
        >
          <div>
            <img
              src={mathreeLogo}
              alt="mathree-logo"
              style={{ height: "50px", width: "100px" }}
            />
          </div>
          <div
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "flex-end",
              float: "right"
            }}
          >
            <NavLink to="/" exact="true">
              Home
            </NavLink>
            <NavLink to="/about" exact="true">
              About
            </NavLink>
            <NavLink to="/book" exact="true">
              Book
            </NavLink>
            <NavLink to="/contact" exact="true">
              Contact
            </NavLink>
            <NavLink to="/signup" exact="true">
              Signup
            </NavLink>
            <NavLink to="/logout" exact="true">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    );
}

export default NavBar;