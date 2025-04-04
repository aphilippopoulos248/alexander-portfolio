import React from 'react'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Games from './components/games/Games'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
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
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App