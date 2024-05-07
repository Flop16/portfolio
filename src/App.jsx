import styles from './App.module.css';
import React, { useState } from 'react';
import Portfolio from './components/portfolio';
import About from './components/About';
import Project from './components/projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [cursorX, setCursorX ] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Portfolio /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/projects" element={<Project /> } />
            <Route path="/contact" element={<Contact /> } />
          </Routes>
        </Router>
        <div className={styles.cursor} style={{ 
          left: cursorX + 'px', 
          top: cursorY + 'px' 
          }}>

        </div>
      </div>
      </>
  );
}

export default App;

