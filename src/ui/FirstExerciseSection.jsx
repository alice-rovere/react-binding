import { useState } from "react";
export default function FirstExerciseSection() {
  const [increment, setIncrement] = useState(0);
  function handleIncrement() {
    setIncrement(increment + 1);
  }
  function handleReset() {
    setIncrement(0);
  }
  return (
    <div>
      <p>{increment}</p>
      <button className="btn btn-primary mb-3" onClick={handleIncrement}>
        Aumenta il contatore
      </button>
      <button className="btn btn-secondary mb-3 ms-2" onClick={handleReset}>
        Resetta il contatore
      </button>
    </div>
  );
}
