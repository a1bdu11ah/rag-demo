export default function AnswerCard({ result }) {
  return (
    <section className="answer-card">
      <div className="card-heading">
        <h2>Final answer</h2>
        <span className="pill">
          vector size: {result.vectorSize}
        </span>
      </div>

      <p>{result.answer}</p>

      <div className="meta-grid">
        <div>
          <strong>{result.indexedChunks}</strong>
          <span>indexed chunks</span>
        </div>

        <div>
          <strong>{result.retrievedChunks.length}</strong>
          <span>retrieved chunks</span>
        </div>
      </div>
    </section>
  );
}
