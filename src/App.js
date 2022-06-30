import Home from './components/Home';
import DeskNav from './components/deskNav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <DeskNav />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
