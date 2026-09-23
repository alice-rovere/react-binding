import { useState } from "react";

export default function SecondExerciseSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  function handleIsSuccess() {
    setIsSuccess(!isSuccess);
  }

  return (
    <div>
      <button
        className={`btn btn-primary mb-3 ${isSuccess ? "btn-success" : "btn-primary"}`}
        onClick={handleIsSuccess}
      >
        Click me to see the color change
      </button>
    </div>
  );
}
