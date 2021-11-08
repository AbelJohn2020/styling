import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" />
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
