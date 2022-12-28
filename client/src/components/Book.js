import React, { useState } from "react";
import Info from "./Form/Info";
import Payment from "./Form/Payment";
import Summary from "./Form/Summary";
import Stepper from "./Stepper";
import {StepperContext} from "./context/StepperContext"
import StepperControl from "./StepperControl";

function Book() {

  //define states for user details when making order
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [route, setRoute] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [returnTrip, setReturnTrip] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = ["Personal Details", "Summary", "Payment"];

  const displaystep = (step) => {
    switch (step) {
      case 1:
        return <Info />;
      case 2:
        return <Payment />;
      case 3:
        return <Summary />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="book-container">
      <div className="book-wrapper">
        <div className="book-route">
          <Stepper steps={steps} currentStep={currentStep} />

          {/*Display Components */}
          <div className="context">
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }}>
              {displaystep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
}

export default Book
