import React, { useEffect, useState } from 'react'

function Info({ values, handleChange, nextStep, prevStep }) {
  // define state for routes
  const [routes, setRoutes] = useState([])
  const nextPage = e => {
    e.preventDefault();
    nextStep();
  }

  const previous = e => {
    e.preventDefault();
    prevStep();
  }

  // make a fetch request for routes
useEffect(() => {
    fetch("/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
  }, [])
  
  return (
    <div>
      <div>
        <h3 style={{ marginBottom: "8px" }}>Place an Order</h3>
        {/* <select
          name="routes"
          id="routes"
          style={{ width: "300px", height: "30px", marginBottom: "10px" }}
        >
          {routes.map((route) => {
            return (
              <option
                value={route.name}
                style={{ fontSize: "20px", alignItems: "center" }}
              >
                {route.from} &#8594; {route.to}
              </option>
            );
          })}
        </select> */}
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange('fullName')}
          defaultValue={values.fullName}
          style={{ width: "300px", height: "10px", marginTop: "5px" }}
        />
        <br />
        <label htmlFor="contact">Phone number:</label>
        <br />
        <input
          type="text"
          name="contact"
          onChange={handleChange('mobile')}
          defaultValue={values.mobile}
          style={{ width: "300px", height: "10px", marginTop: "5px" }}
        />
        <br />
        <label htmlFor="pickup">Route:</label>
        <br />
        <select
          name="routes"
          id="riutes"
          style={{ width: "300px", height: "30px", marginBottom: "10px" }}
        >
          {routes.map((route) => {
            return (
              <option
                value={route.name}
                style={{ fontSize: "20px", alignItems: "center" }}
              >
                {route.from} &#8594; {route.to}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="pickup">Pickup location:</label>
        <br />
        <input
          type="text"
          name="pickup"
          onChange={handleChange('pickLocation')}
          defaultValue={values.pickLocation}
          style={{ width: "300px", height: "10px", marginTop: "5px" }}
        />
        <br />
        <label htmlFor="pickup">Dropoff location:</label>
        <br />
        <input
          type="text"
          name="dropoff"
          onChange={handleChange('dropLocation')}
          defaultValue={values.dropLocation}
          style={{ width: "300px", height: "10px", marginTop: "5px" }}
        />
        <br />
        <label htmlFor="return-trip">Return Trip? </label>
        <br />
        <input
          type="checkbox"
          name="return-trip"
          style={{ marginTop: "5px" }}
        />
      </div>
      <button
      onClick={nextPage}>
        continue
      </button>
    </div>
  );
}

export default Info;