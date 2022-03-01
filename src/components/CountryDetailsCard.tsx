import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useApiFetch, { useApiFetchType } from "../hooks/useFetchApi";
import Error from "../utility/Error";
import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    width: "100%",
  },

  root: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // borderRadius: "10px",
  },

  img: {
    //border: "2px solid gray",
    width: "350px",
    height: "200px",
    objectFit: "cover",
    margin: "8px",
    border: "solid",
    borderRadius: "4px",
  },
  title: {
    padding: 0,
    fontSize: 19,
    fontWeight: "bolder",
    marginTop: "3px",
    color: "gray",
  },
  subTitle: {
    fontSize: "20px",
    fontWeight: 800,
    marginTop: "0.5px",
  },
  btn: {
    width: "100%",
  },
  weatherCard: {
    width: "500px",
    margin: "0 auto",
    marginTop: "50px",
  },
  name: {
    fontWeight: 800,
    fontSize: "18px",
    padding: "4px",
  },
  time: {
    fontWeight: 700,
    fontSize: "16px",
    padding: "5px",
  },
  tempImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  temp: {
    fontSize: "28px",
    fontWeight: 900,
  },
  weatherDesc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    height: "80px",
    width: "80px",
  },
  windSpeed: {
    fontSize: "16px",
    fontWeight: 700,
  },
  button: {
    width: "100%",
    marginTop:"50px",
  },
}));

const CountryDetailsCard = ({ countryData }: any): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const weatherURL: string =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const capitalName: string = countryData?.name?.common;

  const { data }: useApiFetchType = useApiFetch(weatherURL, capitalName);
  console.log(data);

  const classes: ClassNameMap = useStyles();

  const [showWeatherData, setShowWeatherData] = useState<boolean>(false);

  const capitalButtonHandler = (): void => {
    setShowWeatherData(true);
  };
  const backButtonHandler = (): void => {
    navigate("/");
  };
  return (
    <div>
      {!showWeatherData ? (
        <div className={classes.mainContainer}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.img}
              component="img"
              src={countryData?.flags?.png}
              alt="flag-img"
            ></CardMedia>

            <CardContent className={classes.title}>Country</CardContent>
            <CardContent className={classes.subTitle}>
              {countryData?.name?.common}
            </CardContent>
            <CardContent className={classes.title}>Capital</CardContent>
            <CardContent className={classes.subTitle}>
              {countryData?.capital}
            </CardContent>
            <CardContent className={classes.title}>Population</CardContent>
            <CardContent className={classes.subTitle}>
              {countryData?.population}
            </CardContent>
            <CardContent className={classes.title}>Lat-lng</CardContent>
            <CardContent className={classes.subTitle}>
              {countryData?.latlng?.[0]},{countryData?.latlng?.[1]}
            </CardContent>
            <Button
              variant={"contained"}
              color="primary"
              onClick={capitalButtonHandler}
              className={classes.btn}
            >
              Capital Weather
            </Button>
          </Card>
        </div>
      ) : (
        <>
          {data === "" ? (
            <Error />
          ) : (
            <div className={classes.weatherCard}>
              <Card>
                <CardContent>
                  {/* <Typography>Location</Typography> */}
                  <Typography className={classes.name}>
                    {data?.location?.name}
                  </Typography>
                  <Typography className={classes.time}>
                    {data?.location?.localtime}
                  </Typography>
                  <div className={classes.tempImage}>
                    <Typography className={classes.temp}>
                      {data?.current?.temperature}
                      <sup>o</sup>C
                    </Typography>
                    <div className={classes.weatherDesc}>
                      <CardMedia
                        component={"img"}
                        className={classes.icon}
                        image={data?.current?.weather_icons?.[0]}
                        alt="weather icon"
                      ></CardMedia>
                      <Typography className={classes.time}>
                        {data?.current?.weather_descriptions[0]}
                      </Typography>
                    </div>
                  </div>
                  <Typography className={classes.windSpeed}>
                    Wind speed: {data?.current?.wind_speed} km/h
                  </Typography>
                </CardContent>
              </Card>
              <Button
                variant={"contained"}
                color="secondary"
                // style={{ margin: "50px" }}
                onClick={backButtonHandler}
                className={classes.button}
              >
                Search Another Country
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CountryDetailsCard;
