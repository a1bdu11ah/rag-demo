export default function RetrievedChunks({ chunks }) {
  return (
    <section className="retrieval-section">
      <h2>Retrieved chunks</h2>

      <div className="chunk-list">
        {chunks.map((chunk, index) => (
          <article className="chunk-card" key={`${chunk.source}-${chunk.chunkId}`}>
            <div className="chunk-top">
              <span>#{index + 1}</span>
              <span>{chunk.source}</span>
              <span>score: {chunk.score.toFixed(3)}</span>
            </div>

            <p>{chunk.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
