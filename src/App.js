import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="counter">
      <div>
        <div>Step: {step}</div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div>
        <button className="btn" onClick={() => setCount(count - step)}>
          -
        </button>
        <input
          type="number"
          className="countbar"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={() => setCount(count + step)}>
          +
        </button>
      </div>

      <div className="date">
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{count >= 1 ? `${count} days from today is ` : ""}</span>
        <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
        <span>{date.toDateString()}</span>
      </div>

      <div>
        {count >= 1 || step > 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
