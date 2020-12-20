import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react"
import HomeCards from "./HomeCards"
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(( theme) => ({
    root: {
        flexGrow: 1,
      },
      main: {
        minHeight: "100vh",
        backgroundImage:`url(${process.env.PUBLIC_URL + 'images/photo-1536922246289-88c42f957773.webp'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center-top",
      }

}));



const HomePage = () => {
    const classes = useStyles();



    
return(
<div>
<Grid container>
    <Grid className={classes.main} item xs={12}>
        <Paper elevation={0}>
            <Typography variant="h2">
            Get Fit Today
            </Typography>
        </Paper>
    </Grid>
    <Grid  item xs={3} className={classes.root} spacing={4}>
    <HomeCards/>
    </Grid>
</Grid>


</div>)
}


export default HomePage;