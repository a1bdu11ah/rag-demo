const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export async function askRag(question) {
  if (import.meta.env.PROD && !API_BASE) {
    throw new Error(
      "The backend is not configured. Set VITE_API_BASE_URL to your hosted backend URL and redeploy."
    );
  }
  const response = await fetch(`${API_BASE}/api/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  if (!response.headers.get("content-type")?.includes("application/json")) {
    throw new Error("The backend returned an unexpected response. Check the API URL.");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed.");
  }

  return data;
}
