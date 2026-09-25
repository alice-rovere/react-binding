import { useState } from "react";
export default function SestoExerciseSection() {
  const [input, setInput] = useState("");

  return (
    <div>
      <label htmlFor="inputText" className="form-checked-label">
        Inserisci il testo
      </label>
      <input
        id="inputText"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div>
        <p>Hai inserito {input.length} caratteri.</p>
      </div>
    </div>
  );
}
