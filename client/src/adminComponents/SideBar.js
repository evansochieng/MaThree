import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { FaThLarge } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const data = [
        {
            id: 1,
            link: "/admin/*",
            title: "Dashboard",
            icon: <FaThLarge />
        },
        {
            id: 2,
            link: "/admin/commuter",
            title: "Commuters",
            icon: <BsPersonFill />
        },
        {
            id: 3,
            link: "/admin/driver",
            title: "Drivers",
            icon: <BsPersonFill />
        },

        {
            id: 4,
            link: "/admin/createDriver",
            title: "Add Driver",
            icon: <BsFillPersonPlusFill />
        },

        {
            id: 5,
            link: "/login",
            title: "Logout",
            icon: <MdLogout />
        },
    ]

    return (
        <div>
            <div className='sidebar-list'>
                {data.map(({ id, title, link, icon }) => (
                    <li key={id}>
                        <Link to={link} className='row'>
                            <div className='icons'>{icon}</div>
                            <div className='title'>{title}</div>

                        </Link>
                    </li>

                ))}

            </div>
        </div>
    )
}

export default SideBar