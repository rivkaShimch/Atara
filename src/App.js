import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./components/navbar";
import CreateUser from "./components/create-user";
import About from "./components/about";
import Home from "./components/Home/home";
import Login from './components/Login/login';
import Empty_page from './components/Empty_page/empty_page';


const App = function () {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/empty_page" component={Empty_page} />
      </div>
    </Router>
  );
};
export default App
