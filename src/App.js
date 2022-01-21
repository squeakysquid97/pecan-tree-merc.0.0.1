import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Signup } from "./components";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Switch>
          <Route path="/" exact component={() => <Home />} />
          </Switch>
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Signup />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
