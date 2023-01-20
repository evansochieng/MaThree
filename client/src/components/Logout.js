// import React from "react";

// const Logout = () => {
//     return (
//         <div>
//             <button style={{marginTop: "200px"}}>Logout</button>
//         </div>
//     )
// }

// export default Logout;
import React from "react";
import { useNavigate } from "react-router-dom";
import { ImSad } from "react-icons/im";

function Logout({isLoggedIn}) {
  // Define navigate to assist go back to login on logout
  const navigate = useNavigate();

  //Log out user, redirect to login
  function logout() {
    navigate("/login");
    isLoggedIn(false);
  }

  // Return user to home
  function redirectHome() {
    navigate("/home");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        //backgroundColor: "white",
        //width: "400px",
      }}
    >
      <h3 style={{ color: "#fb923c" }}>We are sad to see you go</h3>
      <p>Are you sure you want to sign out?</p>
      <ImSad style={{ color: "#fcd34d", fontSize: "50px" }} />
      <button
        style={{
          width: "200px",
          height: "30px",
          backgroundColor: "#10b981",
          color: "white",
          borderRadius: "5px",
          borderColor: "none",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        onClick={logout}
      >
        YES, sign out
      </button>
      <button
        style={{
          width: "200px",
          height: "30px",
          borderRadius: "5px",
          borderColor: "none",
        }}
        onClick={redirectHome}
      >
        Cancel
      </button>
    </div>
  );
}

export default Logout;