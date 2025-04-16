import React, { useState } from 'react';
import './App.css';
import Entrance from './components/Entrance';
import ExperienceRoom from './components/ExperienceRoom';
import ProjectRoom from './components/ProjectRoom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="App">
      {!entered ? (
        <Entrance onEnter={() => setEntered(true)} />
      ) : (
        <>
          <main>
            <Header />
            <ExperienceRoom />
            <ProjectRoom/>
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
