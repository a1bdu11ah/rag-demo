import { useState } from "react";
import { askRag } from "./api/ragApi";
import AskForm from "./components/AskForm";
import AnswerCard from "./components/AnswerCard";
import RetrievedChunks from "./components/RetrievedChunks";
import FlowDiagram from "./components/FlowDiagram";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAsk(question) {
    try {
      setLoading(true);
      setError("");
      const data = await askRag(question);
      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="hero">
        <h1>Mini RAG Demo</h1>
        <p className="hero-copy">
          Ask a question and watch the system turn it into a vector, compare
          it with document vectors, retrieve the closest chunks, and generate
          an answer.
        </p>
      </section>

      <FlowDiagram />

      <AskForm onAsk={handleAsk} loading={loading} />

      {error && <div className="error-box">{error}</div>}

      {result && (
        <>
          <AnswerCard result={result} />
          <RetrievedChunks chunks={result.retrievedChunks} />
        </>
      )}
    </main>
  );
}
