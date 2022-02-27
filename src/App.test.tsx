import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import InputCountry from "./Pages/InputCountry";

test("render App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.debug();
});

test("rendering CountryInput componenet", () => {
  render(
    <BrowserRouter>
      <InputCountry></InputCountry>
    </BrowserRouter>
  );
  screen.debug();
});

test("rendering CountryInput component", () => {
  render(
    <BrowserRouter>
      <InputCountry></InputCountry>
    </BrowserRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Enter Country name"), {
    target: { value: "India" },
  });
});

test("rendering CountryInput component", () => {
  const a = render(
    <BrowserRouter>
      <InputCountry></InputCountry>
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText("Enter Country name"), {
    target: { value: "I" },
  });
  expect(screen.getByPlaceholderText("Enter Country name")).toBeCalledTimes(1);
  expect(a).toMatchSnapshot();
});
