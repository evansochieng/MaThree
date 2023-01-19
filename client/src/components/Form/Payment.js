import React, { useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

function Payment({ nextStep, values }) {
  // set state for changing display message
    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }, []);

    const nextPage = (e) => {
      e.preventDefault();
      nextStep();
      postOrder();
    };

    //create function to post order to the database
    const postOrder = () => {
      fetch("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.fullName,
          phone_number: values.mobileNumber,
          date: values.date,
          route: values.route,
          pickup_station: values.pickLocation,
          destination: values.dropLocation,
          fare: values.fare,
          return_trip: values.returnTrip ? values.returnTrip : "off",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    return show ? (
      <div
        style={{
          paddingTop: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          Payment complete. Thank you!
        </div>
        <div
          style={{
            color: "green",
            height: "100px",
            marginTop: "20px",
            fontSize: "50px",
          }}
        >
          <BsCheckCircle />
        </div>
  
        <button
          onClick={nextPage}
          style={{
            //width: "80px"
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#7b5bf2",
            margin: 'auto'
          }}
        >
          Continue
        </button>
      </div>
    ) : (
      <div
        style={{
          paddingTop: "120px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          Payment loading..........
        </div>
      </div>
    );
}

export default Payment