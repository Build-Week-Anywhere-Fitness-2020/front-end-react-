import { Grid, makeStyles } from "@material-ui/core";
import React from "react"
import HomeCards from "./HomeCards"



const useStyles = makeStyles(( theme) => ({
    root: {
        flexGrow: 1,
      },

}));



const HomePage = () => {
    const classes = useStyles();
return(
<div>
<Grid container>
    <Grid item xs={12} className={classes.root} spacing={4}>
    <HomeCards/>
    </Grid>
</Grid>


</div>)
}


export default HomePage;