const API_URL = "https://words.boondoc.co/words";

async function handleResponse(res) {
  const contentType = res.headers.get("content-type");
  const data = contentType && contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    throw { status: res.status, message: data };
  }
  return data;
}

export async function addWord(word) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain", Accept: "application/json" },
    body: word.trim(),
  });
  return handleResponse(res);
}

export async function drawWord() {
  const res = await fetch(API_URL, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  return handleResponse(res);
}

export async function previewWord() {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  return handleResponse(res);
}
