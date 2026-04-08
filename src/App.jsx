import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Media from './components/Media';
import Projects from './components/Projects';
import Publications from './components/Publications';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SideNav />
      <main className="main-content">
        <Hero />
        <NavBar />
        <Experience />
        <Education />
        <Media />
        <Projects />
        <Publications />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Shooting Chuang</p>
      </footer>
    </div>
  );
}

export default App;
