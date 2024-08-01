import './App.css'
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <main className='text-textPrimary bg-accent body-font'>
          <NavBar />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <BackToTop />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
