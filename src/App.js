import React from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import Demoreel from './Components/Demoreel';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import { Router } from "@reach/router";

 function App()  {
  
  
  
  return (
  
    <div className="main">
  
      <Home/>
      <div class="hightfill"></div>
      <Nav/>
      <Router>
      <Gallery path="/"/>
      </Router>
      <Demoreel/>
      <Router>
      <Projects path="/"/>
      </Router>
      <Testimonials/>
      <Footer/>
    </div>
    

  );

}

export default App;
