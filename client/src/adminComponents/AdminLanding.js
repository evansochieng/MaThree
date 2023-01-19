import React from 'react'
import AdminRoute from './AdminRoute'
import AdNavbar from './AdNavbar'
import SideBar from './SideBar'

const AdminLanding = () => {
  return (
    <div>
      <div className='adminContainer'>
        <AdNavbar />
      </div>

      <div className='sidebar-container'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='admin-nav'>
          <AdminRoute />
        </div>
      </div>
    </div>
  )
}

export default AdminLanding