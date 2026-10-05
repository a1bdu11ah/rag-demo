const steps = [
  "Documents",
  "Chunks",
  "Vectors",
  "Question vector",
  "Similarity search",
  "Top chunks",
  "Generator",
  "Answer",
];

export default function FlowDiagram() {
  return (
    <section className="flow-card">
      <h2>What happens inside</h2>

      <div className="flow">
        {steps.map((step, index) => (
          <div className="flow-item" key={step}>
            <span className="step-number">{index + 1}</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
