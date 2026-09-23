import { useState } from "react";
import activitiesList from "../data/activitiesList";
export default function FifthExerciseSection() {
  const [activities, setActivities] = useState(activitiesList);

  function toggleCompleted(id) {
    setActivities((prevActivities) =>
      prevActivities.map((act) =>
        act.id === id ? { ...act, status: !act.status } : act,
      ),
    );
  }
  return (
    <div>
      {activities.map((act) => (
        <div key={act.id} onClick={() => toggleCompleted(act.id)}>
          <h4>{act.title}</h4>
          <p className={act.status ? "text-decoration-line-through" : ""}>
            {act.description}
          </p>
        </div>
      ))}
    </div>
  );
}
