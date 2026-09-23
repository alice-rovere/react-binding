import FirstExerciseSection from "../ui/FirstExerciseSection";
import SecondExerciseSection from "../ui/SecondExerciseSection";
import ThirdExerciseSection from "../ui/ThirdExerciseSection";
import FourthExerciseSection from "../ui/FourthExerciseSection";
import FifthExerciseSection from "../ui/FifthExerciseSection";
import ExerciseCard from "../components/ExerciseCard";
import exercises from "../data/exercises";

const exerciseComponents = {
  "contatore-numerico": FirstExerciseSection,
  "alternatore-stile": SecondExerciseSection,
  "allineamento-paragrafo": ThirdExerciseSection,
  "messaggio-multilingue": FourthExerciseSection,
  "lista-attivita": FifthExerciseSection,
};

export default function Main() {
  return (
    // 1. return di Main - restituisce jsx complessivo
    <div className="card-text">
      {exercises.map((exercise) => {
        const Exercise = exerciseComponents[exercise.id];

        return (
          // 2. return della callback map - restituisce un singolo ExerciseCard per ogni elemento array exercises
          <ExerciseCard key={exercise.id} {...exercise}>
            <Exercise />
          </ExerciseCard>
        );
      })}
    </div>
  );
}
