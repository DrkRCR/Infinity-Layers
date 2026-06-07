
import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*New Order Request!*\n\n*Name:* ${name}\n*Email:* ${email}\n*Material:* ${material}\n*Color:* ${color}\n*Quantity:* ${quantity}\n\n*Project Notes:*\n${notes}\n\n_(Please attach your 3D files here in the chat)_`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp
    window.open(`https://wa.me/917226844111?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="glass-panel animate-fade-in" style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '300px',
            height: '300px',
            background: 'var(--primary-glow)',
            filter: 'blur(60px)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>

          <div className="grid grid-cols-2" style={{ position: 'relative', zIndex: 1, gap: '4rem' }}>
            <div>
              <h2 className="title-medium" style={{ marginBottom: '1rem' }}>Ready to <span className="text-gradient">Print?</span></h2>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Whether you need a single prototype or a batch of thousands, we're ready to bring your project to life.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <Mail size={24} color="var(--accent-1)" />
                  </div>
                  <div>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>Email Us</div>
                    <strong>infinitylayers.co@gmail.com</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <MapPin size={24} color="var(--accent-2)" />
                  </div>
                  <div>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>Location</div>
                    <strong>Global Shipping Available</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} required />
                  <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} required />
                </div>
                
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <select value={material} onChange={e => setMaterial(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit', appearance: 'none' }} required>
                    <option value="" disabled>Select Material</option>
                    <option value="PLA">PLA / PLA+</option>
                    <option value="PETG">PETG</option>
                    <option value="TPU">TPU (Flexible)</option>
                    <option value="Other">Other / Unsure</option>
                  </select>
                  
                  <select value={color} onChange={e => setColor(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit', appearance: 'none' }} required>
                    <option value="" disabled>Select Color</option>
                    <option value="White">Pure White</option>
                    <option value="Black">Pitch Black</option>
                    <option value="Yellow">Bumblebee Yellow</option>
                    <option value="Red">Nuclear Red</option>
                    <option value="Blue">Royal Blue / Light Blue</option>
                    <option value="Green">Military Khaki</option>
                    <option value="Orange">Outrageous Orange</option>
                    <option value="Other">Custom / Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <input type="number" min="1" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} required />
                  
                  {/* File Upload stylized as a button-like input */}
                  <div style={{ position: 'relative', width: '100%' }} title="Note: Your file will not be uploaded automatically. Please attach it in WhatsApp after clicking submit.">
                    <input type="file" id="file-upload" style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
                    <div style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px dashed var(--accent-1)', borderRadius: '8px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'inherit', cursor: 'pointer' }}>
                      <span className="text-gradient">Upload 3D File (STL, OBJ, STEP)</span>
                    </div>
                  </div>
                </div>

                <textarea placeholder="Tell us about your project, layer height preference, infill, etc..." value={notes} onChange={e => setNotes(e.target.value)} rows={4} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.5rem', padding: '1rem', marginTop: '0.5rem' }}>
                  Get Quote & Submit Order <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
