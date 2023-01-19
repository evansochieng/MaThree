import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLanding from './AdminLanding'
import Commuter from './Commuter'
import Driver from './Driver'

const AdminRoute = () => {

    // const [driver, setDriver] = useState([]);

    // useEffect(() => {
    //     fetch('/drivers').then((r) => r.json()).then(setDriver)
    // }, [])


    // function addDriver(newDriver) {
    //     const updateDriver = [...driver, newDriver];
    //     setDriver(updateDriver)
    // }

    return (
        <div>
            <Routes>
                {/* <Route path='/admin' element={<AdminLanding />} /> */}
                {/* <Route path='/commuter' element={<Commuter />} /> */}
                {/* <Route path='/driver' element={<Driver onAddDriver={addDriver} />} /> */}
            </Routes>
        </div>
    )
}

export default AdminRoute