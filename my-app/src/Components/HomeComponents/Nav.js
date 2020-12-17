import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        background: "none"}
  }));

export default function Nav() {
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault();
        console.log("nav link click")
      }

    return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={1}>
          <Toolbar>
          <Typography className={classes.title}/>
          <Button href="/" onClick={() => handleClick()} color="primary" size="large" color="inherit">Home</Button>
            <Button href="/instructor-login" onClick={() => handleClick()} size="large" color="inherit">Instructor Login</Button>
            <Button href="/instructor-registration" onClick={() => handleClick()} size="large" color="inherit">Instructor Registration</Button>
            <Button href="/client-login" onClick={() => handleClick()} size="large" color="inherit">User Login</Button>
            <Button href="/client-registration" onClick={() => handleClick()} size="large" color="inherit">User Registration</Button>
          </Toolbar>
      </AppBar>
    </div>)
}