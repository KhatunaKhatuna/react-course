import { useState } from "react";
import "./DatecounterV2.css";

export default function DatecounterV2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              style={{ marginBottom: "15px" }}
              type="range"
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
            <p>Step: {step}</p>
          </div>

          <div>
            <button onClick={() => setCount((n) => n - step)} className="btn">
              -
            </button>
            <input
              style={{ height: " 30px", marginBottom: "15px" }}
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              onClick={() => setCount("")}
            />
            <button onClick={() => setCount((n) => n + step)} className="btn">
              +
            </button>
          </div>
          <p style={{ marginBottom: "15px", fontSize: "24px" }}>
            {count === 0 && "Today is"}
            {count > 0 && `${count} days from today is`}
            {count < 0 && `${Math.abs(count)} days ago was`}{" "}
            {date.toDateString()}
          </p>
          {(count !== 0 || step !== 1) && (
            <button
              style={{ padding: "10px", borderRadius: "7px" }}
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
