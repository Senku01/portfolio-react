import './App.css';
import Navbar from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
