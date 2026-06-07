
import { ArrowRight, Box } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container grid grid-cols-2" style={{ alignItems: 'center' }}>
        <div className="animate-fade-in">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(138, 43, 226, 0.1)', border: '1px solid var(--accent-2)', borderRadius: '20px', color: 'var(--accent-2)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Premium 3D Printing & Design
          </div>
          <h1 className="title-large" style={{ marginBottom: '1.5rem' }}>
            Bring Your Ideas to <span className="text-gradient">Reality</span>
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Infinity Layers offers top-tier 3D printing and rapid prototyping services. From custom models to large batch production, we deliver unparalleled quality.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ gap: '0.5rem' }}>
              Start Your Project <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-outline" style={{ gap: '0.5rem' }}>
              <Box size={20} /> Explore Services
            </a>
          </div>
        </div>

        <div className="animate-fade-in delay-2" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 60%)',
            zIndex: -1
          }}></div>
          {/* A cool glassmorphic showcase card instead of a raw image to make it look dynamic and premium */}
          <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'var(--primary-glow)',
              filter: 'blur(40px)',
              borderRadius: '50%'
            }}></div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }} className="text-gradient">Precision Printing</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-muted">Layer Height</span>
                <strong>0.12mm - 0.28mm</strong>
              </div>
              <div className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-muted">Materials</span>
                <strong>PLA, PETG, TPU</strong>
              </div>
              <div className="glass-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-muted">Max Volume</span>
                <strong>220x220x250 mm</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
