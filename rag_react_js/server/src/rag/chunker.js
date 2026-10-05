export function chunkText(text, chunkSize = 90, overlap = 20) {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks = [];

  let start = 0;

  while (start < words.length) {
    const end = Math.min(start + chunkSize, words.length);

    chunks.push(words.slice(start, end).join(" "));

    if (end === words.length) {
      break;
    }

    start = Math.max(0, end - overlap);
  }

  return chunks;
}
