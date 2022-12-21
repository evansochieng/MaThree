import React from "react";
import mathreeLogo from "../mathreelogo.png";


const Home = () => {

    return (
        <div name='home' className="home-cover">
            <div className="home-layout">
                <div className="home-container">
                    <h2 className="home-title">Mathree</h2>

                    <p className="home-text">Mathree is a web application that allows users to order rides to from there location of residence to place of work with ease. Users can choose from a variety of options to either take it one way or two-way by their convinience. Mathree also allows users to print a hard copy of the receipt for proof of payment.</p>
                </div>
                <div>
                    <img src={mathreeLogo} alt='mathree-logo' className="heroImage"/>
                </div>
            </div>
        </div>
    )

}

export default Home;