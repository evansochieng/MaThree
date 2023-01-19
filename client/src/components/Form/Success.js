import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { TfiCommentsSmiley } from "react-icons/tfi";

const Success = () => {
  // create a state for changing what is to be displayed
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return show ? (
    <Navigate replace to="/home" />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "150px",
        fontSize: "30px",
        fontWeight: "bold",
      }}
    >
      We will call you when the matatu is ready!
      <TfiCommentsSmiley style={{ color: "#E3B426" }} />
    </div>
  );
}

export default Success;