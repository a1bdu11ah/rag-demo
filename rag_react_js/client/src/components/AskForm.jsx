import { useState } from "react";

export default function AskForm({ onAsk, loading }) {
  const [question, setQuestion] = useState(
    "How are vectors used in a RAG system?"
  );

  function handleSubmit(event) {
    event.preventDefault();

    const cleaned = question.trim();
    if (!cleaned) return;

    onAsk(cleaned);
  }

  return (
    <form className="ask-card" onSubmit={handleSubmit}>
      <label htmlFor="question">Ask your documents</label>

      <div className="ask-row">
        <input
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask something..."
        />

        <button type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Ask RAG"}
        </button>
      </div>
    </form>
  );
}
