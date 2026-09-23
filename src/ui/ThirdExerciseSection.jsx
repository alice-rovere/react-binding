import { useState } from "react";
export default function ThirdExerciseSection() {
  const [alignText, setAlignText] = useState("center");
  function handleAlignText(newAlign) {
    setAlignText(newAlign);
  }

  return (
    <div>
      <button
        className="btn btn-primary mb-3 "
        onClick={() => handleAlignText("-start")}
      >
        Text-align left
      </button>
      <button
        className="btn btn-secondary mb-3 ms-2"
        onClick={() => {
          handleAlignText("-center");
        }}
      >
        Text-align center
      </button>
      <button
        className="btn btn-success mb-3 ms-2"
        onClick={() => handleAlignText("-end")}
      >
        Text-align right
      </button>
      <p className={`text${alignText}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* non me lo prende perchè bootstrap ha messo !important al text center sui card!!!
      Non funzionava text right o left perchè bootstrap usa text-start e text-end!!!  */}
    </div>
  );
}
