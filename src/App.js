import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/myfiles" />
          <Route exact path="/resentfiles" />
          <Route exact path="/sharedfiles" />
          <Route exact path="/filerequest" />
          <Route exact path="/trash" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
