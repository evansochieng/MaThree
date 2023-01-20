import React, { useEffect, useState } from 'react'

function Info({ values, handleChange, nextStep, setFare, user }) {
  // define state for routes
  const [routes, setRoutes] = useState([])
  const nextPage = e => {
    e.preventDefault();
    nextStep();
    //////
    // Set the fare here
    const curRoute = routes.filter((route) => route.name === values.route);
    setFare(curRoute[0].fare);

    // Try grabbing current user
    console.log(user.currentCommuter.name)
    console.log(values.returnTrip)
    //////////prevStep
  }


  // make a fetch request for routes
  useEffect(() => {
    fetch("/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
  }, [])

  return (
    <div>
      <div className="container">
        <div className="info-wrapper">
          <div>
            <h3
              style={{
                marginBottom: "8px",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              Place an Order
            </h3>
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
              onChange={handleChange("fullName")}
              // defaultValue={values.fullName}
              value={values.fullName}
              style={{ width: "350px", height: "10px", marginTop: "5px" }}
            />
            <br />
            <label htmlFor="contact">Phone number:</label>
            <br />
            <input
              type="text"
              name="contact"
              placeholder="Enter phone number in the format: 254...."
              onChange={handleChange("mobileNumber")}
              // defaultValue={values.mobileNumber}
              value={values.mobileNumber}
              style={{ width: "350px", height: "10px", marginTop: "5px" }}
            />
            <br />
            <label htmlFor="date">Travel Date:</label>
            <br />
            <input
              type="date"
              name="date"
              onChange={handleChange("date")}
              value={values.date}
              style={{ width: "350px", height: "10px", marginTop: "5px" }}
            />
            <br />
            <label htmlFor="pickup">Route:</label>
            <br />
            <select
              name="routes"
              id="routes"
              value={values.route}
              onChange={handleChange("route")}
              style={{ width: "350px", height: "30px", marginBottom: "10px" }}
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
              onChange={handleChange("pickLocation")}
              value={values.pickLocation}
              // defaultValue={values.pickLocation}
              style={{ width: "350px", height: "10px", marginTop: "5px" }}
            />
            <br />
            <label htmlFor="pickup">Dropoff location:</label>
            <br />
            <input
              type="text"
              name="dropoff"
              onChange={handleChange("dropLocation")}
              value={values.dropLocation}
              // defaultValue={values.dropLocation}
              style={{ width: "350px", height: "10px", marginTop: "5px" }}
            />
            <br />
            <label htmlFor="return-trip">Return Trip? </label>
            <br />
            <input
              type="checkbox"
              name="return-trip"
              checked={values.returnTrip}
              onChange={handleChange("returnTrip")}
              style={{ marginTop: "5px" }}
            />
          </div>
          <div className="info-btn">
            <button onClick={nextPage}>continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;