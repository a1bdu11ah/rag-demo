import express from "express";
import cors from "cors";
import { initializeRag, askRag } from "./rag/ragService.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let ready = false;
let startupError = null;

app.get("/api/health", (req, res) => {
  if (startupError) {
    return res.status(500).json({
      status: "error",
      error: startupError.message,
    });
  }

  res.json({
    status: ready ? "ready" : "loading-models",
  });
});

app.post("/api/ask", async (req, res) => {
  try {
    if (!ready) {
      return res.status(503).json({
        error:
          "The local AI models are still loading. Wait a moment and try again.",
      });
    }

    const question = req.body?.question?.trim();

    if (!question) {
      return res.status(400).json({
        error: "Question is required.",
      });
    }

    const result = await askRag(question);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message || "Internal server error.",
    });
  }
});

app.listen(PORT, async () => {
  console.log(`RAG server running at http://localhost:${PORT}`);
  console.log("Loading models and building vector index...");

  try {
    await initializeRag();
    ready = true;
    console.log("RAG system is ready.");
  } catch (error) {
    startupError = error;
    console.error("Failed to initialize RAG system:", error);
  }
});
