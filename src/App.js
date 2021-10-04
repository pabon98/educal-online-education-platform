import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Instructors from './components/Instructors/Instructors';


function App() {
  return (
    /* Using react router for routing */
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/instructor">
           <Instructors></Instructors>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
