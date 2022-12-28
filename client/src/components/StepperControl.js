import React from 'react'

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className="controller">
      <button onClick={() => handleClick()} className={`bck-btn ${currentStep === 1 ? "bck-click" : ""}`}>
        Back
      </button>

      <button onClick={() => handleClick()} className="nxt-btn">
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
}

export default StepperControl