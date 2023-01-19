import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLanding from './AdminLanding'
import Commuter from './Commuter'
import Driver from './Driver'

const AdminRoute = () => {

    const [driver, setDriver] = useState([]);

    useEffect(() => {
        fetch('/drivers').then((r) => r.json).then(setDriver)
    })


    function addDriver(newDriver) {
        const updateDriver = [...driver, newDriver];
        setDriver(updateDriver)
    }

    return (
        <div>
            <Routes>
                <Route path='/*' element={<AdminLanding />} />
                <Route path='/commuters' element={<Commuter />} />
                <Route path='/drivera' element={<Driver onAddDriver={addDriver} />} />
            </Routes>
        </div>
    )
}

export default AdminRoute