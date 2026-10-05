import { pipeline } from "@xenova/transformers";

let generator = null;

async function getGenerator() {
  if (!generator) {
    generator = await pipeline(
      "text2text-generation",
      "Xenova/flan-t5-small"
    );
  }

  return generator;
}

export async function generateAnswer(question, retrievedChunks) {
  const model = await getGenerator();

  const context = retrievedChunks
    .map(
      (item, index) =>
        `Context ${index + 1} (${item.source}): ${item.text}`
    )
    .join("\n\n");

  const prompt = `
Answer the question using only the context below.
If the answer is not available in the context, say:
"I don't know based on the provided documents."

${context}

Question: ${question}
Answer:
`.trim();

  const output = await model(prompt, {
    max_new_tokens: 120,
    do_sample: false,
  });

  return output[0].generated_text.trim();
}
