 import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "..";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home Component", () => {

  test("should render heading", () => {
    render(<MockHome />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
  });

  test("should render search button", () => {
    render(<MockHome />);

    const button = screen.getByTestId("btn");
    expect(button).toBeInTheDocument();
  });

  test("should render social media images", () => {
    render(<MockHome />);

    const images = screen.getAllByTestId("images");
    expect(images.length).toBeGreaterThan(0);
  });

});