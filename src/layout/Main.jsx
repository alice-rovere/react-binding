import { useState } from "react";

import FirstExerciseSection from "../ui/FirstExerciseSection";
import SecondExerciseSection from "../ui/SecondExerciseSection";
import ThirdExerciseSection from "../ui/ThirdExerciseSection";
import FourthExerciseSection from "../ui/FourthExerciseSection";
import FifthExerciseSection from "../ui/FifthExerciseSection";
import SestoExerciseSection from "../ui/SestoExerciseSection";
import SettimoExerciseSection from "../ui/SettimoExerciseSection";
import OttavoExerciseSection from "../ui/OttavoExerciseSection";
import NonoExerciseSection from "../ui/NonoExerciseSection";
import DecimoExerciseSection from "../ui/DecimoExerciseSection";
import UndicesimoExerciseSection from "../ui/UndicesimoExerciseSection";
import DodicesimoExerciseSection from "../ui/DodicesimoExerciseSection";
import TredicesimoExerciseSection from "../ui/TredicesimoExerciseSection";
import QuattordicesimoExerciseSection from "../ui/QuattordicesimoExerciseSection";
import QuindicesimoExerciseSection from "../ui/QuindicesimoExerciseSection";

import ExerciseCard from "../components/ExerciseCard";
import exercises from "../data/exercises";

const exerciseComponents = {
  "contatore-numerico": FirstExerciseSection,
  "alternatore-stile": SecondExerciseSection,
  "allineamento-paragrafo": ThirdExerciseSection,
  "messaggio-multilingue": FourthExerciseSection,
  "lista-attivita": FifthExerciseSection,
  "contatore-caratteri": SestoExerciseSection,
  "filtro-nomi": SettimoExerciseSection,
  "aggiorna-titolo": OttavoExerciseSection,
  "unisci-nome-cognome": NonoExerciseSection,
  "abilita-pulsante": DecimoExerciseSection,
  "applica-stile": UndicesimoExerciseSection,
  "ridimensiona-testo": DodicesimoExerciseSection,
  "convertitore-valuta": TredicesimoExerciseSection,
  "caratteri-rimanenti": QuattordicesimoExerciseSection,
  "avvisi-testo": QuindicesimoExerciseSection,
};

export default function Main() {
  const [expandedExerciseId, setExpandedExerciseId] = useState(null);

  function handleToggleExercise(exerciseId) {
    setExpandedExerciseId((currentExerciseId) =>
      currentExerciseId === exerciseId ? null : exerciseId,
    );
  }

  return (
    // 1. return di Main - restituisce jsx complessivo
    <div className="card-text">
      {exercises.map((exercise) => {
        const Exercise = exerciseComponents[exercise.id];

        return (
          // 2. return della callback map - restituisce un singolo ExerciseCard per ogni elemento array exercises
          <ExerciseCard
            key={exercise.id}
            {...exercise}
            isExpanded={expandedExerciseId === exercise.id}
            onToggle={() => handleToggleExercise(exercise.id)}
          >
            <Exercise />
          </ExerciseCard>
        );
      })}
    </div>
  );
}
