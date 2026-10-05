import { chunkText } from "./chunker.js";
import { embedText, getEmbedder } from "./embedder.js";
import { generateAnswer } from "./generator.js";
import { getIndex, searchIndex, setIndex } from "./indexStore.js";
import { loadDocuments } from "../utils/loadDocuments.js";

export async function initializeRag() {
  await getEmbedder();

  const documents = await loadDocuments();
  const records = [];

  for (const document of documents) {
    const chunks = chunkText(document.text);

    for (let chunkId = 0; chunkId < chunks.length; chunkId += 1) {
      const text = chunks[chunkId];
      const vector = await embedText(text);

      records.push({
        source: document.source,
        chunkId,
        text,
        vector,
      });
    }
  }

  setIndex(records);

  console.log(
    `Indexed ${records.length} chunks with ${
      records[0]?.vector?.length ?? 0
    }-dimensional vectors.`
  );
}

export async function askRag(question) {
  const queryVector = await embedText(question);
  const retrievedChunks = searchIndex(queryVector, 3);

  const answer = await generateAnswer(question, retrievedChunks);

  return {
    question,
    answer,
    vectorSize: queryVector.length,
    indexedChunks: getIndex().length,
    retrievedChunks,
  };
}
