import './styling/dist/css/index.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Banner from './components/Banner';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CTA from './components/CTA';
function App() {


  return (
    <div >
     <Navbar />
     <Hero />
     <About />
     <Banner />
     <CTA />
     <Features />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
