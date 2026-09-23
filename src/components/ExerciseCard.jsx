export default function ExerciseCard({ titolo, descrizione, children }) {
  return (
    <div className="container card mb-3 w-50">
      <h2 className="card-title">{titolo}</h2>
      <p className="card-text">{descrizione}</p>
      {children}
    </div>
  );
}