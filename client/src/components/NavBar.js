import React, { useState } from "react";
import { Link } from "react-router-dom";
import mathreeLogo from "../mathreelogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

// //define styles for nav linls
// const linkStyles = {
//   // display: "inline-block",
//   // width: "100%",
//   fontSize: "18px",
//   fontWeight: "bold",
//   padding: "10px",
//   margin: "0 6px 6px",
//   textDecoration: "none",
//   color: "black",
// };

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: "home",
    },
    {
      id: 2,
      link: "/about",
      name: "about",
    },
    {
      id: 3,
      link: "/book",
      name: "booking",
    },
    {
      id: 4,
      link: "/contact",
      name: "contact",
    },
    {
      id: 5,
      link: "/signup",
      name: "register",
    },
    {
      id: 6,
      link: "/login",
      name: "login",
    },
    {
      id: 7,
      link: "/logout",
      name: "logout",
    },
  ];

  return (
    <div className="nav-wrapper">
      <div>
        <img src={mathreeLogo} alt="mathree-logo" className="nav-image" />
      </div>
        <ul className="nav-list">
          {links.map(({ id, name, link }) => (
            <li key={id} className="nav-items">
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="icon-options">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      
      {nav && (
        <ul className="nav-mobile">
          {links.map(({ id, name, link }) => (
            <li key={id} className="nav-mobile-items">
              <Link onClick={() => setNav(!nav)} to={link} onDurationChange={500}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

{
  /* <div>
        <div
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            width: "70%",
          }}
        >
          <div>
            <img
              src={mathreeLogo}
              alt="mathree-logo"
              style={{ height: "100px", width: "100px", marginleft: "8px" }}
            />

          </div>
          <Link to="/" exact="true" style={linkStyles}>
            Home
          </Link>
          <Link to="/about" exact="true" style={linkStyles}>
            About
          </Link>
          <Link to="/book" exact="true" style={linkStyles}>
            Book
          </Link>
          <Link to="/contact" exact="true" style={linkStyles}>
            Contact
          </Link>
          <Link to="/signup" exact="true" style={linkStyles}>
            Signup
          </Link>
          <Link to="/login" exact="true" style={linkStyles}>
            Login
          </Link>
          <Link to="/logout" exact="true" style={linkStyles}>
            Logout
          </Link>
        </div>
    </div> */
}
