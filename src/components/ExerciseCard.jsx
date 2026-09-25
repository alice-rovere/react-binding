export default function ExerciseCard({
  id,
  titolo,
  descrizione,
  isExpanded,
  onToggle,
  children,
}) {
  const contentId = `exercise-content-${id}`;

  return (
    <div className="container card mb-3 w-50">
      <div className="d-flex align-items-center justify-content-between gap-3">
        <h2 className="card-title fs-4 display-6 mb-0">{titolo}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          aria-label={isExpanded ? `Riduci ${titolo}` : `Espandi ${titolo}`}
        >
          {isExpanded ? "Riduci" : "Espandi"}
        </button>
      </div>

      <div id={contentId} hidden={!isExpanded}>
        <p className="card-text">{descrizione}</p>
        {children}
      </div>
    </div>
  );
}
