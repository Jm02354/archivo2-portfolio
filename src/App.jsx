import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Home from './components/Home'
import  NavBar  from './components/NavBar'
import Particle from './components/Particle'
import Project from './components/Project'
import Skill from './components/Skill'

function App() {
  return (
    <div className='app_container'>
      <Particle />
      <NavBar />
      <Home />
      <AboutMe />
      <Project />
      <Skill />
      <ContactMe />
      <Footer/>
    </div>
  )
}

export default App
