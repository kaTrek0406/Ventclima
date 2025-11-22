import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Problems from './components/Problems/Problems';
import Benefits from './components/Benefits/Benefits';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Problems />
      <Benefits />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
