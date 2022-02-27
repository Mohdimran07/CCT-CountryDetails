import React, {  useState } from "react";
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const CountryDetails = () => {
  const localState: any = useLocation().state;
   const navigate = useNavigate();
  //   console.log(localState);

  const [apiTriger, setApiTriger] = useState<boolean>(false);
  const [capitalName, setCapitalName] = useState<string>("");
  const url =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const { data, isLoading, error } = useFetchApi(url, capitalName, apiTriger);
  const [isCapitaWeatherVisble, setIsCapitalWeatherSisible] = useState<boolean >(false);

  const handleOnCapitalButton = () => {
    if (!data) {
      setCapitalName(localState?.capital);
      setApiTriger((prev) => !prev);
    }
    setIsCapitalWeatherSisible((prev) => !prev);
  };

 

  return (
    <div>
    <div className="countryContainer">
      <div>
        <span>Country</span>:<span>{localState?.name?.common}</span>
      </div>
      <div>
        <span>Capital</span>:<span>{localState?.capital}</span>
      </div>
      <div>
        <span>Population</span>:<span>{localState?.population}</span>
      </div>
      <div>
        <img src={localState?.flags?.png} alt="flag image"></img>
      </div>
      <div>
        <Button variant="contained" onClick={handleOnCapitalButton}>
          {isLoading ? "Loadding..." : "capital-weather"}
        </Button>
      </div>
      {isCapitaWeatherVisble && data && (
        <CapitaWeather capitalName={capitalName} data={data}></CapitaWeather>
      )}

      
    </div>
    <div className="countryButton">
      </div>
      <Button variant="contained" type="button" onClick={() => navigate("/")}> ← Back</Button>
    </div>
  );
};

export default CountryDetails;

const CapitaWeather = ({ data, capitalName }: any) => {
  console.log(capitalName, data);

  return (
    <div className="capitalContainer">
      <div>
        Weather report of :<br></br>
        <b>{capitalName}</b>
      </div>
      <div>
        <img alt="weather icon" src={data?.current?.weather_icons}></img>
        <span>
          Tempratur:{data?.current?.temperature}
          <sup>0</sup>C
        </span>
      </div>
      <div>
        <span>Humidity</span> : <span>{data?.current?.humidity}</span>
      </div>
      <div>
        <span> weather_descriptions</span>:<span>{data?.current?.weather_descriptions[0]}</span>
      </div>
      <div>
        <span>weather_code</span> : <span>{data?.current?.weather_code}</span>
      </div>
    </div>
  );
};