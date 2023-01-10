// import React, { useState } from "react";
import Info from "./Form/Info";
import Payment from "./Form/Payment";
import Summary from "./Form/Summary";
// import Stepper from "./Stepper";
// import {StepperContext} from "./context/StepperContext"
// import StepperControl from "./StepperControl";

// function Book() {

//   //define states for user details when making order
//   const [name, setName] = useState("");
//   const [contact, setContact] = useState("");
//   const [route, setRoute] = useState("");
//   const [pickup, setPickup] = useState("");
//   const [dropoff, setDropoff] = useState("");
//   const [returnTrip, setReturnTrip] = useState("");

//   const [currentStep, setCurrentStep] = useState(1);
//   const [userData, setUserData] = useState('');
//   const [finalData, setFinalData] = useState([]);

//   const steps = ["Personal Details", "Summary", "Payment"];

//   const displaystep = (step) => {
//     switch (step) {
//       case 1:
//         return <Info />;
//       case 2:
//         return <Payment />;
//       case 3:
//         return <Summary />;
//       default:
//     }
//   };

//   const handleClick = (direction) => {
//     let newStep = currentStep;

//     direction === "next" ? newStep++ : newStep--;
//     newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
//   };

//   return (
//     <div className="book-container">
//       <div className="book-wrapper">
//         <div className="book-route">
//           <Stepper steps={steps} currentStep={currentStep} />

//           {/*Display Components */}
//           <div className="context">
//             <StepperContext.Provider value={{
//               userData,
//               setUserData,
//               finalData,
//               setFinalData
//             }}>
//               {displaystep(currentStep)}
//             </StepperContext.Provider>
//           </div>
//         </div>
//         <StepperControl
//           handleClick={handleClick}
//           currentStep={currentStep}
//           steps={steps}
//         />
//       </div>
//     </div>
//   );
// }

// export default Book


import React, { Component } from "react";
import Success from "./Form/Success";


export class Book extends Component {

  state = {
    step: 1,
    fullName: '',
    mobileNo: '',
    pickLocation: '',
    dropLocation: '',
  }

  // Move to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  // Go back to step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  // Handle fiels changes
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, homeAddress, pickTime, city } = this.state;
    const values = { firstName, lastName, homeAddress, pickTime, city };

    switch (step) {
      case 1:
        return (
          <Info
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
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
        return (
          <Payment
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return
        (<Success />);

        default : (console.log("Check if I am working"))


    }
  }

}

export default Book;