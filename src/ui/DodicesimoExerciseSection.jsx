import { useState } from "react";

export default function DodicesimoExerciseSection() {
  const [text, setText] = useState("small");

  return (
    <div>
      <p
        className={`${text === "small" ? "fs-5" : ""} ${text === "medium" ? "fs-4" : ""} ${text === "big" ? "fs-3" : ""}`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid
        commodi doloremque corrupti at cum ab ipsam incidunt maiores illum
        repellat itaque beatae exercitationem, quo autem officia, aspernatur
        alias harum.
      </p>
      <input
        onChange={(e) => setText(e.target.value)}
        value="small"
        className="form-check-input"
        type="radio"
        name="text"
        id="smallText"
        checked={text === "small"}
      />
      <label className="form-check-label mx-2 " htmlFor="smallText">
        Small
      </label>
      <input
        onChange={(e) => setText(e.target.value)}
        value="medium"
        className="form-check-input"
        type="radio"
        name="text"
        id="mediumText"
        checked={text === "medium"}
      />
      <label className="form-check-label mx-2" htmlFor="mediumText">
        Medium
      </label>
      <input
        onChange={(e) => setText(e.target.value)}
        value="big"
        className="form-check-input"
        type="radio"
        name="text"
        id="bigText"
        checked={text === "big"}
      />

      <label className="form-check-label mx-2" htmlFor="bigText">
        Big
      </label>
    </div>
  );
}
