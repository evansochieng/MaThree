import React, { useEffect } from 'react';

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

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello you!");
      return (
        <div
        style={{
          paddingTop: "150px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Payment complete. Thank you!
      </div>
      )
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}
    >
      Payment loading..........
    </div>
  );
}

export default Payment