import React from 'react'

function Summary() {
  return (
    <div>
      <div>
        <h3>Trip Summary</h3>
        <label htmlFor="">
          Name: Evans Ochieng {"name state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Phone number: 0704999704 {"phone number state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Route: Kikuyu &#8594; UpperHill {"route state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Pickup location: Kinoo 87 {"pickup state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Destination: Kilimani {"destination state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Return Trip: Yes {"returnTrip state to be rendered here"}
        </label>
        <br />
        <label htmlFor="">
          Fare: Ksh. 150 {"fare state to be rendered here"}
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
