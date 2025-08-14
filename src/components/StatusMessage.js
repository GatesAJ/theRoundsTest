import React from "react";

export default function StatusMessage({ message, type }) {
  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        color: type === "error" ? "red" : "green",
        marginTop: "0.5rem"
      }}
    >
      {message}
    </div>
  );
}
