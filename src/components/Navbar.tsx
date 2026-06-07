import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    transition: 'all 0.3s ease',
    padding: isScrolled ? '1rem 0' : '1.5rem 0',
    background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--surface-border)' : 'none',
  };

  const linkStyles: React.CSSProperties = {
    color: 'var(--text-main)',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'color 0.2s',
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src={logo} alt="Infinity Layers Logo" style={{ height: '40px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
            INFINITY <span className="text-gradient">LAYERS</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <a href="#services" style={linkStyles}>Services</a>
          <a href="#materials" style={linkStyles}>Colors & Materials</a>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
