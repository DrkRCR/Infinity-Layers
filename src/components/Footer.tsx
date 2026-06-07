
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ borderTop: '1px solid var(--surface-border)', padding: '3rem 0', marginTop: '2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="Infinity Layers Logo" style={{ height: '36px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
            INFINITY <span className="text-gradient">LAYERS</span>
          </span>
        </div>

        <div className="text-muted" style={{ fontSize: '0.95rem', textAlign: 'center', lineHeight: '1.5' }}>
          Established January 18th, 2025<br />
          &copy; {currentYear > 2025 ? `2025 - ${currentYear}` : '2025'} Infinity Layers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
