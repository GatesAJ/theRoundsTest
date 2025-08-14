import React, { useState } from "react";
import { addWord } from "../Api";
import StatusMessage from "./StatusMessage";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: { display: "flex", gap: "0.5rem", marginBottom: "1rem" },
});

export default function AddWordForm() {
  const classes = useStyles();
  const [word, setWord] = useState("");
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ message: "", type: "" });
    setLoading(true);
    try {
      await addWord(word);
      setStatus({ message: `Added "${word}"`, type: "success" });
      setWord("");
    } catch (err) {
      let msg = "Error adding word.";
      console.log(err);
      if (err.status === 400) msg = "Invalid input.";
      if (err.status === 503) msg = "Pool is full.";
      if (err.status === 409) msg = "Word already exists.";
      if (err.status === 404) msg = "Word not found.";

      setStatus({ message: msg, type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Word"
        variant="outlined"
        size="small"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        disabled={loading}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading || !word.trim()}
      >
        Add
      </Button>
      <StatusMessage message={status.message} type={status.type} />
    </form>
  );
}
