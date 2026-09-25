import { useState } from "react";
export default function QuindicesimoExerciseSection() {
  const [text, setText] = useState("");
  function handleTextLength() {
    if (text.length < 30) {
      return "troppo corto";
    }

    if (text.length > 100) {
      return "troppo lungo";
    }

    return "lunghezza perfetta";
  }

  return (
    <div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        name="appunti"
        id="appunti"
      ></textarea>
      <p>{handleTextLength()}</p>
    </div>
  );
}
