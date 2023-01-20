import React from "react";
import { useState, useEffect } from "react"
import mathreeLogo from "../mathreelogo.png";
import Added from "./Added";
import Cards from "./Cards";

const Home = ( {currentCommuter} ) => {

    const [routes, setRoutes] = useState([])

    useEffect(() => {
        fetch("/routes")
            .then((res) => res.json())
            .then((data) => setRoutes(data))
    }, [])




    return (
      <div name="home" className="home-cover">
        <div className="home-layout">
          <div className="home-container">
            <h2 className="home-title">Mathree</h2>

            <p className="home-text">
              Mathree is a web application that allows users to order rides to
              and from their location of residence to place of work with ease.
              Users can choose from a variety of options to either take it one
              way or two-way by their convinience. Mathree also allows users to
              print a hard copy of the receipt for proof of payment.
            </p>
          </div>
        
          <div>
            <img src={mathreeLogo} alt="mathree-logo" className="heroImage" />
          </div>
        </div>
      
        <hr />
       
        <div>
          {console.log(currentCommuter)}
          {/* <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> */}
          
          
        
        </div>
        {/* <div>
            {routes.map((route, id) => (
              <Cards {...route} key={id} />
            ))}
          </div> */}
      </div>
    );
}

export default Home;