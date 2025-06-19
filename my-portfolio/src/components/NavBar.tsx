import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">My Portfolio</div>
      {/* Hamburger visible when menu closed */}
      {!menuOpen && (
        <div className="ham-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>        
        {/* X inside the sliding menu */}
        {menuOpen && (
          <div className="ham-menu active" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/biography" onClick={() => setMenuOpen(false)}>Biography</Link></li>
        <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;