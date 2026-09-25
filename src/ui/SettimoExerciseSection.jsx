import { useState } from "react";

export default function SettimoExerciseSection() {
  const nomiLista = ["alice", "paolo", "tiziana", "lucia", "mariano"];
  const [input, setInput] = useState("");
  const filteredList = nomiLista.filter((nome) =>
    nome.includes(input.toLowerCase()),
  );
  return (
    <div>
      <label htmlFor="input" className="me-2">
        Scrivi qui
      </label>
      <input
        id="input"
        value={input}
        className="form-control mb-3"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <ul className="list-group">
        {filteredList.map((nome) => (
          <li className="list-group-item text-capitalize" key={nome}>
            {nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
