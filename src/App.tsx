import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { logDOM } from '@testing-library/dom';

function App() {

  // const user = false;

  return (
    <Router>
      <Topbar/>  

        <Switch>

  
          <Route path="/Login">
              <Login/>
          </Route>

           <Route exact path="/">
              <Register/>
          </Route>

          <Route path="/Home">
              <Home/> 
          </Route>

          <Route path="/Write">
               <Write/> 
          </Route>

           <Route path="/Settings">
               <Settings/> 
          </Route> 

           <Route path="/post/:postId">
            <Single/>
          </Route>  

        </Switch>
    </Router>
  );
}

export default App;
