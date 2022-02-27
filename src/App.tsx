import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import InputCountry from "./Pages/InputCountry";
import CountryDetails from "./Pages/CountryDetails";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Link className="title" to="/">
        Country Details
      </Link>
      <Routes>
        <Route path="/" element={<InputCountry></InputCountry>}></Route>
        <Route
          path="/countryDetails"
          element={<CountryDetails></CountryDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
