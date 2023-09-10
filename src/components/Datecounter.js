import { useState } from "react";
import "./Datecounter.css";
export default function Datecounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(); //if you need to start with other date const date = new Date("june 21 2027")
  date.setDate(date.getDate() + count);

  // function handleStepIncrease() {
  //   setStep((stepincrease) => stepincrease + 1);
  // }
  // function handleStepDecrease() {
  //   setStep((stepdecrease) => stepdecrease - 1);
  // }

  function handleCountIncrease() {
    setCount((countincrease) => countincrease + step);
  }
  function handleCountDecrease() {
    setCount((countdecrease) => countdecrease - step);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="step">
          <button
            onClick={() => setStep((stepdecrease) => stepdecrease - 1)}
            className="btn"
          >
            -
          </button>
          <p>Step: {step}</p>
          <button
            onClick={() => setStep((stepincrease) => stepincrease + 1)}
            className="btn"
          >
            +
          </button>
        </div>
        <div className="count">
          <button onClick={handleCountDecrease} className="btn">
            -
          </button>
          <p>Count: {count}</p>
          <button onClick={handleCountIncrease} className="btn">
            +
          </button>
        </div>
        <p>
          {count === 0 && "Today is"}
          {count > 0 && `${count} days from today is`}
          {count < 0 && `${Math.abs(count)} days ago was`} {date.toDateString()}
        </p>
      </div>
    </div>
  );
}
