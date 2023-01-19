import React, { useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { TfiCommentsSmiley } from 'react-icons/tfi';

function Payment() {
  // define a timeout function
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     <div
  //       style={{
  //         paddingTop: "150px",
  //         display: "flex",
  //         justifyContent: "center",
  //       }}
  //     >
  //       Payment complete. Thank you!
  //     </div>;
  //     console.log("Hello you!")
  //   }, 10000);
  //   //return () => clearTimeout(timer);
  // }, []);

    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }, []);

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
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          We will call you when the matatu is ready!
          <TfiCommentsSmiley style={{ color: "#E3B426" }} />
        </div>
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