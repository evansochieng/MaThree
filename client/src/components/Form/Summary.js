import React from 'react';
import { useState } from 'react';

//load card components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


function Summary({nextStep,prevStep}) {

  // add states for the order details
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [route, setRoute] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [returnTrip, setReturnTrip] = useState("");
  const [fare, setFare] = useState("");

  const nextPage = e => {
    e.preventDefault();
    nextStep();
  }

  const previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop :"120px",
      }}
    >
      <h4>Trip Summary</h4>
      <Card
        style={{
          width: 400,
          backgroundColor: "#000000",
        }}
      >
        <CardContent>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            <span style={{ float: "left" }}>Name:</span>
            <span style={{ float: "right" }}>Evans Ochieng</span>
          </div>
          <br />
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            <span style={{ float: "left" }}>Phone number:</span>
            <span style={{ float: "right" }}>+254 704 999 704</span>
          </div>
          <br />
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            <span style={{ float: "left" }}>Route:</span>
            <span style={{ float: "right" }}>Kikuyu &#8594; Upperhill</span>
          </div>
          <br />
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            <span style={{ float: "left" }}>Pickup Stage:</span>
            <span style={{ float: "right" }}>Kinoo 87</span>
          </div>
          <br />
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            <span style={{ float: "left" }}>Destination:</span>
            <span style={{ float: "right" }}>Kilimani Police Station</span>
          </div>
          <br />
          <div style={{ fontWeight: "bold" }}>
            <span style={{ float: "left" }}>Return Trip:</span>
            <span style={{ float: "right" }}>Yes</span>
          </div>
          <br />
          <div
            style={{
              backgroundColor: "#ee7a11",
              height: "50px",
              paddingTop: "15px",
              fontWeight: "bolder",
              marginBlockStart: "30px",
              textAlign: "center"
            }}
          >
            Fare: Ksh. 150
          </div>
          <br />
        </CardContent>
        <CardActions>
          {/* <div
            style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}
          >
            <button
              style={{
                width: "80px",
                height: "10px",
                marginRight: "200px",
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "#ee7a11",
                marginLeft: "10px",
              }}
            >
              Pay
            </button>
            <button
              style={{
                width: "80px",
                height: "10px",
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "#ee7a11",
                marginRight: "10px",
              }}
            >
              Cancel
            </button>
          </div> */}
        </CardActions>
      </Card>
      <div style={{ marginTop: "10px" }}>
        <button
        onClick={nextPage}
          style={{
            width: "80px",
            height: "10px",
            marginRight: "200px",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#ee7a11",
            marginLeft: "15px",
          }}
        >
          Pay
        </button>
        <button
        onClick={previous}
          style={{
            width: "80px",
            height: "10px",
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#ee7a11",
            marginRight: "10px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Summary
