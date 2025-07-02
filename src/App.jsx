import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { Company } from './components/pages/Company';
import { NewProject } from './components/pages/NewProjects';
import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/newprojects">New Project</Link>
          </li>
        </ul>
      </nav>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newprojects" element={<NewProject />} />
        </Routes>
      </Container>
      <footer>
        <p>Footer</p>
      </footer>

    </Router>
  );
}

export default App;
