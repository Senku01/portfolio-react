import './App.css';
import Navbar from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return <ThemeProvider>
    <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        {/* Home */}
        <Home />
        {/* About */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Footer*/}
        <Footer />
      </BrowserRouter>
      </ThemeProvider>
}

export default App;
