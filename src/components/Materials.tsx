
import { Palette } from 'lucide-react';

const Materials = () => {
  const groupedSwatches = {
    'PLA+': [
      { name: 'Light Blue', color: '#06B6D4' },
      { name: 'Military Khaki', color: '#558b5c' },
      { name: 'Nuclear Red', color: '#EF4444' },
      { name: 'Outrageous Orange', color: '#F97316' },
      { name: 'Pitch Black', color: '#1A1A1A' },
      { name: 'Pure White', color: '#F8F8F8' },
      { name: 'Royal Blue', color: '#3717d3' },
      { name: 'White', color: '#F8F8F8' }
    ],
    'PLA': [
      { name: 'Bumblebee Yellow', color: '#EAB308' }
    ],
    'PETG': [
      { name: 'Black', color: '#1A1A1A' }
    ],
    'TPU': [
      { name: 'Black', color: '#1A1A1A' }
    ]
  };

  return (
    <section id="materials" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Palette size={40} color="var(--accent-1)" />
          </div>
          <h2 className="title-medium" style={{ marginBottom: '1rem' }}><span className="text-gradient">Colors & Materials</span></h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Choose from a vast selection of premium filaments. Don't see a color you need? We can custom order it for your batch project.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {Object.entries(groupedSwatches).map(([material, swatches], mIdx) => (
            <div key={material} className="animate-fade-in" style={{ animationDelay: `${mIdx * 0.2}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{material}</h3>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--surface-border), transparent)' }}></div>
              </div>
              
              <div className="grid grid-cols-3">
                {swatches.map((swatch, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: swatch.color,
                      border: '2px solid var(--surface-border)',
                      boxShadow: `0 0 20px ${swatch.color}40`
                    }}></div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{swatch.name}</h4>
                      <span className="text-muted" style={{ fontSize: '0.9rem', padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        {material}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
