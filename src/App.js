import React from 'react';
import Cards from './components/Project/Cards';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Team from './components/Teams/Team';
import ContactForm from './components/Form/ContactForm';

function App() {
  return(
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/"><Home/></Route>
    <Route path="/team"><Team/></Route>
    <Route path="/projects"><Cards/></Route>
    <Route path="/form"><ContactForm/></Route>
    </Switch>
    <Footer/>
    </Router>
  )
  
}
export default App;
