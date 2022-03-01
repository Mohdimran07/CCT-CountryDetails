import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles(() => ({
    root:{
        textAlign: "center",
        fontSize:"30px"
    }
}))

const NavigationBar = (): JSX.Element => {
    const classes : ClassNameMap = useStyles();


    return (
        <AppBar position="static">
        <Toolbar>
            <Typography className={classes.root}>Country Capital Weather App</Typography>
        </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;