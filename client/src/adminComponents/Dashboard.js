import React, { useState, useEffect } from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { FaReceipt } from 'react-icons/fa'

const Dashboard = () => {

  const [commuter, setCommuter] = useState([]);
  const [driver, setDriver] = useState([]);
  const [order, setOrder] = useState([]);


  useEffect(() => {
    fetch('/commuters').then((res) => res.json()).then((data) => { setCommuter(data) })
  }, [])
  useEffect(() => {
    fetch('/drivers').then((res) => res.json()).then((data) => { setDriver(data) })
  }, [])
  useEffect(() => {
    fetch('/orders').then((res) => res.json()).then((data) => { setOrder(data) })
  }, [])

  return (
    <div>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* <div className="col" >

            <div className="card h-100" style={{ backgroundColor: "#09184d" }} >

              <div >
                <span className="reacticons">
                  <BsPeopleFill />
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">0</h5>
                <p className="card-text">Total Commuters</p>
              </div>
            </div>
          </div> */}

          <div className="col">
            <div className="card h-100" style={{ backgroundColor: "#09184d" }}>

              <div >
                <span className="reacticons">
                  <BsPeopleFill />
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">{commuter.length}</h5>
                <p className="card-text">Total Commuters</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100" style={{ backgroundColor: "#09184d" }}>

              <div >
                <span className="reacticons">
                  <BsPeopleFill />
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">{driver.length}</h5>
                <p className="card-text">Total Drivers</p>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card h-100" style={{ backgroundColor: "#09184d" }}>

              <div >
                <span className="reacticons">
                  <FaReceipt />
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">{order.length}</h5>
                <p className="card-text">Total Orders </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard