import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Homepage from './components/Homepage/Homepage.jsx';
import Team from './components/Team/Team.jsx';

//import Projectr from './components/Project/projectFp.jsx';
import Cards from './components/Project/cards.jsx';
import './components/try/grid.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";





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
    <Route path="/projects">
    <Cards/>
    </Route>
    
  </Switch>
  
</div>
    </Router>
  );
}

export default App;
