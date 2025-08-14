import React, { render, screen, fireEvent, waitFor } from "react";
import App from "./App";

beforeEach(() => {
  jest.resetAllMocks();
});

test("draw word success flow", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve("banana")
  });

  render(<App />);

  fireEvent.click(screen.getByText(/draw word/i));

  await waitFor(() => {
    expect(screen.getByText(/Drew: "banana"/i)).toBeInTheDocument();
  });
});
