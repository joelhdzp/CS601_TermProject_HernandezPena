import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home.tsx';
import Biography from './pages/Biography.tsx';
import Resume from './pages/Resume.tsx';
import Skills from './pages/Skills.tsx';
import Projects from './pages/Projects.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import NoPage from './pages/NoPage';
import Header from './components/Header.tsx';
import Navbar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;