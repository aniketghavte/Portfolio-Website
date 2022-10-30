
import React from 'react'
import './App.scss'

import {About, Footer, Header, Skills, Testimonials, Work, Resources} from './container';
import {Navbar} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
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
              <Footer/>
              
                </Route>
        </Switch>
        
       </Router>
        
    </div>
  )
}

export default App



