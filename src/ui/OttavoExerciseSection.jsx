import { useState } from "react";

export default function OttavoExerciseSection() {
  const [testo, setTesto] = useState("");

  return (
    <div>
      <h1 className="fs-2">{testo}</h1>
      <label className="form-label">Scrivi per modificare il titolo</label>
      <input
        onChange={(e) => setTesto(e.target.value)}
        value={testo}
        type="text"
        className="form-control"
      />
    </div>
  );
}
