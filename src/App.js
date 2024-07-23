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
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="number"
          className="countbar"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <div className="date">
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{count >= 1 ? `${count} days from today is ` : ""}</span>
        <span>{count < 0 ? `${Math.abs(count)} days ago was ` : ""}</span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
};

export default App;
