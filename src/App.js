import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import Navbars from './components/Navbars/Navbars';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <Router>
        <Navbars/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
