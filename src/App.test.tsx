import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import InputCountry from "./Pages/InputCountry";
import { text } from "node:stream/consumers";
import NavigationBar from "./components/NavigationBar";
import Error from "./utility/Error";
import CountryDetailsCard from "./components/CountryDetailsCard";

test("render App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.debug();
});

describe("testing on NavigationBar component", () => {
  test("rendering HTML NavigationBar Component", () => {
    render(<NavigationBar />);
    screen.debug();
  })

  test(" test on existence of text", ()=> {
    render(<NavigationBar />);

    const Txtelement = screen.getByText(/Country/);
    expect(Txtelement).toBeInTheDocument(); 
  });

  test("testing on number of banners", () => {
    render(<NavigationBar />);
    const banner = screen.getAllByRole("banner");
    expect(banner.length).toBe(1);
  })
})

describe("test on InputCountryName", () => {
  test("rendering CountryInput componenet", () => {
    render(
      <BrowserRouter>
        <InputCountry></InputCountry>
      </BrowserRouter>
    );
    screen.debug();
  });

  test("rendering CountryInput PlaceHolder", () => {
    render(
      <BrowserRouter>
        <InputCountry></InputCountry>
      </BrowserRouter>
    );
  
    fireEvent.change(screen.getByPlaceholderText("Enter Country Name"), {
      target: { value: "India" },
    });
  });
  test("rendering CountryInput PlaceHolderText", () => {
    render(
      <BrowserRouter>
        <InputCountry></InputCountry>
      </BrowserRouter>
    );
  
   const placeholderText = screen.getByPlaceholderText("Enter Country Name");
   expect(placeholderText).toBeInTheDocument();
  });

  test("test for having a button", () => {
    render(
      <BrowserRouter>
        <InputCountry></InputCountry>
      </BrowserRouter>
    );

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  })

  test("test to find number of buttons", () => {
    render(
      <BrowserRouter>
      <InputCountry></InputCountry>
      </BrowserRouter>
    );
    const btnElement = screen.getAllByRole("button");
    expect(btnElement.length).toBe(1)
  });

  test("test to find total number of textbox element", () => {
    render(
      <BrowserRouter>
        <InputCountry></InputCountry>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("textbox");
    expect(elemet.length).toBe(1);
  });
})


describe("testing on Error Component", () => {
  test("rendering Error component", () => {
    render(
      <BrowserRouter>
      <Error></Error>
      </BrowserRouter>
    );

    screen.debug();
  })

  test("find the text inside the Error component", () => {
    render(
      <BrowserRouter>
      <Error></Error>
      </BrowserRouter>
    );

    const textElement = screen.getByText("Something went wrong...");
    expect(textElement).toBeInTheDocument();
  });

  test("test to find any button is exists", ()=> {
    render(
      <BrowserRouter>
      <Error></Error>
      </BrowserRouter>
    );
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
  });

  test("test for total number of buttons", () => {
    render(
      <BrowserRouter>
        <Error></Error>
      </BrowserRouter>
    );
    const btnelements = screen.getAllByRole("button");
    expect(btnelements.length).toBe(1);
  });
});

let dummyData = {
  name: { common: "india"},
  capital: "Delhi",
  population: "198453000",
}

describe("test on CountryDetailsCard", () => {
  test("rendering CountryDetailsCard with props", () => {
    render(
      <BrowserRouter>
      <CountryDetailsCard countryData={dummyData}></CountryDetailsCard>
      </BrowserRouter>
    );

    expect(screen.getByText(/198453000/)).toBeInTheDocument();
    expect(screen.getByText(/india/)).toBeInTheDocument();
    expect(screen.getByText(/Delhi/i)).toBeInTheDocument();
  })  
})






