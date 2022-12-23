import React, { useState } from 'react'
import Info from './Form/Info'
import Payment from './Form/Payment'
import Summary from './Form/Summary'
import Stepper from './Stepper'
import StepperControl from './StepperControl'

function Book() {

  //define states for user details when making order
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [route, setRoute] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [returnTrip, setReturnTrip] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Personal Information",
    "Payment",
    "Complete"
  ]

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
  }

  return (
    <div className='book-container'>
      <div className='book-wrapper'>
        <div className='book-route'>
          <Stepper
            steps={steps}
            currentStep={currentStep}
          />
        </div>
        <StepperControl />
      </div> 
    </div>
  )
}

export default Book