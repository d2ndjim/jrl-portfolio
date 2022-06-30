import Home from './components/Home';
import DeskNav from './components/deskNav';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/MobFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <DeskNav />
    </div>
  );
}

export default App;
