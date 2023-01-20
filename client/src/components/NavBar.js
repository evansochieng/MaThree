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
      link: "/home",
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
      link: "/orders",
      name: "rides"
    },
    {
      id: 5,
      link: "/contact",
      name: "contact",
    },
    // {
    //   id: 5,
    //   link: "/signup",
    //   name: "register",
    // },
    // {
    //   id: 6,
    //   link: "/login",
    //   name: "login",
    // },
    {
      id: 6,
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
              <Link style={{color:"#EBEBEB", textDecoration:"none"}} to={link}>{name}</Link>
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
