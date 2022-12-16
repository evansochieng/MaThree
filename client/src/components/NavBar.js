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
              float: "right",
            }}
          >
            <button>Home</button>
            <button>About</button>
            <button>Book</button>
            <button>Contact</button>
            <button>Logout</button>
          </div>
        </div>
      </div>
    );
}

export default NavBar;