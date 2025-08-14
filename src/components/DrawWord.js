import React, { useState } from "react";
import { drawWord } from "../Api";
import StatusMessage from "./StatusMessage";
import { Button } from "@mui/material";

export default function DrawWord() {
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  async function handleDraw() {
    setLoading(true);
    setStatus({ message: "", type: "" });
    try {
      const word = await drawWord();
      setStatus({ message: `Drew: "${word}"`, type: "success" });
    } catch (err) {
      let msg = "Error drawing word.";
      if (err.status === 404) msg = "Pool is empty.";
      setStatus({ message: msg, type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Button variant="contained" onClick={handleDraw} disabled={loading}>
        Draw Word
      </Button>
      <StatusMessage message={status.message} type={status.type} />
    </div>
  );
}
