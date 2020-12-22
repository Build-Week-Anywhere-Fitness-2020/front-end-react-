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
import Nav from "./Components/HomeComponents/Nav";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/instructor-registration" component={instructorRegistration}/>
        <Route exact path="/instructor-login" component={instructorLogin}/>
        <Route exact path="client-registration" />
        <Route exact path="client-login"/>
    
      </Switch>
    </Router>
    </div>
  );
}

export default App;
