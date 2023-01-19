import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLanding from './AdminLanding'
import Commuter from './Commuter'
import Driver from './Driver'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<AdminLanding />} />
                <Route path='/commuters' element={<Commuter />} />
                <Route path='/drivera' element={<Driver />} />
            </Routes>
        </div>
    )
}

export default AdminRoute