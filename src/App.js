import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Homepage from './components/Homepage/Homepage.jsx';
import Team from './components/Team/Team.jsx';
import Try from './components/Project/Try.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Project from './components/try/Project.js';



function App() {
  return (

    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Homepage/>
    </Route>
    <Route path="/team">
      <Team/>
    </Route>
    <Route path="/try">
    <Try/>
    </Route>
    <Route path="/trial">
    <Project/>
    </Route>
  </Switch>
</div>
    </Router>
  );
}

export default App;
