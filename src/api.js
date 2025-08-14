const API_URL = "https://words.boondoc.co/words";

export async function addWord(word) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain", Accept: "application/json" },
    body: word.trim(),
  });
  if (!res.ok) throw { status: res.status, message: await res.text() };
  return await res.json().catch(() => res.text());
}

export async function drawWord() {
  const res = await fetch(API_URL, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw { status: res.status, message: await res.text() };
  return await res.json().catch(() => res.text());
}

export async function previewWord() {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw { status: res.status, message: await res.text() };
  return await res.json().catch(() => res.text());
}
