// import React, { useState } from "react";
import React, { Component } from "react";

import Info from "./Form/Info";
import Payment from "./Form/Payment";
import Summary from "./Form/Summary";
import Success from "./Form/Success";


export class Book extends Component {

  user = this.props

  state = {
    step: 1,
    fullName: "",
    date: "",
    mobileNumber: "",
    pickLocation: "",
    dropLocation: "",
    route: "",
    fare: "",
    returnTrip: "",
  };

  // Move to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle field changes
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    // if (e.target.type === "checkbox" && !e.target.checked) {
    //   this.setState({ [input]: "" });
    // } else {
    //   this.setState({ [input]: e.target.value });
    // }
  };

  //Try setting fare
  setFare = (routeFare) => {
    this.setState({ fare: routeFare})
  }

  render() {
    const { step } = this.state;
    const {
      fullName,
      mobileNumber,
      date,
      dropLocation,
      pickLocation,
      returnTrip,
      route,
      fare,
    } = this.state;
    const values = {
      fullName,
      mobileNumber,
      date,
      pickLocation,
      dropLocation,
      route,
      returnTrip,
      fare,
    };

    switch (step) {
      case 1:
        return (
          <Info
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            setFare={this.setFare}
            values={values}
            user={this.user}
          />
        );
      case 2:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Payment nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
      case 4:
        return <Success nextStep={this.nextStep} />;

      default:
        console.log("Check if I am working");
    }
  }
}

export default Book;