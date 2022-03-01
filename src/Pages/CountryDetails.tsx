import { CircularProgress } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryDetailsCard from "../components/CountryDetailsCard";
import useApiFetch, { useApiFetchType } from "../hooks/useFetchApi";
import Error from "../utility/Error";
import { ClassNameMap, makeStyles } from "@mui/styles";

const useStyles = makeStyles (() => ({
  loading: {
    margin: "200px",
  }
}))

const CountryDetails = (): JSX.Element => {
  const countryURL = "https://restcountries.com/v3.1/name/";
  const countryName: string | undefined = useParams().name;

  const { data, error, isLoading }: useApiFetchType = useApiFetch(
    countryURL,
    countryName
  );

  const classes: ClassNameMap = useStyles();
  console.log(data)

  // useEffect(() => {
  //   console.log(data?.[0]);
  // }, [data]);

  return (
    <div>
      {error ? (
        <Error />
      ) : isLoading ? (
        <div className={classes.loading}>
          <CircularProgress color="success" size="90px"></CircularProgress>
          <br />
          Loading
        </div>
      ) : (
        <CountryDetailsCard countryData={data?.[0]}></CountryDetailsCard>
      )}
    </div>
  );
};

export default CountryDetails;
