import React, { ChangeEvent, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";
import { Box, Button, ClassNameMap } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "400px",
    width: "400px",
  },
  input: {
    marginTop: "100px",
    padding: "20px",
    borderRadius: "10px",
    fontSize: "20px",
  },
  button: {
    marginTop: "20px",
    borderRadius: "10px",
    padding: "10px 20px",
  },
}));

const InputCountry = (): JSX.Element => {
  const [countryName, setCountryName] = useState("");
  const [trigerApi, setTrigetApi] = useState(false);
  let url = "https://restcountries.com/v3.1/name/";
  const { data, isLoading, error } = useFetchApi(url, countryName, trigerApi);

  const navigate: NavigateFunction = useNavigate();

  const handleOnFormSubmit = (e: any): void => {
    e.preventDefault();
    setTrigetApi((prev: any) => !prev);
    console.log("submited");
  };

  
  const classes: ClassNameMap = useStyles();
  useEffect(() => {
    if (data) {
      navigate("/countryDetails", { state: data?.[0] });
    }
  }, [data]);
  
  useEffect(() => {
    console.log(trigerApi);
  }, [trigerApi]);
  
  if (error.type !== 0) {
    return (
      <div>
        {" "}
        <h4>{error.message}</h4>
        <Button variant="contained"
          onClick={() => {
            window.location.reload();
          }}
          >
          Reload
        </Button>
      </div>
    );
  }

  return (
    <Box component="form" className={classes.root} onSubmit={handleOnFormSubmit}>
    
      <input
        type="text" className={classes.input}
        placeholder="Enter Country name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCountryName(e.target.value);
        }}
        required
      ></input>
      <Button variant="contained" type="submit" className={classes.button} value={isLoading ? "Loadding.." : "Submit"}>Submit</Button>
    
    </Box>
  );
};

export default InputCountry;