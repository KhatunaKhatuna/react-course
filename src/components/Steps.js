import { useState } from "react";
import "./Steps.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function Steps() {
  return (
    <div>
      <OneSteps />
      <OneSteps />
    </div>
  );
}
function OneSteps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((curentStep) => curentStep - 1);
    }
  }
  function handleNext() {
    if (step < 3) setStep((curentStep) => curentStep + 1);
  }
  function handleClose() {
    setIsOpen((isopen) => !isopen);
  }
  return (
    <div className="container">
      <button onClick={handleClose} className="close">
        <span>&times;</span>
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ background: "#7950f2", color: "fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ background: "#7950f2", color: "fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
