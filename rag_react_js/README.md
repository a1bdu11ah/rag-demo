# React + JavaScript RAG Demo

A complete beginner-friendly RAG project using:

- React + Vite frontend
- Node.js + Express backend
- JavaScript only
- Local embedding model with Transformers.js
- Local text-generation model with Transformers.js
- Cosine similarity for vector search

No paid API key is required.

## How RAG works in this project

```text
Text files
   ↓
Chunking
   ↓
Embedding model
   ↓
Document vectors
   ↓
User question
   ↓
Question embedding
   ↓
Cosine similarity search
   ↓
Top matching chunks
   ↓
Generator model
   ↓
Final answer
```

## Project structure

```text
rag_react_js/
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── ragApi.js
│   │   ├── components/
│   │   │   ├── AskForm.jsx
│   │   │   ├── AnswerCard.jsx
│   │   │   ├── FlowDiagram.jsx
│   │   │   └── RetrievedChunks.jsx
│   │   ├── styles/
│   │   │   └── app.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── data/
│   │   ├── company_policy.txt
│   │   ├── people.txt
│   │   └── rag.txt
│   ├── src/
│   │   ├── rag/
│   │   │   ├── chunker.js
│   │   │   ├── embedder.js
│   │   │   ├── generator.js
│   │   │   ├── indexStore.js
│   │   │   └── ragService.js
│   │   ├── utils/
│   │   │   ├── cosineSimilarity.js
│   │   │   └── loadDocuments.js
│   │   └── server.js
│   └── package.json
└── README.md
```

## Requirements

- Node.js 18+

## Run the backend

```bash
cd server
npm install
npm run dev
```

The first startup downloads the local AI models, so it can take a little time.

Backend runs on:

```text
http://localhost:3001
```

## Run the React frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Then open the Vite URL shown in the terminal, normally:

```text
http://localhost:5173
```

## Try these questions

- What does Abdullah work on?
- What is RAG?
- How are vectors used in RAG?
- How many annual leave days do employees get?
- Can employees work remotely?

## Add your own data

Add `.txt` files inside:

```text
server/data/
```

Restart the backend so the vector index is rebuilt.

## Important

This is an educational demo. For a production system, you would usually use a proper vector database, persistent indexes, authentication, access controls, monitoring, and a stronger generation model.
