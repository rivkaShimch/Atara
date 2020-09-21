import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
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
