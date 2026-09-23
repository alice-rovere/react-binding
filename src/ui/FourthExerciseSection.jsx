import { useState } from "react";
import welcomeMessages from "../data/welcomeMessages";
export default function FourthExerciseSection() {
  const [selectLanguage, setSelectLanguage] = useState("en");
  function handleSelectLanguage(lang) {
    setSelectLanguage(lang);
  }
  return (
    <div>
      <button
        onClick={() => handleSelectLanguage("en")}
        className="btn btn-outline-primary"
      >
        English
      </button>
      <button
        onClick={() => handleSelectLanguage("es")}
        className="btn btn-outline-secondary"
      >
        Español
      </button>
      <button
        onClick={() => handleSelectLanguage("fr")}
        className="btn btn-outline-info"
      >
        Français
      </button>
      <button
        onClick={() => handleSelectLanguage("de")}
        className="btn btn-outline-warning"
      >
        Deutsch
      </button>
      <button
        onClick={() => handleSelectLanguage("it")}
        className="btn btn-outline-dark"
      >
        Italiano
      </button>

      <p>
        {welcomeMessages.find((msg) => msg.lingua === selectLanguage)?.message}
      </p>
    </div>
  );
}
