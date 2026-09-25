import { useState } from "react";

export default function NonoExerciseSection() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  return (
    <div>
      <label className="form-label" htmlFor="nome">
        Scrivi il tuo nome
      </label>
      <input
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        className="form-control text-capitalize"
        id="nome"
      ></input>
      <label className="form-label" htmlFor="cognome">
        Scrivi il tuo cognome
      </label>
      <input
        onChange={(e) => setCognome(e.target.value)}
        value={cognome}
        className="form-control text-capitalize"
        id="cognome"
      ></input>

      <p className="text-capitalize">
        Nome/Cognome: {nome} {cognome}
      </p>
    </div>
  );
}
