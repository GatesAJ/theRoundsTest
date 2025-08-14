import React from "react";
import AddWordForm from "./components/AddWordForm";
import DrawWord from "./components/DrawWord";
import PreviewWord from "./components/PreviewWord";
import { Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Word Storage App
      </Typography>
      <AddWordForm />
      <DrawWord />
      <PreviewWord />
    </Container>
  );
}
