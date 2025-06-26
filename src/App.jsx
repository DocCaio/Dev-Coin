import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';  
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>       
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
