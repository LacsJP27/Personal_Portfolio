import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'

function Portfolio() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  )
}

export default App
