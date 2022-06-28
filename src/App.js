import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DeskNav from './components/deskNav';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <DeskNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
