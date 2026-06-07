
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Materials from './components/Materials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-mesh"></div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Materials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
