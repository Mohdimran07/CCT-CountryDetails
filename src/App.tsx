import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import InputCountry from "./Pages/InputCountry";
import CountryDetails from "./Pages/CountryDetails";
import NotFound from "./Pages/NotFound";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<InputCountry></InputCountry>}></Route>
        <Route
          path="/:name"
          element={<CountryDetails></CountryDetails>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
