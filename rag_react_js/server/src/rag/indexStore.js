import { cosineSimilarity } from "../utils/cosineSimilarity.js";

let index = [];

export function setIndex(items) {
  index = items;
}

export function getIndex() {
  return index;
}

export function searchIndex(queryVector, topK = 3) {
  return index
    .map((item) => ({
      ...item,
      score: cosineSimilarity(queryVector, item.vector),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ vector, ...rest }) => rest);
}
