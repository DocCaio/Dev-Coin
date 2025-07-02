import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { Company } from './components/pages/Company';
import { NewProject } from './components/pages/NewProjects';
import { Projects } from './components/pages/Projects';
import { Container } from './components/layout/Container';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <Router>
    <NavBar/>    

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
             <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newprojects" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer/>

    </Router>
  );
}

export default App;
