import { useState } from "react";

export default function TredicesimoExerciseSection() {
  const [valuta, setValuta] = useState("12 euro");

  return (
    <div>
      <p>
        Questo prodotto costa
        <span> {valuta}</span>
      </p>
      <select
        onChange={(e) => setValuta(e.target.value)}
        name="valuta"
        id="valuta"
      >
        <option value="12 euro">Euro</option>
        <option value="13,68 USD">USD</option>
        <option value="10,32 GBP">GBP</option>
      </select>
    </div>
  );
}
// 1 euro = 1.14 usd; 1 euro = 0.86 gbp
