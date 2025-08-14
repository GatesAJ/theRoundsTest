import React, { useState } from "react";
import { previewWord } from "../Api";
import StatusMessage from "./StatusMessage";
import { Button } from "@mui/material";

export default function PreviewWord() {
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  async function handlePreview() {
    setLoading(true);
    setStatus({ message: "", type: "" });
    try {
      const word = await previewWord();
      setStatus({ message: `Preview: "${word}"`, type: "success" });
    } catch (err) {
      let msg = "Error previewing word.";
      if (err.status === 404) msg = "Pool is empty.";
      setStatus({ message: msg, type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Button variant="outlined" onClick={handlePreview} disabled={loading}>
        Preview Word
      </Button>
      <StatusMessage message={status.message} type={status.type} />
    </div>
  );
}
