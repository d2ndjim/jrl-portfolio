import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DeskNav from './components/deskNav';
import Projects from './components/projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <DeskNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
