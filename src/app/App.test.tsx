import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./App";

describe("App", () => {
  test("should render", () => {
    render(<App />);
    expect(screen.getByText('Vite Template')).toBeInTheDocument()
  });
});
