import React, { useState, useEffect } from 'react'

const Orders = () => {

    //set state to store customer orders
    const [orders, setOrders] = useState([])

    // fetch orders
    useEffect(() => {
      fetch("/orders")
        .then((res) => res.json())
        .then((orderArr) => {
          setOrders(orderArr);
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
              Route : {order.route}
            </h5>
            <h5 className="card-title" id="tile">
              Pickup station: {order.pickup_station}
            </h5>
            <h5 className="card-title" id="tile">
              Destination: {order.destination}
            </h5>
            <h5 className="card-title" id="tile">
              Fare: {order.fare}
            </h5>
          </div>
        </div>
      </div>
    ));

  return (
    <div style={{ marginTop: "120px" }}>
      <div>Below are your previous orders</div>
      <div className="row">{myorders}</div>
    </div>
  );
}

export default Orders;