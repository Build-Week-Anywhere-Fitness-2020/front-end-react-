import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//component Imports
//Component Imports
import instructorLogin from "./Components/Instructor/InstructorLogin"
import instructorRegistration from "./Components/Instructor/InstructorRegister"
import HomePage from "./Components/HomeComponents/HomePage";
import Nav from "./Components/HomeComponents/Nav";

ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/instructor-registration" component={instructorRegistration}/>
        <Route exact path="/instructor-login" component={instructorLogin}/>
        <Route exact path="client-registration" />
        <Route exact path="client-login"/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
