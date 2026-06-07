
import { Printer, PenTool, Cuboid, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: '3D Printing',
      description: 'High-quality FDM printing with a wide variety of materials including PLA, PETG, and TPU. Fast turnaround and precision.',
      icon: <Printer size={32} color="var(--accent-1)" />
    },
    {
      title: 'Custom 3D Design',
      description: 'Have an idea? Our design team can model your concepts in CAD software and prepare them perfectly for 3D printing or manufacturing.',
      icon: <PenTool size={32} color="var(--accent-2)" />
    },
    {
      title: 'Rapid Prototyping',
      description: 'Iterate quickly. We help you test your designs with functional prototypes before you commit to expensive mass production.',
      icon: <Zap size={32} color="#ff00ff" />
    },
    {
      title: 'Batch Production',
      description: 'Need 10 or 1000 parts? Our print farm is equipped to handle large batch orders with consistent quality across every single piece.',
      icon: <Cuboid size={32} color="#00ffaa" />
    }
  ];

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <h2 className="title-medium" style={{ marginBottom: '1rem' }}>Our <span className="text-gradient">Services</span></h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            From single custom prototypes to full-scale print farm production runs, we have the tools and expertise to deliver.
          </p>
        </div>

        <div className="grid grid-cols-2">
          {services.map((service, idx) => (
            <div key={idx} className={`glass-card animate-fade-in delay-${(idx % 3) + 1}`} style={{ padding: '2.5rem' }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                width: '64px', height: '64px',
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--surface-border)'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
