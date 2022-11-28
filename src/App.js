
import React, { useEffect } from 'react'
import './App.scss'

import {About, Contact, Header, Skills, Testimonials, Work, Resources} from './container';
import {Navbar} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import ReactGA from 'react-ga';
const TRACKING_ID ="UA-225995336-1";
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className='app'>
       <Router>
       <Switch>
          <Route path="/resources">
             <Resources/>
          </Route>
          <Route path="/">
                <Navbar/>
              <Header/>
              <About/>
              <Work/>
              <Skills/>
              {/* <Testimonials/> */}
              <Contact/>
              
                </Route>
        </Switch>
        
       </Router>
        
    </div>
  )
}

export default App



