import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDirectory = path.resolve(__dirname, "../../data");

export async function loadDocuments() {
  const fileNames = await fs.readdir(dataDirectory);

  const textFiles = fileNames.filter((name) => name.endsWith(".txt"));

  const documents = [];

  for (const fileName of textFiles) {
    const fullPath = path.join(dataDirectory, fileName);
    const text = await fs.readFile(fullPath, "utf8");

    documents.push({
      source: fileName,
      text,
    });
  }

  return documents;
}
