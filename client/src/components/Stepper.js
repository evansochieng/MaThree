import React, { useEffect, useState, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
          newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1 ? "step-wrapper" : "alt-wrapper"
        }
      >
        <div className="step-items">
          <div className={`dis-num ${step.selected ? "if-select" : ""}`}>
            {step.completed ? (
              <span className="unknown">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`dis-desc ${step.highlighted ? "des-co" : "des-co2"}`}
          >
            {step.description}
          </div>
        </div>
        <div className={`dis-line ${step.completed ? "line-co" : "line-co2"}`}>
          {/*Display line*/}
        </div>
      </div>
    );
  });

  return (
    <div className="stepper-container">
      <div className="step-layout">{displaySteps}</div>
    </div>
  );
};

export default Stepper;
