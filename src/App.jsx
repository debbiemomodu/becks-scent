
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/packages"
import ScentGuide from "./components/Scents"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-body">
      
      <Hero />
      <About />
      <ScentGuide/>
      <Packages />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;