import React from 'react';
import { useState } from 'react';

function Summary() {

  // add states for the order details
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [route, setRoute] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [returnTrip, setReturnTrip] = useState("");
  const [fare, setFare] = useState("");

  return (
    <div>
      <div>
        <h3>Trip Summary</h3>
        <label htmlFor="">
          Name: {name} {"name state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Phone number: {contact} {"phone number state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Route: {route} {"route state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Pickup location: {pickup} {"pickup state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Destination: {destination} {"destination state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Return Trip: {returnTrip} {"returnTrip state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Fare: Ksh. {fare} {"fare state to be rendered here"}
        </label>
        <br />
        <div style={{ marginTop: "10px" }}>
          <button
            style={{
              width: "80px",
              height: "10px",
              marginRight: "30px",
              textAlign: "center",
              font: "bold",
            }}
          >
            Pay
          </button>
          <button
            style={{
              width: "80px",
              height: "10px",
              textAlign: "center",
              font: "bold",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary
