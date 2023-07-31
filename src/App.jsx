import './App.css'
import Navbar from './Components/navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contacts from './Components/Contacts'
function App() {

  return (
    <>
      <h1>
        <Navbar/>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contacts />
      </h1>
    </>
  )
}

export default App
