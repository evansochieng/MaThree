import React from 'react'
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const AdNavbar = () => {
    return (
        <div>
            <div className="nav-bar">
                <div className="menu-bar">
                    <Link to="/admin">
                        <FaBars />
                    </Link>
                </div>
                <div>
                    <p style={{color:"white", fontSize:"20px", paddingLeft:"20px"}}>Admin</p>
                </div>
            </div>
        </div>
    )
}

export default AdNavbar