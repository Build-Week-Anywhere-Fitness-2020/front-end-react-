import React from "react"
import logo from './logo.svg';
import './App.css';
//React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Component Imports
import instructorLogin from "./Components/Instructor/InstructorLogin"
import instructorRegistration from "./Components/Instructor/InstructorRegister"
import HomePage from "./Components/HomeComponents/HomePage";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/instructorRegistration" component={instructorRegistration}/>
        <Route exact path="/instructorLogin" component={instructorLogin}/>
        <Route exact path="clientRegistration"/>
        <Route exact path="clientLogin"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
