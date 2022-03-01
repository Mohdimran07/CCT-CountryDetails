import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Error = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
    const returnHandler = (): void => {
     navigate("/");
    }
    return(
        <div>
            <h1>Something went wrong...</h1>
            <Button variant="contained" color="secondary" onClick={returnHandler}>Retry</Button>
        </div>
    )
}

export default Error;