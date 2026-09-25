import { useState } from "react";
export default function DecimoExerciseSection() {
  const [haCliccato, setHaCliccato] = useState(false);

  return (
    <div>
      <label>Vuoi vedere altro ?</label>
      <input
        value={haCliccato}
        checked={haCliccato === true}
        type="checkbox"
        onChange={() => setHaCliccato(!haCliccato)}
      ></input>
      <p className={haCliccato === true ? "" : "d-none"}>
        Hai cliccato che vuoi vedere altro !
      </p>
    </div>
  );
}

// NON CI CREDOOOO FUNZIONAAAAA BRAVA MEEEEE
