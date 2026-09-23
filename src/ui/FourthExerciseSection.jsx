import { useState } from "react";
import welcomeMessages from "../data/welcomeMessages";
export default function FourthExerciseSection() {
  const [selectLanguage, setSelectLanguage] = useState("en");
  function handleSelectLanguage(lang) {
    setSelectLanguage(lang);
  }
  return (
    <div>
      {welcomeMessages.map((msg) => (
        <button
          key={msg.id}
          onClick={() => handleSelectLanguage(msg.lingua)}
          className={`btn ${msg.buttonClass}`}
        >
          {msg.label}
        </button>
      ))}

      <p>
        {welcomeMessages.find((msg) => msg.lingua === selectLanguage)?.message}
      </p>
    </div>
  );
}
