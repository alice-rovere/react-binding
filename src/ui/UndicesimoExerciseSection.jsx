import { useState } from "react";
export default function UndicesimoExerciseSection() {
  const [grassetto, setGrassetto] = useState(false);
  const [corsivo, setCorsivo] = useState(false);
  const [sottolineato, setSottolineato] = useState(false);
  const [evidenziato, setEvidenziato] = useState(false);

  return (
    <div>
      <p
        className={`${grassetto === true ? "fw-bold" : ""} ${corsivo === true ? "fst-italic" : ""} ${evidenziato === true ? "bg-warning text-dark px-1" : ""} ${sottolineato === true ? "text-decoration-underline" : ""}`}
      >
        Testo da modificare
      </p>
      <input
        onChange={() => setGrassetto(!grassetto)}
        value={grassetto}
        type="checkbox"
        name="grassetto"
        id="grassetto"
      ></input>
      <label id="grassetto ">grassetto</label>
      <input
        onChange={() => setCorsivo(!corsivo)}
        value={corsivo}
        type="checkbox"
        name="corsivo"
        id="corsivo"
      />
      <label id="corsivo">corsivo</label>
      <input
        onChange={() => setSottolineato(!sottolineato)}
        value={sottolineato}
        type="checkbox"
        name="sottolineato"
        id="sottolineato"
      />
      <label id="sottolineato">sottolineato</label>
      <input
        onChange={() => setEvidenziato(!evidenziato)}
        value={evidenziato}
        type="checkbox"
        name="evidenziato"
        id="evidenziato"
      />
      <label id="evidenziato">evidenziato</label>
    </div>
  );
}
