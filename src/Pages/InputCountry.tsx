import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React, {ChangeEvent, FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "400px",
    width: "400px",
    // border: "2px solid black"  
  },
  input: {
    marginTop: "200px",
    padding: "20px",
    borderRadius:"10px",
    fontSize:"25px"
  },
 button:{
  width: "350px",
  margin: "20px"
 }
}))

const InputCountry = (): JSX.Element => {
  const [countryName, setCountryName] = useState<string>("")
  const navigate: NavigateFunction = useNavigate();

  const classes: ClassNameMap = useStyles();

  const changeCountryNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
     setCountryName(e.target.value);

  }

  const submitFormHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    navigate(`${countryName}`);
  }
  return (
    <Box component="form" className={classes.root} onSubmit={submitFormHandler}>
      <input
        autoFocus={true}
        type="text"
        className={classes.input}
        required
        value={countryName}
        placeholder="Enter Country Name"
        onChange={changeCountryNameHandler}
      ></input>
      <Button variant="contained" className={classes.button} color={"primary"} type="submit">Submit</Button>
    </Box>
  );
};

export default InputCountry;
