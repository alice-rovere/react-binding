import { useState } from "react";

export default function QuattordicesimoExerciseSection() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        name="appunti"
        id="appunti"
        maxLength={10}
      ></textarea>
      <p>{`Ti mancano ${10 - text.length} caratteri`}</p>
    </div>
  );
}
