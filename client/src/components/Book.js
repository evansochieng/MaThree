import React, { useState } from 'react'
import Info from './Form/Info'
import Payment from './Form/Payment'
import Summary from './Form/Summary'
import Stepper from './Stepper'
import StepperControl from './StepperControl'

function Book() {

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

{/* <>
      <div style={{ color: "white", paddingTop: "200px" }}>
        <caption>Book our comfortable buses for your trip to and from work</caption>
        <select name="routes" id="routes">
          <option value="Thika Road 1">Thika-UpperHill</option>
          <option value="Waiyaki Way 1">Kikuyu-UpperHill</option>
          <option value="Jogoo Road 1">Donholm-UpperHill</option>
          <option value="Mombasa Road 1">Kitengela-UpperHill</option>
          <option value="Ngong Road 1">Karen-Westlands</option>
        </select>
      </div>
    </> */}