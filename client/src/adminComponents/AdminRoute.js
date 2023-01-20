import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Commuter from './Commuter'
import CreateDriver from './CreateDriver'
import Dashboard from './Dashboard'
import Driver from './Driver'
import SideBar from './SideBar'

const AdminRoute = () => {

    const [driver, setDriver] = useState([]);

    useEffect(() => {
        fetch('/drivers').then((r) => r.json()).then(setDriver)
    }, [])


    function addDriver(newDriver) {
        const updateDriver = [...driver, newDriver];
        setDriver(updateDriver)
    }

    return (
        <div>
            {/* <SideBar /> */}
            <Routes>
                <Route path='/*' element={<Dashboard />} />
                <Route path='/commuter' element={<Commuter />} />
                <Route path='/driver' element={<Driver  />} />
                <Route path='/createDriver' element={<CreateDriver onAddDriver={addDriver} />} />
            </Routes>
        </div>
    )
}

export default AdminRoute