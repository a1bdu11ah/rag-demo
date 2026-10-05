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

## Deploy the frontend to Vercel

The repository-root `vercel.json` installs and builds `rag_react_js/client`
and serves its `dist` directory. Import this repository into Vercel and leave
the Root Directory at the repository root. The backend is deployed separately.

Before deploying, add the Vercel environment variable `VITE_API_BASE_URL` with
the public HTTPS origin of your backend, without a trailing `/api` path. For
example: `https://your-backend.example.com`. This value is included in the public
frontend bundle; never put secrets in it. Redeploy after changing the variable.

The existing backend runs local Transformers models and downloads model files.
It has not been validated as a Vercel Function. Host it on a Node.js server or
container with enough memory and writable model cache storage. It honors the
hosting provider's `PORT` environment variable. Check `/api/health` until its
status is `ready`, then test a question through `/api/ask`.

For local development, the Vite server proxies `/api` to `localhost:3001`.
No frontend environment variable is required locally. Dependencies, build
output, model cache files, and private environment files are excluded from Git.

## Production considerations

This is an educational demo. For a production system, you would usually use a proper vector database, persistent indexes, authentication, access controls, monitoring, and a stronger generation model.
