import React, { useState } from "react";

const API_BASE = "https://words.boondoc.co/words";

async function apiRequest(method, endpoint = "", body = null) {
  const options = {
    method,
    headers: { Accept: "text/plain" },
  };
  if (body) {
    options.headers["Content-Type"] = "text/plain";
    options.body = body;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, options);
  const text = await res.text();

  if (!res.ok) {
    const err = new Error(text || res.statusText);
    err.status = res.status;
    throw err;
  }
  return text;
}

export default function WordApp() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAdd = async () => {
    if (!input.trim()) {
      setError("Please enter a word.");
      return;
    }
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const result = await apiRequest("POST", "", input.trim());
      setMessage(`Added: ${result}`);
      setInput("");
    } catch (err) {
      handleHttpError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDraw = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const word = await apiRequest("DELETE");
      setMessage(`Drew: ${word}`);
    } catch (err) {
      handleHttpError(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const word = await apiRequest("GET");
      setMessage(`Preview: ${word}`);
    } catch (err) {
      handleHttpError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleHttpError = (err) => {
    switch (err.status) {
      case 400:
        setError("Invalid word: empty, too long, or more than one word.");
        break;
      case 404:
        setError("Pool is empty.");
        break;
      case 503:
        setError("Pool is full.");
        break;
      default:
        setError(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 400, margin: "2rem auto" }}>
      <h1>Word Storage</h1>

      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter a word"
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button onClick={handleAdd} disabled={loading}>
          Add Word
        </button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleDraw} disabled={loading}>
          Draw Word
        </button>
        <button onClick={handlePreview} disabled={loading}>
          Preview Word
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
