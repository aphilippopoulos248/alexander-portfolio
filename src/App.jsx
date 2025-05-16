import React from 'react'
import Background from './components/background/Background'
import Navbar from './components/nav/Navbar'
import GoBack from './components/nav/GoBack'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Games from './components/services/games/Games'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Background/>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/games" element={
            <>
              <GoBack />
              <Games />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App