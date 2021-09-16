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

function App() {

  const user = false;

  return (
    <Router>
      <Topbar/>  

        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/Register">
              {user ? <Home/> : <Register/>}
          </Route>

          <Route path="/Login">
              {user ? <Home/> : <Login/>}
          </Route>

          <Route path="/Write">
              {user ? <Write/> : <Register/>}
          </Route>

          <Route path="/Settings">
              {user ? <Settings/> : <Register/>}
          </Route>

          <Route path="/post/:postId">
            <Single/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
