import React, { useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

function Payment({ nextStep }) {
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
    };

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