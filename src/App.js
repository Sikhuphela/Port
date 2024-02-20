import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import About from './Pages/About'; 
import Skills from './Pages/Skills'; 
import Projects from './Pages/Projects'; 
import Contacts from './Pages/Contacts'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 