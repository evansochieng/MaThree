import React, { useState, useEffect } from 'react'

const Orders = ({ currentCommuter }) => {

    //set state to store customer orders
    const [orders, setOrders] = useState([])

    // fetch orders
    useEffect(() => {
      fetch(`/rides/${currentCommuter.name}`)
        .then((res) => res.json())
        .then((orderArr) => {
          setOrders(orderArr);
          console.log(orders)
          console.log(orderArr)
        })
        .catch((error) => {
          console.error("console error:", error);
          console.log("Error!");
        });
    }, []);

    const myorders = orders.map((order) => (
      <div key={order.id} className="col-sm">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title" id="title">
              {order.name}
            </h4>
            <h5 className="card-title" id="title">
              Date : {order.date}
            </h5>
            {/* <h5 className="card-title" id="title">
              Route : {order.route}
            </h5> */}
            <h5 className="card-title" id="tile">
              Pickup station: {order.pickup_station}
            </h5>
            <h5 className="card-title" id="tile">
              Destination: {order.destination}
            </h5>
            <h5 className="card-title" id="tile">
              Return Trip: {order.return_trip}
            </h5>
            <h5 className="card-title" id="tile">
              Fare: {order.fare}
            </h5>
          </div>
        </div>
      </div>
    ));

  return (
    <div
      style={{
        marginTop: "120px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "40px" }}>My Rides</div>
      {orders.length === 0 ? (
        <div style={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>You have no rides yet!</div>
      ) : (
        <div className="row">{myorders}</div>
      )}
    </div>
  );
}

export default Orders;